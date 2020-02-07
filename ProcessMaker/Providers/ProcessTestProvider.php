<?php

namespace ProcessMaker\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use ProcessMaker\BpmnEngine;
use ProcessMaker\Contracts\TimerExpressionInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\EventDefinitionInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\FlowNodeInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\FormalExpressionInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\StartEventInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\TimerEventDefinitionInterface;
use ProcessMaker\Nayra\Storage\BpmnDocument;
use ProcessMaker\Simulator\Dispatcher;
use ProcessMaker\Simulator\JobManager;
use ProcessMaker\Simulator\Repository;
use ProcessMaker\Simulator\Simulator;

class ProcessTestProvider extends ServiceProvider
{
    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        /**
         * BpmnDocument Process Context
         */
        $this->app->bind('workflow.test', function ($app, $params) {
            $repository = new Repository();
            $eventBus = new Dispatcher();

            //Initialize the BpmnEngine
            $engine = empty($params['engine']) ? new BpmnEngine($repository, $eventBus) : $params['engine'];

            $engine->setJobManager(new JobManager());

            //Initialize BpmnDocument repository (REQUIRES $engine $factory)
            $bpmnRepository = new BpmnDocument();
            $bpmnRepository->setEngine($engine);
            $bpmnRepository->setFactory($repository);
            $bpmnRepository->setSkipElementsNotImplemented(true);
            $mapping = $bpmnRepository->getBpmnElementsMapping();
            $engine->setStorage($bpmnRepository);
            //$engine->setProcess($params['process']);

            //Initialize custom properties for ProcessMaker
            $bpmnRepository->setBpmnElementMapping(WorkflowServiceProvider::PROCESS_MAKER_NS, '', []);
            $bpmnRepository->setBpmnElementMapping(BpmnDocument::BPMN_MODEL, 'userTask', $mapping[BpmnDocument::BPMN_MODEL]['task']);
            $bpmnRepository->setBpmnElementMapping(BpmnDocument::BPMN_MODEL, 'manualTask', $mapping[BpmnDocument::BPMN_MODEL]['task']);
            $bpmnRepository->setBpmnElementMapping(BpmnDocument::BPMN_MODEL, 'association', BpmnDocument::SKIP_ELEMENT);
            $bpmnRepository->setBpmnElementMapping(BpmnDocument::BPMN_MODEL, 'textAnnotation', BpmnDocument::SKIP_ELEMENT);

            $bpmnRepository->setBpmnElementMapping(
                BpmnDocument::BPMN_MODEL,
                'startEvent',
                [
                    StartEventInterface::class,
                    [
                        FlowNodeInterface::BPMN_PROPERTY_INCOMING => ['n', [BpmnDocument::BPMN_MODEL, FlowNodeInterface::BPMN_PROPERTY_INCOMING]],
                        FlowNodeInterface::BPMN_PROPERTY_OUTGOING => ['n', [BpmnDocument::BPMN_MODEL, FlowNodeInterface::BPMN_PROPERTY_OUTGOING]],
                        StartEventInterface::BPMN_PROPERTY_EVENT_DEFINITIONS => ['n', EventDefinitionInterface::class],
                    ]
                ]
            );

            $bpmnRepository->setBpmnElementMapping(
                BpmnDocument::BPMN_MODEL,
                'timerEventDefinition',
                [TimerEventDefinitionInterface::class,
                    [
                        TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_DATE => ['1', [BpmnDocument::BPMN_MODEL, TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_DATE]],
                        TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_CYCLE => ['1', [BpmnDocument::BPMN_MODEL, TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_CYCLE]],
                        TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_DURATION => ['1', [BpmnDocument::BPMN_MODEL, TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_DURATION]],
                    ]
                ]
            );

            $bpmnRepository->setBpmnElementMapping(
                BpmnDocument::BPMN_MODEL,
                TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_CYCLE,
                [
                    TimerExpressionInterface::class,
                    [
                        FormalExpressionInterface::BPMN_PROPERTY_BODY => ['1', BpmnDocument::DOM_ELEMENT_BODY],
                    ]
                ]
            );

            $bpmnRepository->setBpmnElementMapping(
                BpmnDocument::BPMN_MODEL,
                TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_DATE,
                [
                    TimerExpressionInterface::class,
                    [
                        FormalExpressionInterface::BPMN_PROPERTY_BODY => ['1', BpmnDocument::DOM_ELEMENT_BODY],
                    ]
                ]
            );
            $bpmnRepository->setBpmnElementMapping(
                BpmnDocument::BPMN_MODEL,
                TimerEventDefinitionInterface::BPMN_PROPERTY_TIME_DURATION,
                [
                    TimerExpressionInterface::class,
                    [
                        FormalExpressionInterface::BPMN_PROPERTY_BODY => ['1', BpmnDocument::DOM_ELEMENT_BODY],
                    ]
                ]
            );

            // Override the CallActivity Definition
            $bpmnRepository->setBpmnElementMapping(
                BpmnDocument::BPMN_MODEL,
                'callActivity',
                [
                    CallActivityInterface::class,
                    [
                        FlowNodeInterface::BPMN_PROPERTY_INCOMING => ['n', [BpmnDocument::BPMN_MODEL, FlowNodeInterface::BPMN_PROPERTY_INCOMING]],
                        FlowNodeInterface::BPMN_PROPERTY_OUTGOING => ['n', [BpmnDocument::BPMN_MODEL, FlowNodeInterface::BPMN_PROPERTY_OUTGOING]],
                    ]
                ]
            );
            return $bpmnRepository;
        });
        $this->app->bind('workflow.simulator', function () {
            $bpmnRepository = app('workflow.test');
            return new Simulator($bpmnRepository);
        });
    }
}
