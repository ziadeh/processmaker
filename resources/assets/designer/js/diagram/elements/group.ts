import { IShape } from './shape.model';
/**
 * StartEvent
 */
export class Group {
    private type: string;
    private name: string;
    private options: any;
    private shape: IShape;

    constructor(options: any, shape: IShape) {
        this.type = options.evn_type;
        this.name = options.evn_name;
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
