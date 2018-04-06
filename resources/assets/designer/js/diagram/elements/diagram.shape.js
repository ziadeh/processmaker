/**
 * StartEventShape
 */
export class DiagramShape {
    constructor(canvas, svgLoader) {
        this.canvas = canvas;
        this.shape = this.canvas.g();
        this.zoomToolbar = this.canvas.g();
        this.svgLoader = svgLoader;
        this.scale = 1;
    }

    config(options) {
        this.options = options;
    }

    add(shape) {
        this.shape.add(
            shape.getNativeShape()
        );
    }

    render() {
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
