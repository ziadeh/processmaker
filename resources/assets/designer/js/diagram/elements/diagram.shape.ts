import { IShape } from './shape.model';
import { SVGLoader } from '../svg-loader';

/**
 * StartEventShape
 */
export class DiagramShape implements IShape {
    x: number;
    y: number;
    scale: number;
    attr: any;
    options: any;
    shape: any;
    zoomToolbar: any;
    canvas: any;
    svgLoader: SVGLoader;

    constructor(canvas, svgLoader) {
        this.canvas = canvas;
        this.shape = this.canvas.g();
        this.zoomToolbar = this.canvas.g();
        this.svgLoader = svgLoader;
        this.scale = 1;
    }

    config(options: any) {
        this.options = options;
    }

    add(shape: any) {
        this.shape.add(
            shape.getNativeShape()
        );
    }

    render(): any {
        return this;
    }

    getNativeShape() {
        return this.shape;
    }

    zoomReset() {
        this.scale = 1;
        this.shape.transform(`s${this.scale} 0 0`);
    }

    zoomIn() {
        this.scale += 0.1;
        this.shape.transform(`s${this.scale} 0 0`);
    }

    zoomOut() {
        this.scale -= 0.1;
        this.shape.transform(`s${this.scale} 0 0`);
    }
}
