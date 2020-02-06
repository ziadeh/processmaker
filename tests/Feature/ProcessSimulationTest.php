<?php

namespace Tests\Feature;

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
            }
        }
    }
}
