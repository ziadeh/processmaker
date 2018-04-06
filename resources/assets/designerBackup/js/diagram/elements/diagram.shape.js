/**
 * StartEventShape
 * implements IShape
 */
export class DiagramShape {
    init() {
        this.x = null;
        this.y = null;
        this.scale = null;
        this.attr = null;
        this.options = null;
        this.shape = null;
        this.zoomToolbar = null;
        this.canvas = null;
        this.svgLoader = null;
    }

    constructor(canvas, svgLoader) {
        this.init();
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