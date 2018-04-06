import { IShape } from './shape.model';

/**
 * IntermediateEvent
 */
export class IntermediateEvent {
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
        options.marker = 'MESSAGETHROW';
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