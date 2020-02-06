<?php

namespace Tests\Feature;

use Exception;
use ProcessMaker\Nayra\Contracts\Bpmn\ActivityInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\ProcessInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\StartEventInterface;
use ProcessMaker\Nayra\Contracts\Engine\EngineInterface;
use ProcessMaker\Nayra\Contracts\RepositoryInterface;
use ProcessMaker\Nayra\Storage\BpmnDocument;
use Tests\Feature\Shared\ProcessTestingTrait;
use Tests\Feature\Shared\RequestHelper;
use Tests\TestCase;

class ProcessSimulationTest extends TestCase
{
    use RequestHelper;
    use ProcessTestingTrait;

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

    private $variables = [];

    public function setupProcessCheckTest()
    {
        $this->bpmnRepository = app('workflow.test');
        $this->engine = $this->bpmnRepository->getEngine();
        $this->factory = $this->bpmnRepository->getFactory();
    }

    /**
     * Tests a process simulation
     *
     * @group process_tests
     */
    public function testProcessSimulation()
    {
        $this->bpmnRepository->load(__DIR__ . '/Api/processes/ExclusiveGateway.bpmn');
        $totalPaths = $this->calculatePaths();

        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
        foreach ($processes as $process) {
            $startEvents = $process->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'startEvent');
            foreach ($startEvents as $startEvent) {
                $start = $startEvent->getBpmnElementInstance();
                for ($seed = 0; $seed < $totalPaths; $seed++) {
                    $this->runSimulation($process->getBpmnElementInstance(), $start, $seed);
                }
            }
        }
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
        $tasks = [];
        while ($tokens->count()) {
            $submited = false;
            foreach ($instance->getTokens() as $token) {
                $element = $token->getOwnerElement();
                $status = $token->getStatus();
                if ($element instanceof ActivityInterface && $status === ActivityInterface::TOKEN_STATE_ACTIVE) {
                    $tasks[] = $element->getName() . ' (ID:' . $element->getId() . ')';
                    $element->complete($token);
                    $this->engine->runToNextState();
                    $submited = true;
                    break;
                }
            }
            $tokens = $instance->getTokens();
            if (!$submited && $tokens->count()) {
                throw new Exception('The process simulation got stuck');
            }
        }
    }
}
