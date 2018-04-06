/**
 * ArrowMarker
 */
export class CustomConnectorMarker {
    options: any
    canvas: any
    shape: any
    marker: any

    constructor(canvas) {
        this.canvas = canvas
        this.shape = false
        this.marker = false
    }
    
    public config(options) {
        this.options = options
    }

    private createShape(): any {
        if (!this.shape) {
            this.shape = this.canvas
                .polygon(this.options.polygon)
                .attr(this.options.attr)
                .transform(this.options.transform);
        }
        return this.shape;
    }

   public getMarker(): any {
        if (!this.marker) {
            this.marker = this
                .createShape()
                .marker(this.options.marker);
        }
        return this.marker
    }

}