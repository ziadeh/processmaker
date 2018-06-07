import {Elements} from "./elements";
import _ from "lodash";
import actions from "../actions/index"
import joint from "jointjs"
import EventBus from "../lib/event-bus"
/**
 * Builder Class
 */
export class Builder {
    constructor(graph, paper) {
        this.graph = graph
        this.paper = paper
        this.collection = []
        this.selection = []
        this.creatingFlow = false
    }

    /**
     * Create a shape based in type
     * @param type
     * @param options
     */
    createShape(type, options) {
        let element,
            defaultOptions = {
                $type: type,
                id: options.id,
                name: options.bpmnElement && options.bpmnElement.name ? options.bpmnElement.name : options.name ? options.name : "",
                moddleElement: options
            };
        defaultOptions = _.extend(defaultOptions, options);
        // Type Example - bpmn:StartEvent
        if (Elements[options.eClass]) {
            element = new Elements[options.eClass](
                defaultOptions,
                this.graph,
                this.paper
            );
            element.render();
            this.collection.push(element)
            this.paper.on('element:pointerclick', this.onClickShape())
            this.paper.on('blank:pointerclick', this.onClickCanvas())
        }
    }

    /**
     * onClick event for a shape
     * @param element
     * @returns {function(*)}
     */
    onClickShape() {
        let that = this;
        return (element) => {
            let res = _.find(that.collection, (o) => {
                return element.model.id === o.shape.id
            })

            if (res) {
                that.hideCrown()
                that.removeSelectionBorder()
                that.selection = [];
                that.selection.push(res);
                res.showCrown()
                res.createSelectionBorder(res)
            }

            return false;
        };
    }

    /**
     * onClick event for canvas
     * @param element
     * @returns {function(*)}
     */
    onClickCanvas() {
        let that = this;
        return (element) => {
            that.hideCrown()
            that.removeSelectionBorder()
            return false;
        };
    }

    /**
     * Remove selection border of all shapes selected
     */
    removeSelectionBorder() {
        _.forEach(this.selection, (el) => {
            el.removeSelectionBorder();
        });
    }

    /**
     * This method removes the crown in the selected shape
     */
    hideCrown() {
        _.forEach(this.selection, (el) => {
            el.hideCrown();
        });
    }

    /**
     * Remove the shape selected
     * @param element
     * @returns {function(*)}
     */
    removeSelection() {
        let that = this
        _.forEach(this.selection, (el) => {
            _.remove(that.collection, (o) => {
                return el == o
            })
            el.hideCrown()
            el.removeSelectionBorder()
            el.remove()
        });
        this.selection = []
    }

    /**
     * Listener for the update position from shape in svg canvas
     * @param element
     */
    updatePosition(element) {
        this.hideCrown()
        this.removeSelectionBorder()
        let res = _.find(this.collection, (o) => {
            return element.id === o.shape.id
        })
        if (res) {
            res.config(element.get("position"))
        }
    }
}
