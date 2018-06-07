import joint from "jointjs"
import actions from "../actions"
import EventBus from "../lib/event-bus"
/**
 * Shape class
 */
export class Shape {
    constructor(graph, paper) {
        this.options = {}
        this.graph = graph
        this.paper = paper
        this.shape = null
        this.selectionBorder = null
    }

    /**
     * Merge options default with options from arguments
     * @param options
     * @returns {TaskShape}
     */
    config(options) {
        this.options = Object.assign({}, this.options, options);
        return this;
    }

    /**
     * Render the shape
     */
    render() {
    }

    /**
     * Emit a message to crown to display
     */
    showCrown() {
        let diffDy = -10
        let diffDx = 5
        let action = actions.designer.crown.show({
            y: this.options.y + diffDy,
            x: this.options.x + this.options.width + diffDx
        })
        EventBus.$emit(action.type, action.payload)
    }

    /**
     * This method hides the crown of shape
     */
    hideCrown() {
        let action = actions.designer.crown.hide()
        EventBus.$emit(action.type, action.payload)
    }

    /**
     * Return the object jointjs
     * @returns {*}
     */
    getShape() {
        return this.shape;
    }

    /**
     * Create the selection border from shape
     */
    createSelectionBorder() {
        let sel = new joint.shapes.standard.Rectangle();
        sel.position(this.options.x - 4, this.options.y - 4);
        sel.resize(this.options.width + 8, this.options.height + 8);
        sel.attr({
            body: {
                "stroke-dasharray": "5 5",
                "fill": "none",
                "stroke": "#28a745"
            },
            label: {}
        });
        sel.addTo(this.graph);
        this.selectionBorder = sel
    }

    /**
     * Remove the selection border from shape
     */
    removeSelectionBorder() {
        if (this.selectionBorder) {
            this.selectionBorder.remove()
            this.selectionBorder = null
        }
    }

    /**
     * Remove this element
     */
    remove() {
        if (this.shape) {
            this.shape.remove()
            this.shape = null
        }
    }
}
