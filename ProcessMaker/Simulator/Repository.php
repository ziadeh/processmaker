<?php

namespace ProcessMaker\Simulator;

use ProcessMaker\Nayra\Bpmn\Collection;
use ProcessMaker\Nayra\Contracts\Bpmn\TokenInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\CollectionInterface;
use ProcessMaker\Models\CallActivity;
use ProcessMaker\Models\FormalExpression;
use ProcessMaker\Nayra\Contracts\Bpmn\ActivityInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\CatchEventInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\EventBasedGatewayInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\GatewayInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\ParticipantInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\StartEventInterface;
use ProcessMaker\Nayra\Contracts\Bpmn\ThrowEventInterface;
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
     * Creates a testing token
     *
     * @return Token
     */
    public function createTokenInstance()
    {
        $token = new Token();
        return $token;
    }

    public function createExecutionInstanceRepository()
    {
        return $this;
    }

    public function getTokenRepository()
    {
        return $this;
    }

    public function persistInstanceCreated(ExecutionInstanceInterface $instance)
    {
    }

    public function persistInstanceCompleted(ExecutionInstanceInterface $instance)
    {
    }

    public function persistInstanceCollaboration(ExecutionInstanceInterface $target, ParticipantInterface $targetParticipant, ExecutionInstanceInterface $source, ParticipantInterface $sourceParticipant)
    {
    }

    public function loadTokenByUid($uid)
    {
    }

    public function persistActivityActivated(ActivityInterface $activity, TokenInterface $token)
    {
    }

    public function persistActivityException(ActivityInterface $activity, TokenInterface $token)
    {
    }

    public function persistActivityCompleted(ActivityInterface $activity, TokenInterface $token)
    {
    }

    public function persistActivityClosed(ActivityInterface $activity, TokenInterface $token)
    {
    }

    public function persistThrowEventTokenArrives(ThrowEventInterface $event, TokenInterface $token)
    {
    }

    public function persistThrowEventTokenConsumed(ThrowEventInterface $endEvent, TokenInterface $token)
    {
    }

    public function persistThrowEventTokenPassed(ThrowEventInterface $endEvent, TokenInterface $token)
    {
    }

    public function persistGatewayTokenArrives(GatewayInterface $exclusiveGateway, TokenInterface $token)
    {
    }

    public function persistGatewayTokenConsumed(GatewayInterface $exclusiveGateway, TokenInterface $token)
    {
    }

    public function persistGatewayTokenPassed(GatewayInterface $exclusiveGateway, TokenInterface $token)
    {
    }

    public function persistCatchEventTokenArrives(CatchEventInterface $intermediateCatchEvent, TokenInterface $token)
    {
    }

    public function persistCatchEventTokenConsumed(CatchEventInterface $intermediateCatchEvent, TokenInterface $token)
    {
    }

    public function persistCatchEventTokenPassed(CatchEventInterface $intermediateCatchEvent, Collection $consumedTokens)
    {
    }

    public function persistCatchEventMessageArrives(CatchEventInterface $intermediateCatchEvent, TokenInterface $token)
    {
    }

    public function persistCatchEventMessageConsumed(CatchEventInterface $intermediateCatchEvent, TokenInterface $token)
    {
    }

    public function persistStartEventTriggered(StartEventInterface $startEvent, CollectionInterface $tokens)
    {
    }

    public function persistEventBasedGatewayActivated(EventBasedGatewayInterface $eventBasedGateway, TokenInterface $passedToken, CollectionInterface $consumedTokens)
    {
    }
}
