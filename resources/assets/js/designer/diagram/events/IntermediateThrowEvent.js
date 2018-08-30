import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
import {IntermediateThrowEvent} from "./intermediateThrowEvent/"
import _ from "lodash"

/**
 * IntermediateThrowEvent class
 */
export default class {
    constructor(root, options) {
        //todo review all possible definitions and event by defautl
        let definition = options.bpmnElement.eventDefinitions[0].$type.split(":")[1]
        definition = IntermediateThrowEvent[definition] ? definition : 'Empty'
        this.adapter = new IntermediateThrowEvent[definition](root, options)
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
