/**
 * StartEvent
 */
export class Lane {

    constructor(options, shape) {
        this.type = 'bpmn:Lane';
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
