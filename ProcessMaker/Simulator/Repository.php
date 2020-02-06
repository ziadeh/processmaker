<?php

namespace ProcessMaker\Simulator;

use ProcessMaker\Models\CallActivity;
use ProcessMaker\Models\FormalExpression;
use ProcessMaker\Nayra\Contracts\Engine\ExecutionInstanceInterface;
use ProcessMaker\Nayra\Contracts\RepositoryInterface;
use ProcessMaker\Nayra\RepositoryTrait;

/**
 * Repository
 *
 */
class Repository implements RepositoryInterface
{
    use RepositoryTrait;

    public function createCallActivity()
    {
        return new CallActivity();
    }

    public function createFormalExpression()
    {
        return new FormalExpression();
    }

    public function createExecutionInstanceRepository()
    {
        return $this;
    }

    /**
     * Creates a testing execution instance.
     *
     * @return \ProcessMaker\Test\Models\ExecutionInstance
     */
    public function createExecutionInstance()
    {
        return new Request();
    }

    /**
     * Persists instance's data related to the event Process Instance Created
     *
     * @param ExecutionInstanceInterface $instance
     *
     * @return mixed
     */
    public function persistInstanceCreated(ExecutionInstanceInterface $instance)
    {
    }
}
