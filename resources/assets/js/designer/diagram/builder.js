import {Elements} from "./elements";
import _ from "lodash";
import actions from "../actions/index"
import joint from "jointjs"
import EventBus from "../lib/event-bus"
import {Validators} from './flow/Validators'

export class Builder {
    constructor(root) {
        this.root = root
        this.collection = []

        this.selection = []
        this.targetShape = null
        this.sourceShape = null
        this.connectingFlow = null
    }

    createFromBPMN(bpmn) {
        let that = this
        let shapes = []
        let edges = []
        _.forEach(bpmn, (el) => {
            if (el.$type.indexOf("BPMNEdge") > 0) {
                edges.push(el)
            } else {
                shapes.push(el)
            }
        })

        _.forEach(shapes, (el) => {
            let arr = el.bpmnElement.$type.split(":")
            let type = arr.length > 0 ? arr[1] : arr[0]
            el.type = type
            that.createShape(el)
        })

        _.forEach(edges, (el) => {
            let source = el.bpmnElement.sourceRef.id
            let target = el.bpmnElement.targetRef.id
            let arr = el.bpmnElement.$type.split(":")
            let type = arr.length > 0 ? arr[1] : arr[0]
            el.type = type.toLowerCase()
            that.connect(el)
        })
    }

    /**
     * Create a shape based in type
     *
     * @param options
     * @param createbpmn bool
     */
    createShape(options, createbpmn = false) {
        let element
        let participant
        if (Elements[options.type.toLowerCase()]) {
            switch (options.type) {
                case "lane":
                    participant = this.verifyElementFromPoint({x: options.bounds.x, y: options.bounds.y}, "participant")
                    participant ? this.collection.push(participant.createLane()) : null
                    break;
                default:
                    console.log(options.type);
                    participant = this.verifyElementFromPoint({x: options.bounds.x, y: options.bounds.y}, "participant")
                    element = new Elements[options.type.toLowerCase()](
                        this.root,
                        options
                    );
                    element.render()
                    createbpmn ? element.createBpmn() : null
                    this.collection.push(element)
                    console.log(element.getShape());
                    participant ? participant.getShape().embed(element.getShape()) : null
                    if (options.type === "participant") {
                        this.collection = _.concat(element.lanes, this.collection);
                    }
                    break;
            }
        }
    }

    /**
     * onClick event for a shape
     * @param element
     * @returns {function(*)}
     */
    onClickShape(elJoint) {
        let el = this.findElementInCollection(elJoint, true)
        if (el) {
            this.hideCrown()
            el.showCrown()
            this.selection = []
            this.selection.push(el)

        }
        return false;
    }

    /**
     * onClick event for canvas
     * @param element
     * @returns {function(*)}
     */
    onClickCanvas() {
        this.hideCrown()
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
        _.forEach(this.selection, (el) => {
            el.hideCrown();
            el.remove();
        });
    }

    /**
     * Update the position in Shapes
     * @param element
     */
    updatePosition(element) {
        this.hideCrown()
        let res = _.find(this.collection, (o) => {
            return element.id === o.getShape().id
        })
        if (res) {
            res.updateBounds(element.get("position"))
            res.resetFlows()
        }
    }

    assignTask(options) {
        let selection = this.selection.pop()
        selection.configAttributes(options)
        selection.updateBpmn()
        selection.hideCrown()
    }

    /**
     * Connect shapes source, target, and vertices
     * @param source
     * @param target
     */
    connect(options) {
        let flow
        let source = this.findInCollectionById(options.bpmnElement.sourceRef.id)
        let target = this.findInCollectionById(options.bpmnElement.targetRef.id)
        //if (options.source != options.target && Validators.verifyConnectWith(options.source.getType(), options.target.getType())) {
        flow = new Elements[options.type](this.root, options,
            source,
            target
        )
        flow.render();
        /*options.source.updateOptions({
         outgoing: flow.options.id
         })
         options.target.updateOptions({
         incoming: flow.options.id
         })*/
        //}
        return flow
    }


    /**
     * Create flow from Crown
     * @param ev
     */
    createFlow(ev) {
        let elements = this.root.graph.findModelsFromPoint(ev)
        if (elements.length > 0) {
            let element = elements.pop()
            let target = this.findElementInCollection(element)
            let flow = this.connect({
                source: this.sourceShape,
                target,
                type: "sequenceflow"
            })
            flow ? flow.createBpmn() : null
            this.connectingFlow.remove()
        }
        this.connectingFlow = null
        this.sourceShape = null
    }

    /**
     * This method find element joint js in collection
     * @param element
     */
    findElementInCollection(element, inModel = false) {
        return _.find(this.collection, (o) => {
            if (inModel) {
                return element.model.id === o.getShape().id
            } else {
                return element.id === o.getShape().id
            }
        })
    }

    /**
     *
     * @param element
     */
    findInCollectionById(id) {
        return _.find(this.collection, (o) => {
            return id === o.getId()
        })
    }

    /**
     * This method set source element to create flow
     * @param element
     */
    setSourceElement(ev) {
        this.sourceShape = this.selection.pop()
        this.connectingFlow = true
        this.connectingFlow = new joint.shapes.standard.Link()
        this.connectingFlow.source(this.sourceShape.getShape())
        this.connectingFlow.target(ev)
        this.connectingFlow.attr('line/stroke-dasharray', '3,5');
        this.connectingFlow.router('normal')
        this.connectingFlow.addTo(this.root.graph)
    }

    updateConnectingFlow(ev) {
        if (this.connectingFlow) {
            this.connectingFlow.target(ev)
        }
    }

    /**
     * Reset the builder
     */
    clear() {
        this.root.graph.clear()
        this.collection = []
        this.selection = []
    }


    /**
     * This method process the pointerdown event in paper jointjs
     * @param cellView
     * @param evt
     * @param x
     * @param y
     */
    pointerDown(cellView, evt, x, y) {
        var cell = cellView.model;
        if (!cell.get('embeds') || cell.get('embeds').length === 0) {
            cell.toFront();
        }
        if (cell.get('parent')) {
            this.root.graph.getCell(cell.get('parent')).unembed(cell);
        }
    }

    /**
     * This method process the pointerup event in paper jointjs
     * @param cellView
     * @param evt
     * @param x
     * @param y
     */
    pointerUp(cellView, evt, x, y) {
        let cell = cellView.model;
        let cellViewsBelow = this.root.paper.findViewsFromPoint(cellView.getBBox ? cellView.getBBox().center() : cell.getBBox().center());
        if (cellViewsBelow.length) {
            // Note that the findViewsFromPoint() returns the view for the `cell` itself.
            let cellViewBelow = _.find(cellViewsBelow, function (c) {
                return c.model.id !== cell.id
            });
            // Prevent recursive embedding.
            if (cellViewBelow && cellViewBelow.model.get('parent') !== cell.id) {
                let el = this.findElementInCollection(cellViewBelow, true)
                let elCell = this.findElementInCollection(cell)
                if (el && el.getOptions("type") == "participant" && elCell && !elCell.getOptions("type") != "participant") {
                    cellViewBelow.model.embed(cell)
                }
            }
        }
    }

    verifyElementFromPoint(point, type) {
        let that = this
        let response = null
        let elements = this.root.graph.findModelsFromPoint({x: point.x, y: point.y})
        if (elements.length > 0) {
            _.each(elements, (o) => {
                let el = that.findElementInCollection(o)
                if (el instanceof Elements[type]) {
                    response = el
                }
                return el instanceof Elements[type]
            })
        }
        return response
    }
}
