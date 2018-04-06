import { IShape } from './shape.model';
/**
 * Gateway
 */
export class Gateway {
    private type: string;
    private name: string;
    private options: any;
    private shape: IShape;

    constructor(options: any, shape: IShape) {
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