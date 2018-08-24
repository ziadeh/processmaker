<?php
namespace ProcessMaker\Model;

use Illuminate\Support\Facades\Log;
use ProcessMaker\Model\Application;
use ProcessMaker\Model\Delegation;
use ProcessMaker\Nayra\Bpmn\Models\MessageEventDefinition as Base;

class MessageEventDefinition extends Base
{

    /**
     * Send a message though participant processes.
     *
     * @param Application $instance
     * @param Delegation $source
     */
    public function execute(Application $instance, Delegation $source)
    {
        $message = $this->getPayload();
        $item = $message ? $message->getItem() : null;
        $messageFields = $item ? $item->getProperty('fields') : null;
        if ($messageFields) {
            Log::info('Message sent: ' . $message->getId());
            $targetStore = $instance->getDataStore();
            $sourceStore = $source->getInstance()->getDataStore();
            foreach (explode(',', $messageFields) as $field) {
                $value = $sourceStore->getData($field);
                $targetStore->putData($field, $value);
            }
            $instance->APP_DATA = json_encode($targetStore->getData());
            $instance->save();
        }
    }
}
