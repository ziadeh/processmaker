import { IShape } from './shape.model';
/**
 * StartEvent
 */
export class Lane {
    private type: string;
    private name: string;
    private options: any;
    private shape: IShape;

    constructor(options: any, shape: IShape) {
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
