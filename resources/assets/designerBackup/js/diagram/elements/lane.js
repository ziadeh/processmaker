/**
 * StartEvent
 */
export class Lane {
    init() {
        this.type=null;
        this.name=null;
        this.options=null;
        this.shape=null;
    }

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
