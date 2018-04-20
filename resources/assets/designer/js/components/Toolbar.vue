<template>
    <div class="menu_section">
        <ul class="nav side-menu">
            <li><img id="bpmn:StartEvent" src="images/start-event-none.svg" height="35" draggable="true"
                     @dragend="createElement($event)"></li>
            <li>
                <img id="bpmn:IntermediateThrowEvent" src="images/intermediate-event-throw-message.svg" height="35"
                     draggable="true" @dragend="createElement($event)">
            </li>
            <li>
                <img id="bpmn:EndEvent" src="images/end-event-none.svg" height="35" draggable="true"
                     @dragend="createElement($event)">
            </li>
            <li>
                <img id="bpmn:ExclusiveGateway" src="images/gateway-xor.svg" height="35" draggable="true"
                     @dragend="createElement($event)">
            </li>
            <li>
                <img id="bpmn:Task" src="images/task.svg" height="40" draggable="true" @dragend="createElement($event)">
            </li>
            <li>
                <img id="bpmn:SubProcess" src="images/subprocess-collapsed.svg" height="40" draggable="true"
                     @dragend="createElement($event)">
            </li>
            <li>
                <img id="bpmn:DataObjectReference" src="images/data-object.svg" height="40" draggable="true"
                     @dragend="createElement($event)">
            </li>
            <li>
                <img id="bpmn:DataStoreReference" src="images/data-store.svg" height="40" draggable="true"
                     @dragend="createElement($event)">
            </li>
        </ul>
    </div>
</template>

<script>
    import actions from "../actions/"
    export default {
        methods: {
            createElement (value) {
                let action = actions.canvas.drag.end(value)
                Event.$emit(action.type, action.payload)
            }
        }
    };
</script>
