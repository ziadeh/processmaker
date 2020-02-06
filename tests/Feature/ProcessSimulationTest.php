<?php

namespace Tests\Feature;

use Exception;
use ProcessMaker\Nayra\Contracts\Bpmn\ActivityInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\StartEventInterface;
use ProcessMaker\Nayra\Contracts\Engine\EngineInterface;
use ProcessMaker\Nayra\Contracts\RepositoryInterface;
use ProcessMaker\Nayra\Storage\BpmnDocument;
use ProcessMaker\Simulator\Request;
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
        $this->bpmnRepository->load(__DIR__ . '/Api/processes/ManualTask.bpmn');
        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
        foreach ($processes as $process) {
            $dataStore = $this->factory->createDataStore();
            $instance = $this->engine->createExecutionInstance($process->getBpmnElementInstance(), $dataStore);
            $startEvents = $process->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'startEvent');
            foreach ($startEvents as $startEvent) {
                $start = $startEvent->getBpmnElementInstance();
                $this->runInstance($instance, $start);
            }
        }
    }

    private function runInstance(Request $instance, StartEventInterface $start)
    {
        $processes = $this->bpmnRepository->getElementsByTagNameNS(BpmnDocument::BPMN_MODEL, 'process');
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
