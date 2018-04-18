/**
 * Flow
 */
export class Association {
    constructor (options, shape) {
        this.shape = shape;
        options.lineType = "dotted";
        options.arrowType = "none";
        this.shape.config(options);
    }

    render () {
        this.shape.render();
    }

    getShape () {
        return this.shape;
    }
}
