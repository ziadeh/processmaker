import _ from "lodash"
import Mutations from "./Mutations"
import EventBus from "../lib/event-bus"

import BPMNDefinitions from './BPMNDefinitions'
import BPMNCollaboration from './BPMNCollaboration'
import BPMNProcess from './BPMNProcess'
import BPMNDiagram from './BPMNDiagram'

// bpmn-moodle for extract the XML
import BpmnModdle from 'bpmn-moddle';
let moddle = new BpmnModdle();

export default class BPMNHandler {
    constructor(xml) {
        this.definitions
    }

    buildModel(xml, callback) {
        let moddle = new BpmnModdle();
        let that = this

        moddle.fromXML(xml, function (err, definitions) {
            that.definitions = definitions
            debugger
            let elements = that.getElementsFromDiagrams()
            if (_.isFunction(callback)) {
                callback(elements)
            }
        })
    }

    /*buildElementsDiagram(els) {
     let that = this
     _.find(els, (value) => {
     let idBpmnElement = value.attributes.bpmnElement
     let bpmnEl
     bpmnEl = that.findElementInCollaboration(this.collaborations, idBpmnElement)
     bpmnEl = !bpmnEl ? that.findElementInProcess(this.processes, idBpmnElement) : bpmnEl

     if (bpmnEl && value.name == that.BPMNDefinitions.getbpmndi() + ":BPMNEdge") {
     that.elements[idBpmnElement] = {
     diagram: value,
     process: bpmnEl
     }
     that.bpmnDesigner.links.push(that.formatEdge(value, bpmnEl))

     } else if (bpmnEl) {
     that.elements[idBpmnElement] = {
     diagram: value,
     process: bpmnEl
     }
     that.bpmnDesigner.shapes.push(this.formatElement(value, bpmnEl))
     }
     })
     }*/

    getElementsFromProcess() {
        let processes = this.definitions.get("rootElements")
        let els = []
        _.each(processes, (pro) => {
            let arr = pro.get("flowElements")
            els = _.concat(els, arr)
        })
        return els
    }

    getElementFromDiagrams(id) {
        let diagrams = this.definitions.get("diagrams")
        let els = []
        _.each(diagrams, (dia) => {
            let plane = dia.get("plane")
            let planeElement = plane.get("planeElement")
            els = _.find(planeElement, (v) => {
                return v.id == id
            })
            if (!els) {
                return false
            }
        })
        return els
    }

    getElementsFromDiagrams() {
        let diagrams = this.definitions.get("diagrams")
        let els = []
        _.each(diagrams, (dia) => {
            let plane = dia.get("plane")
            let planeElement = plane.get("planeElement")
            els = _.concat(els, planeElement)
        })
        return els
    }
}


/*
 export default class BPMNHandler {
 constructor(xml) {
 this.BPMNDefinitions = null
 this.BPMNCollaboration = null
 this.BPMNProcess = null
 this.BPMNDiagram = null

 this.xml = xml
 this.bpmn = null
 this.elements = {} // Models from Elements
 this.bpmnDesigner = {
 shapes: [],
 links: []
 }
 this.elementsDiagram = [] // diagrams
 this.processes = [] // processes definition
 this.collaborations = [] // collaborations objects
 this.addMutations()
 }

 createBPMNDefinitions() {
 this.BPMNDefinitions = new BPMNDefinitions(this.bpmn.elements[0].attributes, {
 BPMNCollaboration: this.BPMNCollaboration,
 BPMNProcess: this.BPMNProcess,
 BPMNDiagram: this.BPMNDiagram
 })
 }

 createBPMNCollaboration() {
 this.BPMNCollaboration = new BPMNCollaboration(this.findCollaboration(), {
 BPMNDefinitions: this.BPMNDefinitions,
 BPMNProcess: this.BPMNProcess,
 BPMNDiagram: this.BPMNDiagram
 })
 }

 createBPMNProcess() {
 this.BPMNProcess = new BPMNProcess(this.findProcesses(), {
 BPMNDefinitions: this.BPMNDefinitions,
 BPMNCollaboration: this.BPMNCollaboration,
 BPMNDiagram: this.BPMNDiagram
 })
 }

 createBPMNDiagram() {
 this.BPMNDiagram = new BPMNDiagram(this.findBPMNDiagrams(), {
 BPMNDefinitions: this.BPMNDefinitions,
 BPMNCollaboration: this.BPMNCollaboration,
 BPMNProcess: this.BPMNProcess
 })
 }

 reset() {
 this.xml = null
 this.bpmn = null
 this.elements = {}
 this.bpmnDesigner = {
 shapes: [],
 links: []
 }
 this.elementsDiagram = []
 this.processes = []
 this.collaborations = []
 }
 /
 getModel() {
 return this.bpmnDesigner
 }


 xml2json(xml) {
 this.xml = xml
 this.bpmn = convert.xml2js(xml, {
 ignoreComment: true,
 alwaysChildren: true
 })
 }

 buildModel(xml) {
 this.reset()
 if (xml) {
 this.xml2json(xml)
 this.elementsDiagram = this.findBPMNDiagram()
 this.processes = this.findProcess()
 this.collaborations = this.findCollaboration()
 this.createBPMNDefinitions()
 this.createBPMNCollaboration()
 this.createBPMNDiagram()
 this.createBPMNProcess()
 this.buildElementsDiagram(this.elementsDiagram)
 }
 return this.bpmnDesigner
 }

 findDefinition(type) {
 let BPMNDiagram = _.find(this.bpmn.elements[0].elements, (value) => {
 return value.name == type ? true : false
 })
 return BPMNDiagram.elements[0].elements
 }


 findCollaboration() {
 let collaboration = _.find(this.bpmn.elements[0].elements, (value) => {
 return value.name.indexOf("collaboration") >= 0 ? true : false
 })
 return collaboration ? collaboration.elements : null
 }

 findBPMNDiagram() {
 let BPMNDiagram = _.find(this.bpmn.elements[0].elements, (value) => {
 return value.name.indexOf("BPMNDiagram") >= 0 ? true : false
 })
 return BPMNDiagram.elements[0].elements
 }

 findBPMNDiagrams() {
 let BPMNDiagram = _.find(this.bpmn.elements[0].elements, (value) => {
 return value.name.indexOf("BPMNDiagram") >= 0 ? true : false
 })
 return BPMNDiagram
 }

 findProcess() {
 return _.filter(this.bpmn.elements[0].elements, (value) => {
 return value.name.indexOf("process") >= 0 ? true : false
 })
 }


 findProcesses() {
 let processes = _.find(this.bpmn.elements[0].elements, (value) => {
 return value.name.indexOf("process") >= 0 ? true : false
 })
 return processes
 }

 buildElementsDiagram(els) {
 let that = this
 _.find(els, (value) => {
 let idBpmnElement = value.attributes.bpmnElement
 let bpmnEl
 bpmnEl = that.findElementInCollaboration(this.collaborations, idBpmnElement)
 bpmnEl = !bpmnEl ? that.findElementInProcess(this.processes, idBpmnElement) : bpmnEl

 if (bpmnEl && value.name == that.BPMNDefinitions.getbpmndi() + ":BPMNEdge") {
 that.elements[idBpmnElement] = {
 diagram: value,
 process: bpmnEl
 }
 that.bpmnDesigner.links.push(that.formatEdge(value, bpmnEl))

 } else if (bpmnEl) {
 that.elements[idBpmnElement] = {
 diagram: value,
 process: bpmnEl
 }
 that.bpmnDesigner.shapes.push(this.formatElement(value, bpmnEl))
 }
 })
 }

 findElementInProcess(processes, idbpmn) {
 let element
 _.each(processes, (process) => {
 let el = _.find(process.elements, (el) => {
 return el.attributes.id == idbpmn
 })
 element = el ? el : element
 })
 return element
 }

 findElementInCollaboration(colls, idbpmn) {
 let element
 _.each(colls, (coll) => {
 if (coll.attributes && coll.attributes.id && coll.attributes.id == idbpmn) {
 element = coll
 }
 })
 return element
 }

 findDefinition(bpmn, nameBpmn) {
 let name
 _.each(bpmn.elements, (el) => {
 if (el.name.indexOf(nameBpmn) > 0) {
 name = el.name.split(":")[1]
 }
 })
 return name
 }

 formatElement(di, bpmn) {

 let Element = {}
 let attr = this.getAttributes(di, "dc:Bounds")
 let name = bpmn.name.split(':')
 _.forEach(attr, (value, key, obj) => {
 obj[key] = parseFloat(value)
 })
 let eventDefinition = this.findDefinition(bpmn, "EventDefinition")
 return {
 type: name.length == 1 ? name[0].toLowerCase() : name[1].toLowerCase(),
 id: di.attributes.bpmnElement,
 bounds: attr,
 eventDefinition,
 attributes: bpmn.attributes
 }
 }

 formatEdge(di, bpmn) {
 let Element = {}
 let attr = this.getAttributes(di, "bpmndi:BPMNEdge")
 let name = bpmn.name.split(':')
 let wayPoints = []

 //From BPMN Element
 let destTarget = this.getAttributes(bpmn, "Flow")

 //From diagram
 _.each(di.elements, (el) => {
 _.forEach(el.attributes, (value, key, obj) => {
 obj[key] = parseFloat(value)
 })
 if (el.name == "di:waypoint") {
 wayPoints.push(el.attributes)
 }
 })

 return Object.assign({}, attr, {
 type: name.length == 1 ? name[0].toLowerCase() : name[1].toLowerCase(),
 id: di.attributes.bpmnElement
 }, destTarget, {wayPoints})
 }

 getAttributes(di, property) {
 if (di && di.name && di.name.indexOf(property) >= 0) {
 return di.attributes
 } else if (di) {
 return this.getAttributes(di.elements[0] ? di.elements[0] : null, property)
 } else {
 return null
 }
 }

 addMutations() {
 let that = this
 _.flatMap(Mutations, (mutation, type) => {
 EventBus.$on(type, (payload) => {
 mutation(payload, this.BPMNProcess, this.BPMNCollaboration, this.BPMNDiagram, this.BPMNDefinitions)
 })
 })
 }
 toXML() {
 var options = {
 compact: false,
 ignoreComment: true,
 ignoreDeclaration: true,
 spaces: 4
 }
 let xmlHeader = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
 return xmlHeader + convert.js2xml(this.bpmn, options)
 }
 }
 */