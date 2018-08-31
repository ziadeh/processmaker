import _ from "lodash"
import Mutations from "./Mutations"
import EventBus from "../lib/event-bus"

// bpmn-moddle parser xml
import BpmnModdle from 'bpmn-moddle';
let moddle = new BpmnModdle();

export default class BPMNHandler {
    constructor(xml) {
        this.definitions
    }

    buildModel(xml, callback) {
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

    toXML() {
        let that = this
        moddle.toXML(this.definitions, function (err, xmlStrUpdated) {
            console.log('Save process')
            console.log(err)
            console.log(xmlStrUpdated)
            that.xml = xmlStrUpdated;
        });
        return this.xml;
    }

    addMutations() {
        let that = this
        _.flatMap(Mutations, (mutation, type) => {
            EventBus.$on(type, (payload) => {
                mutation(payload, that.definitions)
            })
        })
    }
}
