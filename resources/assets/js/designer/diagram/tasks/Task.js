import joint from "jointjs"
import actions from "../../actions"
import EventBus from "../../lib/event-bus"
import {Shape} from "../Shape"
/**
 * Task class
 */
export class Task extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            x: null,
            y: null,
            width: 120,
            height: 80,
            rounded: 10,
            attr: {
                fill: "#FFF",
                stroke: "#000",
                strokeWidth: 2
            }
        }
        this.config(options)
    }

    /**
     * Render the task Based in options config
     */
    render() {
        this.shape = new joint.shapes.standard.Rectangle();
        this.shape.position(this.options.x, this.options.y);
        this.shape.resize(this.options.width, this.options.height);
        this.shape.attr({
            body: {},
            label: {}
        });
        this.shape.addTo(this.graph);
    }
}
