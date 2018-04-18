/**
 * Flow
 */
export class DataAssociation {
    constructor (options, shape) {
        this.shape = shape;
        options.lineType = "dotted";
        options.arrowType = "simple";
        this.shape.config(options);
    }

    render () {
        this.shape.render();
    }

    getShape () {
        return this.shape;
    }
}
