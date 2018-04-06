<template>
    <div class="svg_container">
       <!--<nav class="navbar navbar-default outer" role="navigation">
            <div id="inner">
                <ul class="nav navbar-nav navbar-toolbar">
                    <li>
                        <img id="bpmn:StartEvent" src="images/start-event-none.svg" height="40" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:IntermediateThrowEvent" src="images/intermediate-event-throw-message.svg" height="40" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:EndEvent" src="images/end-event-none.svg" height="40" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:ExclusiveGateway" src="images/gateway-xor.svg" height="40" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:Task" src="images/task.svg" height="45" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:SubProcess" src="images/subprocess-collapsed.svg" height="45" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:DataObjectReference" src="images/data-object.svg" height="45" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="bpmn:DataStoreReference" src="images/data-store.svg" height="45" draggable="true" @dragend="createElement">
                    </li>
                    <li>
                        <img id="" src="images/data-store.svg" height="45" draggable="true" @click="exportXML">
                    </li>
                    <li>
                        <span class="fa fa-upload" title="Import XML"></span>
                    </li>
                    <li>
                        <span class="fa fa-download" title="Export XML" @click="exportXML">a</span>
                    </li>
                </ul>
            </div>
        </nav>-->
        <svg id="svg" class="svg_canvas"></svg>
    </div>
</template>

<script>
    import {DiagramSvg} from '../diagram/moddle-svg';
    import {SVGLoader} from '../diagram/svg-loader';
    import {multitext} from '../diagram/snap.plugins/multitext.plugin';

    export default {
        diagramSvg: {},
        diagramCoordinates: {},
        components: {},
        svgCanvas: {},
        data() {
            return {
                //xmlData: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">  <bpmn:process id="Process_1" isExecutable="false">    <bpmn:startEvent id="StartEvent_1">      <bpmn:outgoing>SequenceFlow_036ay68</bpmn:outgoing>    </bpmn:startEvent>    <bpmn:task id="Task_0myplzs">      <bpmn:incoming>SequenceFlow_036ay68</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1jvkln4</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_036ay68" sourceRef="StartEvent_1" targetRef="Task_0myplzs" />    <bpmn:task id="Task_0uw4l5w">      <bpmn:incoming>SequenceFlow_1jvkln4</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1p9jnkt</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_1jvkln4" sourceRef="Task_0myplzs" targetRef="Task_0uw4l5w" />    <bpmn:exclusiveGateway id="ExclusiveGateway_15798xt">      <bpmn:incoming>SequenceFlow_1p9jnkt</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_173mgt4</bpmn:outgoing>      <bpmn:outgoing>SequenceFlow_0d81nou</bpmn:outgoing>    </bpmn:exclusiveGateway>    <bpmn:sequenceFlow id="SequenceFlow_1p9jnkt" sourceRef="Task_0uw4l5w" targetRef="ExclusiveGateway_15798xt" />    <bpmn:task id="Task_1j0nzd8">      <bpmn:incoming>SequenceFlow_173mgt4</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1bvyywa</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_173mgt4" sourceRef="ExclusiveGateway_15798xt" targetRef="Task_1j0nzd8" />    <bpmn:endEvent id="EndEvent_0ovfy2l">      <bpmn:incoming>SequenceFlow_0d81nou</bpmn:incoming>    </bpmn:endEvent>    <bpmn:sequenceFlow id="SequenceFlow_0d81nou" sourceRef="ExclusiveGateway_15798xt" targetRef="EndEvent_0ovfy2l" />    <bpmn:endEvent id="EndEvent_06tw9c9">      <bpmn:incoming>SequenceFlow_1bvyywa</bpmn:incoming>    </bpmn:endEvent>    <bpmn:sequenceFlow id="SequenceFlow_1bvyywa" sourceRef="Task_1j0nzd8" targetRef="EndEvent_06tw9c9" />  </bpmn:process>  <bpmndi:BPMNDiagram id="BPMNDiagram_1">    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds x="173" y="102" width="36" height="36" />      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="Task_0myplzs_di" bpmnElement="Task_0myplzs"><dc:Bounds x="286" y="72" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_036ay68_di" bpmnElement="SequenceFlow_036ay68"><di:waypoint xsi:type="dc:Point" x="209" y="120" /><di:waypoint xsi:type="dc:Point" x="248" y="120" /><di:waypoint xsi:type="dc:Point" x="248" y="112" /><di:waypoint xsi:type="dc:Point" x="286" y="112" /><bpmndi:BPMNLabel>  <dc:Bounds x="263" y="110" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="Task_0uw4l5w_di" bpmnElement="Task_0uw4l5w"><dc:Bounds x="501" y="57" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1jvkln4_di" bpmnElement="SequenceFlow_1jvkln4"><di:waypoint xsi:type="dc:Point" x="386" y="112" /><di:waypoint xsi:type="dc:Point" x="444" y="112" /><di:waypoint xsi:type="dc:Point" x="444" y="97" /><di:waypoint xsi:type="dc:Point" x="501" y="97" /><bpmndi:BPMNLabel>  <dc:Bounds x="459" y="98.5" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="ExclusiveGateway_15798xt_di" bpmnElement="ExclusiveGateway_15798xt" isMarkerVisible="true"><dc:Bounds x="654" y="72" width="50" height="50" /><bpmndi:BPMNLabel>  <dc:Bounds x="679" y="126" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1p9jnkt_di" bpmnElement="SequenceFlow_1p9jnkt"><di:waypoint xsi:type="dc:Point" x="601" y="97" /><di:waypoint xsi:type="dc:Point" x="654" y="97" /><bpmndi:BPMNLabel>  <dc:Bounds x="627.5" y="76" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="Task_1j0nzd8_di" bpmnElement="Task_1j0nzd8"><dc:Bounds x="717" y="2" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_173mgt4_di" bpmnElement="SequenceFlow_173mgt4"><di:waypoint xsi:type="dc:Point" x="679" y="72" /><di:waypoint xsi:type="dc:Point" x="679" y="42" /><di:waypoint xsi:type="dc:Point" x="717" y="42" /><bpmndi:BPMNLabel>  <dc:Bounds x="694" y="51" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="EndEvent_0ovfy2l_di" bpmnElement="EndEvent_0ovfy2l"><dc:Bounds x="749" y="148" width="36" height="36" /><bpmndi:BPMNLabel>  <dc:Bounds x="767" y="188" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_0d81nou_di" bpmnElement="SequenceFlow_0d81nou"><di:waypoint xsi:type="dc:Point" x="679" y="122" /><di:waypoint xsi:type="dc:Point" x="679" y="166" /><di:waypoint xsi:type="dc:Point" x="749" y="166" /><bpmndi:BPMNLabel>  <dc:Bounds x="694" y="138" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="EndEvent_06tw9c9_di" bpmnElement="EndEvent_06tw9c9"><dc:Bounds x="871" y="24" width="36" height="36" /><bpmndi:BPMNLabel>  <dc:Bounds x="889" y="64" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1bvyywa_di" bpmnElement="SequenceFlow_1bvyywa"><di:waypoint xsi:type="dc:Point" x="817" y="42" /><di:waypoint xsi:type="dc:Point" x="871" y="42" /><bpmndi:BPMNLabel>  <dc:Bounds x="844" y="21" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>    </bpmndi:BPMNPlane>  </bpmndi:BPMNDiagram></bpmn:definitions>',
                //xmlData: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">  <bpmn:collaboration id="Collaboration_0g96llt">    <bpmn:participant id="Participant_0sc70pi" name="fgfsdgfds" processRef="Process_0o8o82m" />  </bpmn:collaboration>  <bpmn:process id="Process_0o8o82m">    <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_0h8xaea" />    <bpmn:dataObjectReference id="DataObjectReference_0ago5jo" dataObjectRef="DataObject_027n7ys" />    <bpmn:dataObject id="DataObject_027n7ys" />    <bpmn:dataStoreReference id="DataStoreReference_0op13vj" />  </bpmn:process>  <bpmndi:BPMNDiagram id="BPMNDiagram_1">    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0g96llt">      <bpmndi:BPMNShape id="Participant_0sc70pi_di" bpmnElement="Participant_0sc70pi">        <dc:Bounds x="13.839160839160797" y="31" width="600" height="250" />      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="IntermediateThrowEvent_0h8xaea_di" bpmnElement="IntermediateThrowEvent_0h8xaea">        <dc:Bounds x="63.8391608391608" y="57.51248751248751" width="36" height="36" />        <bpmndi:BPMNLabel>          <dc:Bounds x="81.8391608391608" y="97.51248751248751" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="DataObjectReference_0ago5jo_di" bpmnElement="DataObjectReference_0ago5jo">        <dc:Bounds x="151.8391608391608" y="51" width="36" height="50" />        <bpmndi:BPMNLabel>          <dc:Bounds x="169.8391608391608" y="105" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="DataStoreReference_0op13vj_di" bpmnElement="DataStoreReference_0op13vj">        <dc:Bounds x="229.8391608391608" y="51" width="50" height="50" />        <bpmndi:BPMNLabel>          <dc:Bounds x="254.8391608391608" y="105" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>    </bpmndi:BPMNPlane>  </bpmndi:BPMNDiagram></bpmn:definitions>',
                xmlData: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">  <bpmn:process id="Process_1" isExecutable="false">    <bpmn:startEvent id="StartEvent_1">      <bpmn:outgoing>SequenceFlow_0od9xnl</bpmn:outgoing>    </bpmn:startEvent>    <bpmn:task id="Task_1fwbo70">      <bpmn:incoming>SequenceFlow_0od9xnl</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1mss75q</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_0od9xnl" name="test" sourceRef="StartEvent_1" targetRef="Task_1fwbo70" />    <bpmn:endEvent id="EndEvent_07eowtv">      <bpmn:incoming>SequenceFlow_1mss75q</bpmn:incoming>    </bpmn:endEvent>    <bpmn:sequenceFlow id="SequenceFlow_1mss75q" sourceRef="Task_1fwbo70" targetRef="EndEvent_07eowtv" />  </bpmn:process>  <bpmndi:BPMNDiagram id="BPMNDiagram_1">    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">        <dc:Bounds x="173" y="102" width="36" height="36" />      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="Task_1fwbo70_di" bpmnElement="Task_1fwbo70">        <dc:Bounds x="338" y="80" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_0od9xnl_di" bpmnElement="SequenceFlow_0od9xnl">        <di:waypoint xsi:type="dc:Point" x="209" y="120" />        <di:waypoint xsi:type="dc:Point" x="338" y="120" />        <bpmndi:BPMNLabel>          <dc:Bounds x="263" y="99" width="21" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="EndEvent_07eowtv_di" bpmnElement="EndEvent_07eowtv">        <dc:Bounds x="549" y="102" width="36" height="36" />        <bpmndi:BPMNLabel>          <dc:Bounds x="567" y="142" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1mss75q_di" bpmnElement="SequenceFlow_1mss75q">        <di:waypoint xsi:type="dc:Point" x="438" y="120" />        <di:waypoint xsi:type="dc:Point" x="549" y="120" />        <bpmndi:BPMNLabel>          <dc:Bounds x="493.5" y="99" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>    </bpmndi:BPMNPlane>  </bpmndi:BPMNDiagram></bpmn:definitions>',
                definitions: {}
            }
        },
        created() {
            Event.$on('dragend', (value) => this.createElement(value));
            Event.$on('zoomIn', (value) => this.diagramSvg.processAction('zoom-in'));
            Event.$on('zoomOut', (value) => this.diagramSvg.processAction('zoom-out'));
            Event.$on('zoomReset', (value) => this.diagramSvg.processAction('zoom-reset'));
            Event.$on('uploadPMIO', (value) => this.exportPMIO());
            Event.$on('change', (xml) => this.loadXML(xml));
        },
        methods: {
            loadXML(xml = null) {
                let that = this;
                if (xml) this.xmlData = xml;
                moddle.fromXML(that.xmlData, function (err, def) {
                    that.diagramSvg.processAction('clear-canvas')
                    that.definitions = def;
                    that.diagramSvg.draw(def);
                });
                this.exportPMIO();
            },
            exportXML() {
                let that = this;
                moddle.toXML(that.definitions, function (err, xmlStrUpdated) {
                    console.log(xmlStrUpdated);
                });
            },
            startEvent(event) {
                console.log(event);
            },
            createElement(event) {
                event.target.style.opacity = "";
                let name = event.target.id.split(':');
                const defaultOptions = {
                    id: name[1] + '_' + Math.floor((Math.random() * 100) + 1),
                    x: event.x - this.diagramCoordinates.x,
                    y: event.y - this.diagramCoordinates.y
                };

                const created = this.diagramSvg.createShape(event.target.id, defaultOptions);
                const shape = created.getShape();
                let element = moddle.create(event.target.id, {
                    id: defaultOptions.id,
                    x: shape.x,
                    y: shape.y,
                    width: shape.scaleX || shape.scale,
                    height: shape.scaleY || shape.scale
                });
                this.diagramSvg.sendMessageChannel({
                    sessionId: $('#sessionId').val(),
                    id: defaultOptions.id,
                    $type: event.target.id,
                    x: event.x - this.diagramCoordinates.x,
                    y: event.y - this.diagramCoordinates.y,
                });
                this.definitions.get('diagrams').push(element);
                console.log(this.definitions)
            },
            moveShadowStop(event) {
                this.style.backgroundColor = "green"
            },
            task() {
                let task = moddle.create('bpmn:Task', {
                    id: 'Task_1',
                    default: null
                });
                console.log(task);
                this.definitions.get('diagrams').push(task);

            },
            getCanvas() {
                return this.diagramSvg;
            },
            exportPMIO() {
                let request = require('superagent');
                let data = {};
                data.attributes = {
                    bpmn: this.xmlData
                };
                data.type = "process";
                request
                    .post('https://xbfhnicr.api.processmaker.io/api/v1/processes/import')
                    .send({data: data})
                    .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExNjhhY2I1Y2JiNmQ4NjZmNWZmYjg2NTllYzAwZGVjOWQwZDYwZDRjNjI5MDk4MTAwYTRmNGUwN2IwM2FmNDhiOTY0NWMyNmEwYTc2ZDc4In0.eyJhdWQiOiIxIiwianRpIjoiMTE2OGFjYjVjYmI2ZDg2NmY1ZmZiODY1OWVjMDBkZWM5ZDBkNjBkNGM2MjkwOTgxMDBhNGY0ZTA3YjAzYWY0OGI5NjQ1YzI2YTBhNzZkNzgiLCJpYXQiOjE0OTY4NDE5MTQsIm5iZiI6MTQ5Njg0MTkxNCwiZXhwIjoxNTI4Mzc3OTE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wHp7TBWglSyQtKk-ywZHRm2VVVFBlg5jN9WYAuCNaNSamsLfJdeS8gusZ5-OOjON_p-4TL76aAJfvqDlyAWYmpg1-_Op2Oa5DvleVnNxoOGfe_YWt-FBFERO9OyJzb2g9RHvJ6eK59RwTMh-fluV9QfXI4bBdigLDWo-tnvNe6O0FD5UPUsI19_qqTIUb15DhEoXd0WhwPPQua21V9biUB77i6ysn5mTpg0Yvm7ECYUnEAst18c5w1i-hMn80QhnLgOI8_yf8-pLQ8Op0B4K9LWmBOt-mqMhXzWybbY3wM9UQfOdSc3Qzy4e-hRztutecIpANW5lgoXAPfx8yaQpdE0JVebBx5wcU5FgKRK9XEJJjCvetbRDA4lNmt3Hy83pDlcMU5kZplGJZ0RBazNPdeewngCxhVGGhmiWOLnARml8nEH_a26aOTAEz_ToCHUsHVTKKivfN7f8TfEOMGnvLDnpFwZREfpRCD4xShznN-R5Bu_YQx6SGkWEGds9OP97mg15_Dj7HLI_VcFH_KRGG6gDCxsv9y1fLakAQyCRVZBwlSEKRE3UmgWzN6bV8_AB8AbSA0b7W8JtbBlndaLS9SsIOs2NtdhMmqPOcHN4v93D8AbeqISwyW3k5VXL3eww_XTMeqLeT0_SICQLLhADdfmnEfkCK77J96ttumoacCI')
                    .set('Accept', 'application/json')
                    .end(function (err, res) {
                        console.log("Data Saved: ", res);
                    });

            }
        },

        mounted() {
            Snap.plugin(multitext);
            this.svgCanvas = Snap('#svg').attr(
                {
                    width: '5000px',
                    height: '5000px'
                }
            );

            this.diagramSvg = new DiagramSvg(
                this.svgCanvas,
                new SVGLoader(Snap, this.svgCanvas)
            );


            this.diagramCoordinates = {
                x: document.getElementById('svg').getBoundingClientRect().left,
                y: document.getElementById('svg').getBoundingClientRect().top
            }

            this.loadXML();
            let data = {
                "prj_uid": "372080569592c404f5dde57093455423",
                "prj_name": "Test",
                "prj_description": "",
                "prj_target_namespace": null,
                "prj_expresion_language": null,
                "prj_type_language": null,
                "prj_exporter": null,
                "prj_exporter_version": null,
                "prj_create_date": "2017-05-29 15:37:52",
                "prj_update_date": "2017-05-29 11:38:19",
                "prj_author": "00000000000000000000000000000001",
                "prj_author_version": null,
                "prj_original_source": null,
                "diagrams": [{
                    "dia_uid": "269518920592c4050246b49040344066",
                    "prj_uid": "372080569592c404f5dde57093455423",
                    "dia_name": "Test",
                    "dia_is_closable": 0,
                    "pro_uid": "946953380592c405071cbf1027927851",
                    "activities": [{
                        "act_uid": "124698833592c406c4b0cc1026408625",
                        "act_name": "Task 2",
                        "act_type": "TASK",
                        "act_is_for_compensation": "0",
                        "act_start_quantity": "1",
                        "act_completion_quantity": "0",
                        "act_task_type": "EMPTY",
                        "act_implementation": "",
                        "act_instantiate": "0",
                        "act_script_type": "",
                        "act_script": "",
                        "act_loop_type": "EMPTY",
                        "act_test_before": "0",
                        "act_loop_maximum": "0",
                        "act_loop_condition": "0",
                        "act_loop_cardinality": "0",
                        "act_loop_behavior": "0",
                        "act_is_adhoc": "0",
                        "act_is_collapsed": "0",
                        "act_completion_condition": "0",
                        "act_ordering": "0",
                        "act_cancel_remaining_instances": "1",
                        "act_protocol": "0",
                        "act_method": "0",
                        "act_is_global": "0",
                        "act_referer": "0",
                        "act_default_flow": "0",
                        "act_master_diagram": "0",
                        "bou_element": "638724345592c405abe1058017041790",
                        "bou_x": "363",
                        "bou_y": "70",
                        "bou_width": "150",
                        "bou_height": "75",
                        "bou_container": "bpmnDiagram"
                    }, {
                        "act_uid": "720497925592c406b9448a5055485729",
                        "act_name": "Task 1",
                        "act_type": "TASK",
                        "act_is_for_compensation": "0",
                        "act_start_quantity": "1",
                        "act_completion_quantity": "0",
                        "act_task_type": "EMPTY",
                        "act_implementation": "",
                        "act_instantiate": "0",
                        "act_script_type": "",
                        "act_script": "",
                        "act_loop_type": "EMPTY",
                        "act_test_before": "0",
                        "act_loop_maximum": "0",
                        "act_loop_condition": "0",
                        "act_loop_cardinality": "0",
                        "act_loop_behavior": "0",
                        "act_is_adhoc": "0",
                        "act_is_collapsed": "0",
                        "act_completion_condition": "0",
                        "act_ordering": "0",
                        "act_cancel_remaining_instances": "1",
                        "act_protocol": "0",
                        "act_method": "0",
                        "act_is_global": "0",
                        "act_referer": "0",
                        "act_default_flow": "0",
                        "act_master_diagram": "0",
                        "bou_element": "638724345592c405abe1058017041790",
                        "bou_x": "166",
                        "bou_y": "70",
                        "bou_width": "150",
                        "bou_height": "75",
                        "bou_container": "bpmnDiagram"
                    }],
                    "events": [{
                        "evn_uid": "256381233592c406cae2026029888464",
                        "evn_name": "",
                        "evn_type": "START",
                        "evn_marker": "EMPTY",
                        "evn_is_interrupting": "1",
                        "evn_cancel_activity": "0",
                        "evn_activity_ref": null,
                        "evn_wait_for_completion": "0",
                        "evn_error_name": null,
                        "evn_error_code": null,
                        "evn_escalation_name": null,
                        "evn_escalation_code": null,
                        "evn_message": "LEAD",
                        "evn_operation_name": null,
                        "evn_operation_implementation_ref": null,
                        "evn_time_date": null,
                        "evn_time_cycle": null,
                        "evn_time_duration": null,
                        "evn_behavior": "CATCH",
                        "bou_element": "638724345592c405abe1058017041790",
                        "bou_x": "88",
                        "bou_y": "91",
                        "bou_width": "33",
                        "bou_height": "33",
                        "bou_container": "bpmnDiagram"
                    }, {
                        "evn_uid": "632067129592c406cc59362027725874",
                        "evn_name": "",
                        "evn_type": "END",
                        "evn_marker": "EMPTY",
                        "evn_is_interrupting": "1",
                        "evn_cancel_activity": "0",
                        "evn_activity_ref": null,
                        "evn_wait_for_completion": "0",
                        "evn_error_name": null,
                        "evn_error_code": null,
                        "evn_escalation_name": null,
                        "evn_escalation_code": null,
                        "evn_message": "",
                        "evn_operation_name": null,
                        "evn_operation_implementation_ref": null,
                        "evn_time_date": null,
                        "evn_time_cycle": null,
                        "evn_time_duration": null,
                        "evn_behavior": "THROW",
                        "bou_element": "638724345592c405abe1058017041790",
                        "bou_x": "557",
                        "bou_y": "91",
                        "bou_width": "33",
                        "bou_height": "33",
                        "bou_container": "bpmnDiagram"
                    }],
                    "gateways": [],
                    "flows": [{
                        "flo_uid": "180462119592c406d2f3d38004898877",
                        "flo_type": "SEQUENCE",
                        "flo_name": " ",
                        "flo_element_origin": "720497925592c406b9448a5055485729",
                        "flo_element_origin_type": "bpmnActivity",
                        "flo_element_dest": "124698833592c406c4b0cc1026408625",
                        "flo_element_dest_type": "bpmnActivity",
                        "flo_is_inmediate": "1",
                        "flo_condition": "",
                        "flo_x1": "317",
                        "flo_y1": "108",
                        "flo_x2": "363",
                        "flo_y2": "108",
                        "flo_state": [{"x": 317, "y": 108}, {"x": 363, "y": 108}],
                        "flo_position": "1"
                    }, {
                        "flo_uid": "205528518592c406d2f5635096221855",
                        "flo_type": "SEQUENCE",
                        "flo_name": " ",
                        "flo_element_origin": "124698833592c406c4b0cc1026408625",
                        "flo_element_origin_type": "bpmnActivity",
                        "flo_element_dest": "632067129592c406cc59362027725874",
                        "flo_element_dest_type": "bpmnEvent",
                        "flo_is_inmediate": "1",
                        "flo_condition": "",
                        "flo_x1": "514",
                        "flo_y1": "108",
                        "flo_x2": "557",
                        "flo_y2": "108",
                        "flo_state": [{"x": 514, "y": 108}, {"x": 557, "y": 108}],
                        "flo_position": "1"
                    }, {
                        "flo_uid": "427596475592c406d2f2196069782540",
                        "flo_type": "SEQUENCE",
                        "flo_name": " ",
                        "flo_element_origin": "256381233592c406cae2026029888464",
                        "flo_element_origin_type": "bpmnEvent",
                        "flo_element_dest": "720497925592c406b9448a5055485729",
                        "flo_element_dest_type": "bpmnActivity",
                        "flo_is_inmediate": "1",
                        "flo_condition": "",
                        "flo_x1": "121",
                        "flo_y1": "108",
                        "flo_x2": "166",
                        "flo_y2": "108",
                        "flo_state": [{"x": 121, "y": 108}, {"x": 166, "y": 108}],
                        "flo_position": "1"
                    }],
                    "artifacts": [],
                    "laneset": [],
                    "lanes": [],
                    "data": [],
                    "participants": []
                }],
                "usr_setting_designer": {"enabled_grid": false}
            };
//            this.diagramSvg.draw(data.diagrams[0]);
//            console.log(this.diagramSvg.elementRegistry); // 124698833592c406c4b0cc1026408625
//            const element = this.diagramSvg.getElementById('124698833592c406c4b0cc1026408625').getShape().getNativeShape();
//            element.drag();

        }
    }
</script>

<style>
    .svg_canvas {
        background: #FFFFFF;
    }
</style>