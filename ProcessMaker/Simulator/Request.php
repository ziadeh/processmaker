<?php

namespace ProcessMaker\Simulator;

use ProcessMaker\Nayra\Contracts\Engine\ExecutionInstanceInterface;
use ProcessMaker\Nayra\Engine\ExecutionInstanceTrait;

/**
 * Execution instance for the engine.
 *
 * @package ProcessMaker\Models
 */
class Request implements ExecutionInstanceInterface
{
    use ExecutionInstanceTrait;

    /**
     * Initialize a token class with unique id.
     *
     */
    protected function initToken()
    {
        $this->setId(uniqid());
    }
}
