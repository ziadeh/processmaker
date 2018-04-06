import { IShape } from './shape.model';

/**
 * Flow
 */
export class Association {
    shape: IShape;
    constructor(options: any, shape: IShape) {
        this.shape = shape;
        options.lineType = 'dotted';
        options.arrowType = 'none';
        this.shape.config(options);
    }

    render(): void {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}