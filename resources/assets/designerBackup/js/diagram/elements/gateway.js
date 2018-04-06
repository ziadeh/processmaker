/**
 * Gateway
 */
export class Gateway {

    init() {
        this.type = null;
        this.name = null;
        this.options = null;
        this.shape = null;
    }

    constructor(options, shape) {
        this.type = options.type;
        this.name = options.name;
        this.options = options;
        options.attr = {
            fill: '#B4DCCB',
            stroke: '#018A4F',
            strokeWidth: 2
        };
        this.shape = shape;
        this.shape.config(options);
    }

    render() {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}