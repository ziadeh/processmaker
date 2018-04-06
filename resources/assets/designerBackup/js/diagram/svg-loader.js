/**
 * SVGLoader
 */
export class SVGLoader {
    constructor(renderer, canvas) {
        this.renderer = renderer;
        this.canvas = canvas;
    }

    loadElement(config) {
        return this.canvas.path(config.path)
            .transform(`${config.options.scale}, ${config.options.x}, ${config.options.y}`)
            .attr(config.options.attr);
    }

}
