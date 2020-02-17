<?php

namespace ProcessMaker\Simulator;

use DOMElement;
use ProcessMaker\Nayra\Contracts\Bpmn\ActivityInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\ProcessInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\StartEventInterface;
use ProcessMaker\Nayra\Contracts\Engine\EngineInterface;
use ProcessMaker\Nayra\Contracts\RepositoryInterface;
use ProcessMaker\Nayra\Storage\BpmnDocument;

/**
 * Simulator
 *
 */
class Simulator
{
    /**
     * @var BpmnDocument
     */
    private $bpmnRepository;

    /**
     * @var RepositoryInterface
     */
    private $factory;

    /**
     * @var EngineInterface
     */
    private $engine;

    /**
     * @var array
     */
    private $variables = [];

    public function __construct(BpmnDocument $bpmnRepository)
    {
        $this->bpmnRepository = $bpmnRepository;
        $this->engine = $this->bpmnRepository->getEngine();
        $this->factory = $this->bpmnRepository->getFactory();
    }

    /**
     * Run the simulations
     *
     */
    public function run($bpmn)
    {
        $this->bpmnRepository->loadXML($bpmn);
        $engine = $this->bpmnRepository->getEngine();
        $totalPaths = $this->calculatePaths();

        $collaborations = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'collaboration');
        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
        foreach ($collaborations as $collaboration) {
            $engine->loadCollaboration($collaboration->getBpmnElementInstance());
        }
        foreach ($processes as $process) {
            $engine->loadProcess($process->getBpmnElementInstance());
        }
        $simulation = [];
        foreach ($processes as $process) {
            $startEvents = $process->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'startEvent');
            foreach ($startEvents as $startEvent) {
                $start = $startEvent->getBpmnElementInstance();
                if ($start->getEventDefinitions()->count()) {
                    continue;
                }
                for ($seed = 0; $seed < $totalPaths; $seed++) {
                    $result = $this->runSimulation($process->getBpmnElementInstance(), $start, $seed);
                    in_array($result, $simulation, false) ?: $simulation[] = $result;
                }
            }
        }
        $simulation = $this->checkUnreachableElements($simulation);
        return $simulation;
    }

    /**
     * Check unreachable elements
     *
     * @param array $simulation
     *
     * @return array
     */
    private function checkUnreachableElements($simulation)
    {
        $unreachable = [];
        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
        foreach ($processes as $process) {
            foreach ($process->childNodes as $node) {
                if ($node instanceof DOMElement && $node->localName !== 'sequenceFlow') {
                    $id = $node->getAttribute('id');
                    $inSimulation = array_filter($simulation, function ($sim) use ($id) {
                        foreach ($sim['path'] as $token) {
                            if ($token['id'] === $id) {
                                return true;
                            }
                        }
                        return false;
                    });
                    if (!$inSimulation) {
                        $unreachable[] = [
                            'id' => $id,
                            'name' => $node->getAttribute('name'),
                            'type' => $node->localName,
                            'status' => 'UNREACHABLE',
                        ];
                    }
                }
            }
        }
        if ($unreachable) {
            $simulation[] = [
                'path' => $unreachable,
                'status' => 'UNREACHABLE',
            ];
        }
        return $simulation;
    }

    private function calculatePaths()
    {
        $gateways = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'exclusiveGateway');
        $this->calculateGatewayPaths($gateways);
        $gateways = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'inclusiveGateway');
        $this->calculateGatewayPaths($gateways);
        return pow(2, count($this->variables));
    }

    private function calculateGatewayPaths($gateways)
    {
        foreach ($gateways as $gateway) {
            $outgoings = $gateway->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'outgoing');
            $default = $gateway->getAttribute('default');
            foreach ($outgoings as $outgoing) {
                if ($outgoing->nodeValue !== $default) {
                    $flow = $this->bpmnRepository->findElementById($outgoing->nodeValue);
                    $condition = $flow->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'conditionExpression')->item(0);
                    if ($condition) {
                        $condition->nodeValue = $this->addPathVariable();
                    }
                }
            }
        }
    }

    private function addPathVariable()
    {
        $variable = 'v' . count($this->variables);
        $this->variables[] = $variable;
        return $variable;
    }

    private function runSimulation(ProcessInterface $process, StartEventInterface $start, $seed = 0)
    {
        $dataStore = $this->factory->createDataStore();
        $data = [];
        foreach ($this->variables as $i => $variable) {
            $data[$variable] = boolval(($seed >> $i) & 1);
        }
        $dataStore->setData($data);
        $this->engine->closeExecutionInstances();
        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
        $instance = $this->engine->createExecutionInstance($process, $dataStore);
        $start->start($instance);
        $this->engine->runToNextState();
        $tasks = [];
        do {
            $changed = false;
            foreach ($processes as $process) {
                foreach ($process->getBpmnElementInstance()->getInstances() as $instance) {
                    foreach ($instance->getTokens() as $token) {
                        $element = $token->getOwnerElement();
                        $status = $token->getStatus();
                        if ($element instanceof ActivityInterface && $status === ActivityInterface::TOKEN_STATE_ACTIVE) {
                            $changed = true;
                            if (in_array($element->getId(), $tasks)) {
                                return [
                                    'status' => 'LOOP',
                                    'path' => $instance->getProperty('trace')->toArray(),
                                ];
                            }
                            $tasks[] = $element->getId();
                            $element->complete($token);
                            $this->engine->runToNextState(10);
                            break;
                        }
                    }
                }
            }
        } while ($changed);
        $path = [];
        foreach ($processes as $process) {
            foreach($process->getBpmnElementInstance()->getInstances() as $instance) {
                $newPath = $instance->getProperty('trace')->toArray();
                array_push($path, ...$newPath);
            }
        }
        return [
            'status' => $instance->getProperty('status'),
            'path' => $path,
        ];
    }
}
