import { IShape } from './shape.model';

/**
 * Flow
 */
export class DataAssociation {
    shape: IShape;
    constructor(options: any, shape: IShape) {
        this.shape = shape;
        options.lineType = 'dotted';
        options.arrowType = 'simple';
        this.shape.config(options);
    }

    render(): void {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}