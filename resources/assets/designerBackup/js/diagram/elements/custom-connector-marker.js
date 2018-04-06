/**
 * ArrowMarker
 */
export class CustomConnectorMarker {
    init() {
        this.options = null;
        this.canvas = null;
        this.shape = null;
        this.marker = null;
    }

    constructor(canvas) {
        this.canvas = canvas;
        this.shape = false;
        this.marker = false;
    }

    public config(options) {
        this.options = options
    }

    private createShape() {
        if (!this.shape) {
            this.shape = this.canvas
                .polygon(this.options.polygon)
                .attr(this.options.attr)
                .transform(this.options.transform);
        }
        return this.shape;
    }

    public getMarker() {
        if (!this.marker) {
            this.marker = this
                .createShape()
                .marker(this.options.marker);
        }
        return this.marker
    }

}