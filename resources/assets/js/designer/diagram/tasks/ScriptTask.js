import {JointElements} from "../jointElements"
import Task from "./Task"
/**
 * ScriptTask class
 */
export default class extends Task {
    constructor(root, options) {
        super(root, options)
        this.options = options
    }
}
