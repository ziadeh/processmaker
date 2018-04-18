/**
 * SVGLoader
 */
export class SVGLoader {
    /**
     * Constructor of this class
     * @param canvas
     */
    constructor (canvas) {
        this.canvas = canvas;
    }

    /**
     * Load element in canvas
     * @param path
     * @param options
     */
    loadElement (path, options) {
        return this.canvas.path(path)
            .transform(`${options.scale}, ${options.x}, ${options.y}`)
            .attr(options.attr);
    }
}
