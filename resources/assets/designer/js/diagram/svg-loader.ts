/**
 * SVGLoader
 */
export class SVGLoader {
    private renderer: any;
    private canvas: any;

    constructor(renderer, canvas) {
        this.renderer = renderer;
        this.canvas = canvas;
    }

    loadElement(path, options) {
        return this.canvas.path(path)
            .transform(`${options.scale}, ${options.x}, ${options.y}`)
            .attr(options.attr);
    }
}
