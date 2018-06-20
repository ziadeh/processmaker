// Bring in XML-JS converter
let convert = require('xml-js')

let sampleXML = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.11.3">
  <bpmn:collaboration id="Collaboration_17a1w5b">
    <bpmn:participant id="Participant_18loy4z" name="Approval Link" processRef="approval_link" />
    <bpmn:participant id="Participant_0scbndt" name="Gmail Approval" processRef="gmail_approval" />
    <bpmn:messageFlow id="MessageFlow_0rggs3h" sourceRef="IntermediateThrowEvent_0lu0i7e" targetRef="IntermediateThrowEvent_1demo3b" />
  </bpmn:collaboration>
  <bpmn:process id="approval_link" name="Approval Link" isExecutable="false">
    <bpmn:sequenceFlow id="SequenceFlow_1k4wlpd" sourceRef="StatusUpdate" targetRef="IntermediateThrowEvent_0lu0i7e" />
    <bpmn:sequenceFlow id="SequenceFlow_090phla" sourceRef="IntermediateThrowEvent_0lu0i7e" targetRef="EndEvent_1wx2a1m" />
    <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_0lu0i7e" name="Update case">
      <bpmn:extensionElements />
      <bpmn:incoming>SequenceFlow_1k4wlpd</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_090phla</bpmn:outgoing>
      <bpmn:messageEventDefinition messageRef="Message_08euo9u">
        <bpmn:extensionElements>
          <camunda:connector>
            <camunda:inputOutput>
              <camunda:inputParameter name="case_id">{case_id}</camunda:inputParameter>
            </camunda:inputOutput>
            <camunda:connectorId>CorrelationKeys</camunda:connectorId>
          </camunda:connector>
        </bpmn:extensionElements>
      </bpmn:messageEventDefinition>
    </bpmn:intermediateThrowEvent>
    <bpmn:endEvent id="EndEvent_1wx2a1m" name="End">
      <bpmn:incoming>SequenceFlow_090phla</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:startEvent id="StatusUpdate" name="Status Update">
      <bpmn:outgoing>SequenceFlow_1k4wlpd</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:association id="Association_15lzry9" sourceRef="StatusUpdate" targetRef="TextAnnotation_157ovs1" />
    <bpmn:textAnnotation id="TextAnnotation_157ovs1">
      <bpmn:text>case_id, status</bpmn:text>
    </bpmn:textAnnotation>
  </bpmn:process>
  <bpmn:process id="gmail_approval" name="Gmail Approval" isExecutable="false">
    <bpmn:sequenceFlow id="SequenceFlow_1xse63x" sourceRef="Start" targetRef="Task_1l4aylg" />
    <bpmn:sequenceFlow id="SequenceFlow_11qv4g4" sourceRef="Task_1l4aylg" targetRef="IntermediateThrowEvent_1demo3b" />
    <bpmn:serviceTask id="Task_1l4aylg" name="Send Gmail">
      <bpmn:extensionElements>
        <camunda:connector>
          <camunda:inputOutput>
            <camunda:inputParameter name="to">{email_to}</camunda:inputParameter>
            <camunda:inputParameter name="subj">{email_subj}</camunda:inputParameter>
            <camunda:inputParameter name="body">{email_body}</camunda:inputParameter>
          </camunda:inputOutput>
          <camunda:connectorId>SendMailConnector</camunda:connectorId>
        </camunda:connector>
      </bpmn:extensionElements>
      <bpmn:incoming>SequenceFlow_1xse63x</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_11qv4g4</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:startEvent id="Start" name="Start">
      <bpmn:outgoing>SequenceFlow_1xse63x</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:serviceTask id="Task_1ps4f3s" name="Call Approved Endpoint">
      <bpmn:extensionElements>
        <camunda:connector>
          <camunda:inputOutput>
            <camunda:inputParameter name="url">{approved_webhook}</camunda:inputParameter>
          </camunda:inputOutput>
          <camunda:connectorId>HttpConnector</camunda:connectorId>
        </camunda:connector>
      </bpmn:extensionElements>
      <bpmn:incoming>SequenceFlow_0a8mqpi</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_03oaaqj</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="SequenceFlow_0a8mqpi" sourceRef="Task_06o4tc0" targetRef="Task_1ps4f3s" />
    <bpmn:endEvent id="EndEvent_0n8rw4w" name="Approved">
      <bpmn:incoming>SequenceFlow_03oaaqj</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_17gv3f0" sourceRef="ServiceTask_1bm73sn" targetRef="Task_0bqgue3" />
    <bpmn:sequenceFlow id="SequenceFlow_03oaaqj" sourceRef="Task_1ps4f3s" targetRef="EndEvent_0n8rw4w" />
    <bpmn:sequenceFlow id="SequenceFlow_0f5k88s" sourceRef="IntermediateThrowEvent_1demo3b" targetRef="ExclusiveGateway_1k35vm7" />
    <bpmn:sequenceFlow id="SequenceFlow_18zfdwm" name="Approved" sourceRef="ExclusiveGateway_1k35vm7" targetRef="Task_06o4tc0">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[status="approved"]]></bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="SequenceFlow_1tw5hzk" sourceRef="ExclusiveGateway_1k35vm7" targetRef="ServiceTask_1bm73sn" />
    <bpmn:serviceTask id="Task_0bqgue3" name="Call Decline Endpoint">
      <bpmn:extensionElements>
        <camunda:connector>
          <camunda:inputOutput>
            <camunda:inputParameter name="url">{rejected_webhook}</camunda:inputParameter>
          </camunda:inputOutput>
          <camunda:connectorId>HttpConnector</camunda:connectorId>
        </camunda:connector>
      </bpmn:extensionElements>
      <bpmn:incoming>SequenceFlow_17gv3f0</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_10tfsbv</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:endEvent id="EndEvent_1kvgmqi" name="Rejected">
      <bpmn:incoming>SequenceFlow_10tfsbv</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:serviceTask id="ServiceTask_1bm73sn" name="Send Approved Email Templates">
      <bpmn:extensionElements>
        <camunda:connector>
          <camunda:inputOutput>
            <camunda:inputParameter name="to">{rejected_email_to}</camunda:inputParameter>
            <camunda:inputParameter name="subj">{rejected_email_subj}</camunda:inputParameter>
            <camunda:inputParameter name="body">{rejected_email_body}</camunda:inputParameter>
          </camunda:inputOutput>
          <camunda:connectorId>SendMailConnector</camunda:connectorId>
        </camunda:connector>
      </bpmn:extensionElements>
      <bpmn:incoming>SequenceFlow_1tw5hzk</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_17gv3f0</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Task_06o4tc0" name="Send Approved Email Templates">
      <bpmn:extensionElements>
        <camunda:connector>
          <camunda:inputOutput>
            <camunda:inputParameter name="to">{approved_email_to}</camunda:inputParameter>
            <camunda:inputParameter name="subj">{approved_email_subj}</camunda:inputParameter>
            <camunda:inputParameter name="body">{approved_email_body}</camunda:inputParameter>
          </camunda:inputOutput>
          <camunda:connectorId>SendMailConnector</camunda:connectorId>
        </camunda:connector>
      </bpmn:extensionElements>
      <bpmn:incoming>SequenceFlow_18zfdwm</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0a8mqpi</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="ExclusiveGateway_1k35vm7" name="Status?" default="SequenceFlow_1tw5hzk">
      <bpmn:incoming>SequenceFlow_0f5k88s</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_18zfdwm</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_1tw5hzk</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_1demo3b" name="Status Updated">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="status" />
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>SequenceFlow_11qv4g4</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0f5k88s</bpmn:outgoing>
      <bpmn:messageEventDefinition messageRef="Message_08euo9u" />
    </bpmn:intermediateCatchEvent>
    <bpmn:sequenceFlow id="SequenceFlow_10tfsbv" sourceRef="Task_0bqgue3" targetRef="EndEvent_1kvgmqi" />
    <bpmn:textAnnotation id="TextAnnotation_1u5st9y">
      <bpmn:text>case_id</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_16v1vl7" sourceRef="Start" targetRef="TextAnnotation_1u5st9y" />
  </bpmn:process>
  <bpmn:message id="Message_08euo9u" name="status_update" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_17a1w5b">
      <bpmndi:BPMNShape id="Participant_18loy4z_di" bpmnElement="Participant_18loy4z">
        <dc:Bounds x="-4" y="-15" width="1102" height="261" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_0scbndt_di" bpmnElement="Participant_0scbndt">
        <dc:Bounds x="-4" y="-342" width="1103" height="325" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1kvgmqi_di" bpmnElement="EndEvent_1kvgmqi" bioc:stroke="#E53935" bioc:fill="#FFCDD2">
        <dc:Bounds x="962" y="-132" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="959" y="-93" width="44" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1xse63x_di" bpmnElement="SequenceFlow_1xse63x">
        <di:waypoint xsi:type="dc:Point" x="98" y="-202" />
        <di:waypoint xsi:type="dc:Point" x="186" y="-202" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="97" y="-223.5" width="90" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_11qv4g4_di" bpmnElement="SequenceFlow_11qv4g4">
        <di:waypoint xsi:type="dc:Point" x="286" y="-202" />
        <di:waypoint xsi:type="dc:Point" x="345" y="-202" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="270.5" y="-223.5" width="90" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1k4wlpd_di" bpmnElement="SequenceFlow_1k4wlpd">
        <di:waypoint xsi:type="dc:Point" x="99" y="135" />
        <di:waypoint xsi:type="dc:Point" x="355" y="135" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="182" y="113.5" width="90" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ExclusiveGateway_14ss13e_di" bpmnElement="ExclusiveGateway_1k35vm7" isMarkerVisible="true">
        <dc:Bounds x="470" y="-227" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="452" y="-176" width="38" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ServiceTask_1vvtlkt_di" bpmnElement="Task_0bqgue3">
        <dc:Bounds x="771" y="-154" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0n8rw4w_di" bpmnElement="EndEvent_0n8rw4w" bioc:stroke="#43A047" bioc:fill="#C8E6C9">
        <dc:Bounds x="962" y="-303" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="956" y="-264" width="48" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ServiceTask_0atfjjk_di" bpmnElement="Task_1ps4f3s">
        <dc:Bounds x="771" y="-325" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ServiceTask_0sm7bnw_di" bpmnElement="Task_1l4aylg">
        <dc:Bounds x="186" y="-242" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_1u5st9y_di" bpmnElement="TextAnnotation_1u5st9y">
        <dc:Bounds x="100" y="-298" width="99.99156545209178" height="26.990553306342782" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_16v1vl7_di" bpmnElement="Association_16v1vl7">
        <di:waypoint xsi:type="dc:Point" x="91" y="-215" />
        <di:waypoint xsi:type="dc:Point" x="138" y="-271" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_09m6092_di" bpmnElement="IntermediateThrowEvent_1demo3b">
        <dc:Bounds x="345" y="-220" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="333" y="-171" width="76" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="StartEvent_17kqby1_di" bpmnElement="StatusUpdate" bioc:stroke="#1E88E5" bioc:fill="#BBDEFB">
        <dc:Bounds x="63" y="117" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="46" y="155" width="70" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_157ovs1_di" bpmnElement="TextAnnotation_157ovs1">
        <dc:Bounds x="97" y="53" width="100" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_15lzry9_di" bpmnElement="Association_15lzry9">
        <di:waypoint xsi:type="dc:Point" x="93" y="123" />
        <di:waypoint xsi:type="dc:Point" x="132" y="83" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ServiceTask_1ws262h_di" bpmnElement="Task_06o4tc0">
        <dc:Bounds x="570" y="-325" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ServiceTask_1bm73sn_di" bpmnElement="ServiceTask_1bm73sn">
        <dc:Bounds x="570" y="-154" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_17a4ztd_di" bpmnElement="IntermediateThrowEvent_0lu0i7e">
        <dc:Bounds x="355" y="117" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="341" y="156" width="62" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="MessageFlow_0rggs3h_di" bpmnElement="MessageFlow_0rggs3h">
        <di:waypoint xsi:type="dc:Point" x="373" y="117" />
        <di:waypoint xsi:type="dc:Point" x="373" y="-33" />
        <di:waypoint xsi:type="dc:Point" x="372" y="-33" />
        <di:waypoint xsi:type="dc:Point" x="372" y="-186" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="327.5" y="-54.5" width="90" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_0h7xcbs_di" bpmnElement="Start" bioc:stroke="#1E88E5" bioc:fill="#BBDEFB">
        <dc:Bounds x="62" y="-220" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="68" y="-177" width="24" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0a8mqpi_di" bpmnElement="SequenceFlow_0a8mqpi">
        <di:waypoint xsi:type="dc:Point" x="670" y="-285" />
        <di:waypoint xsi:type="dc:Point" x="771" y="-285" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="720.5" y="-306.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_17gv3f0_di" bpmnElement="SequenceFlow_17gv3f0">
        <di:waypoint xsi:type="dc:Point" x="670" y="-114" />
        <di:waypoint xsi:type="dc:Point" x="771" y="-114" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="720.5" y="-135.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_03oaaqj_di" bpmnElement="SequenceFlow_03oaaqj">
        <di:waypoint xsi:type="dc:Point" x="871" y="-285" />
        <di:waypoint xsi:type="dc:Point" x="962" y="-285" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="916.5" y="-307" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0f5k88s_di" bpmnElement="SequenceFlow_0f5k88s">
        <di:waypoint xsi:type="dc:Point" x="381" y="-202" />
        <di:waypoint xsi:type="dc:Point" x="470" y="-202" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="425.5" y="-223.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_18zfdwm_di" bpmnElement="SequenceFlow_18zfdwm">
        <di:waypoint xsi:type="dc:Point" x="495" y="-227" />
        <di:waypoint xsi:type="dc:Point" x="495" y="-285" />
        <di:waypoint xsi:type="dc:Point" x="570" y="-285" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="471" y="-309" width="48" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1tw5hzk_di" bpmnElement="SequenceFlow_1tw5hzk">
        <di:waypoint xsi:type="dc:Point" x="495" y="-177" />
        <di:waypoint xsi:type="dc:Point" x="495" y="-114" />
        <di:waypoint xsi:type="dc:Point" x="570" y="-114" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="510" y="-152" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_1wx2a1m_di" bpmnElement="EndEvent_1wx2a1m" bioc:stroke="#43A047" bioc:fill="#C8E6C9">
        <dc:Bounds x="519.578947368421" y="117" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="528" y="156" width="20" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_090phla_di" bpmnElement="SequenceFlow_090phla">
        <di:waypoint xsi:type="dc:Point" x="391" y="135" />
        <di:waypoint xsi:type="dc:Point" x="520" y="135" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="455.5" y="113.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_10tfsbv_di" bpmnElement="SequenceFlow_10tfsbv">
        <di:waypoint xsi:type="dc:Point" x="871" y="-114" />
        <di:waypoint xsi:type="dc:Point" x="917" y="-114" />
        <di:waypoint xsi:type="dc:Point" x="917" y="-114" />
        <di:waypoint xsi:type="dc:Point" x="962" y="-114" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="887" y="-120" width="90" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;

export default {

    toXML(data) {
        return convert.js2xml(data, {spaces: 2});
    },

    parse(cb) {
        /**
         * XML-JS Parser
         */
        cb(null, convert.xml2js(sampleXML, {
            compact: false
        }));
    }
};