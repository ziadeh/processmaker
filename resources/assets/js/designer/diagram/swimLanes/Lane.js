import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
/**
 * Pool class
 */
export default class extends Shape {
    constructor(root, options, paper, parent) {
        super(root, options)
        this.isContainer = true
        this.type = "lane"
        this.options = {
            id: null,
            type: "lane",
            bounds: {
                x: null,
                y: null,
                width: 600,
                height: 150
            }
        }
        this.setParent(parent)
        this.config(options)
        this.configBounds(root)
    }

    /**
     * Render the Pool Based in options config
     */
    render() {
        this.shape = new JointElements.Lane();
        this.shape.position(this.options.bounds.x, this.options.bounds.y);
        this.shape.resize(this.options.bounds.width, this.options.bounds.height);
        //todo validate
        if(this.root.graph)  {
            this.shape.addTo(this.root.graph);
        }
    }
}
