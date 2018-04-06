/**
 * StartEvent
 */
export class Pool {
    constructor(options, shape) {
        this.type = 'POOL';
        this.name = options.name;
        this.options = options;
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
