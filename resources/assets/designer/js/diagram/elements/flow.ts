import { IFlow } from './flow.model';

/**
 * Flow
 */
export class Flow {
    shape: IFlow;
    constructor(options: any, shape: IFlow) {
        this.shape = shape;
        options.lineType = 'solid';
        options.arrowType = 'filled';
        this.shape.config(options);
    }

    render(): void {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
    redraw (posx1, posy1, posx2, posy2) {
        this.shape.redraw(posx1, posy1, posx2, posy2);
    }
}