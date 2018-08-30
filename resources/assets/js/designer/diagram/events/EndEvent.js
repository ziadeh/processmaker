import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
import {EndEvent} from "./endEvent/"
import _ from "lodash"
import {IntermediateCatchEvent} from "./intermediateCatchEvent";
/**
 * EndEvent class
 */
export default class {
    constructor(root, options) {
        //todo review all possible definitions
        let definition = 'Empty'
        if (options.bpmnElement.eventDefinitions) {
            definition = options.bpmnElement.eventDefinitions[0].$type.split(":")[1].toLocaleLowerCase()
            definition = EndEvent[definition] ? definition : 'Empty'
        }
        this.adapter = new EndEvent[definition](root, options)
    }

    render() {
        this.adapter.render()
    }

    getShape() {
        return this.adapter.shape
    }

    createBpmn() {
        return this.adapter.createBpmn()
    }

    updateBounds(data) {
        return this.adapter.updateBounds(data)
    }

    resetFlows(data) {
        return this.adapter.resetFlows(data)
    }

    showCrown() {
        return this.adapter.showCrown()
    }

    hideCrown() {
        return this.adapter.hideCrown()
    }

    getType() {
        return this.adapter.getType()
    }

    getOptions(val) {
        return this.adapter.getOptions(val)
    }

    getId(val) {
        return this.adapter.getId(val)
    }

    updateOptions(options) {
        return this.adapter.updateOptions(options)
    }
}
