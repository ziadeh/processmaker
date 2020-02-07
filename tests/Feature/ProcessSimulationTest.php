<?php

namespace Tests\Feature;

use ProcessMaker\Nayra\Storage\BpmnDocument;
use ProcessMaker\Simulator\Simulator;
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
     * @var Simulator
     */
    private $simulator;

    public function setupProcessCheckTest()
    {
        $this->bpmnRepository = app('workflow.test');
        $this->simulator = new Simulator($this->bpmnRepository);
    }

    /**
     * Tests a process simulation
     *
     * @group process_tests
     */
    public function testProcessSimulation()
    {
        $simulation = $this->simulator->run(file_get_contents(__DIR__ . '/Api/processes/ExclusiveGateway.bpmn'));
        $this->assertEquals([
            [
                'status' => 'ACTIVE',
                'path' => [
                    [
                        'id' => 'StartEvent',
                        'type' => 'event',
                        'name' => 'Start',
                    ],
                    [
                        'id' => 'start',
                        'type' => 'task',
                        'name' => 'Task Start',
                    ],
                    [
                        'id' => 'ExclusiveGateway_1',
                        'type' => 'gateway',
                        'name' => '',
                    ],
                ],
            ],
            [
                'status' => 'COMPLETED',
                'path' => [
                    [
                        'id' => 'StartEvent',
                        'type' => 'event',
                        'name' => 'Start',
                    ],
                    [
                        'id' => 'start',
                        'type' => 'task',
                        'name' => 'Task Start',
                    ],
                    [
                        'id' => 'ExclusiveGateway_1',
                        'type' => 'gateway',
                        'name' => '',
                    ],
                    [
                        'id' => 'ScriptTask_1',
                        'type' => 'task',
                        'name' => 'Task True',
                    ],
                    [
                        'id' => 'ExclusiveGateway_2',
                        'type' => 'gateway',
                        'name' => '',
                    ],
                    [
                        'id' => 'end',
                        'type' => 'task',
                        'name' => 'Task End',
                    ],
                ],
            ],
            [
                'status' => 'COMPLETED',
                'path' => [
                    [
                        'id' => 'StartEvent',
                        'type' => 'event',
                        'name' => 'Start',
                    ],
                    [
                        'id' => 'start',
                        'type' => 'task',
                        'name' => 'Task Start',
                    ],
                    [
                        'id' => 'ExclusiveGateway_1',
                        'type' => 'gateway',
                        'name' => '',
                    ],
                    [
                        'id' => 'ScriptTask_2',
                        'type' => 'task',
                        'name' => 'Task False',
                    ],
                    [
                        'id' => 'ExclusiveGateway_2',
                        'type' => 'gateway',
                        'name' => '',
                    ],
                    [
                        'id' => 'end',
                        'type' => 'task',
                        'name' => 'Task End',
                    ],
                ],
            ],
        ] ,$simulation);
    }
}
