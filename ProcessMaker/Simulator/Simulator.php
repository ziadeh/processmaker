<?php

namespace ProcessMaker\Simulator;

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
        $totalPaths = $this->calculatePaths();

        $simulation = [];
        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
        foreach ($processes as $process) {
            $startEvents = $process->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'startEvent');
            foreach ($startEvents as $startEvent) {
                $start = $startEvent->getBpmnElementInstance();
                for ($seed = 0; $seed < $totalPaths; $seed++) {
                    $result = $this->runSimulation($process->getBpmnElementInstance(), $start, $seed);
                    in_array($result, $simulation, false) ?: $simulation[] = $result;
                }
            }
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
        $instance = $this->engine->createExecutionInstance($process, $dataStore);
        $start->start($instance);
        $this->engine->runToNextState();
        $tokens = $instance->getTokens();
        while ($tokens->count()) {
            foreach ($instance->getTokens() as $token) {
                $element = $token->getOwnerElement();
                $status = $token->getStatus();
                if ($element instanceof ActivityInterface && $status === ActivityInterface::TOKEN_STATE_ACTIVE) {
                    $element->complete($token);
                    $this->engine->runToNextState();
                    break;
                }
            }
            $tokens = $instance->getTokens();
        }
        return [
            'status' => $instance->getProperty('status'),
            'path' => $instance->getProperty('trace')->toArray(),
        ];
    }
}
