<template>
    <div class="menu_section">
        <ul class="nav side-menu">
            <li><a id="bpmn:StartEvent" draggable="true" @dragend="createElement($event)"><i class="bpmn-icon-start-event-none"></i> StartEvent </a></li>
            <li><a id="bpmn:IntermediateThrowEvent" draggable="true" @dragend="createElement($event)"><i class="bpmn-icon-start-event-message"></i> Message </a></li>
            <li><a id="bpmn:EndEvent" draggable="true" @dragend="createElement($event)"><i class="bpmn-icon-end-event-none"></i> EndEvent </a></li>
            <li><a id="bpmn:ExclusiveGateway" draggable="true" @dragend="createElement($event)"><i class="bpmn-icon-gateway-xor"></i> Exclusive </a></li>
            <li><a id="bpmn:Task" draggable="true" @dragend="createElement($event)"><i class="bpmn-icon-task"></i> Activities </a></li>
            <li><hr/></li>
            <li><a data-toggle="modal" data-target="#myModal"><i class="fa fa-cloud-upload"></i> Upload </a></li>
            <li><a><i class="fa fa-cloud-download"></i> Download </a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods : {
            createElement (value)  {
                Event.$emit('dragend', value);
            }
        }
    }
</script>