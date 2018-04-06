import { IShape } from './shape.model';

/**
 * Message
 */
export class Message {
    shape: IShape;
    constructor(options: any, shape: IShape) {
        this.shape = shape;
        options.lineType = 'dashed';
        options.arrowType = 'filled-white';
        options.originConnector = 'round';
        this.shape.config(options);
    }

    render(): void {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}
