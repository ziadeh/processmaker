import joint from "jointjs"
import Flow from "./Flow"
/**
 * Flow class
 */
export default class extends Flow {
    constructor(root, options, source, target) {
        super(root)
        this.shape = null
        this.options = options
        this.source = source
        this.target = target
    }

    /**
     * Render the Flow
     */
    render() {
        this.shape = new joint.shapes.standard.Link({id: this.options.id})
        this.shape.vertices(this.formatWayPoints(this.options.wayPoints))
        this.setSource(this.source)
        this.setTarget(this.target)
        this.shape.router('orthogonal', {
            elementPadding: 10
        })
        this.shape.addTo(this.root.graph)
        this.options.id = this.shape.id
        this.createTools()
        this.addEvents()
    }
}