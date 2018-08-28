import {JointElements} from "../../jointElements/index"
import {Shape} from "../../Shape"
/**
 * TimerEventDefinition class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = options
    }

    /**
     * Render the IntermediateTimerEvent Based in options config
     */
    render() {
        this.shape = new JointElements.TimerEventDefinition({id: this.options.bpmnElement.id});
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.attr({
            label: {
                text: this.options.bpmnElement.name
            }
        })
        this.shape.addTo(this.graph)
    }
}
