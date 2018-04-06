/**
 * Message
 */
export class Message {
    constructor(options, shape) {
        this.shape = shape;
        options.lineType = 'dashed';
        options.arrowType = 'filled-white';
        options.originConnector = 'round';
        this.shape.config(options);
    }

    render() {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}
