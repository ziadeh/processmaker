import { IMarker } from './marker.model';
/**
 * ArrowMarker
 */
export class ArrowConnectorMarker  {
    options: any;
    canvas: any;
    shape: any;
    marker: any;

    constructor(canvas) {
        this.canvas = canvas;
        this.shape = false;
        this.marker = false;
    }

    public config(options) {
        this.options = (<any>Object).assign({}, options);
        this.options.attr = {
            fill: '#000',
            stroke: '#000',
            strokeWidth: 1
        };
        this.options.line = [5, 0 , 17, 5, 5, 10];
        this.options.marker = [0, 0, 100, 100, 18, 5];
        return this;
    }

    private createShape(): any {
        this.generateMarkerOptions();
        if (!this.shape) {
            this.shape = this.canvas
                .polyline(this.options.line)
                .attr(this.options.attr);
        }
        return this.shape;
    }

    private generateMarkerOptions() {
        switch (this.options.type) {
            case 'simple':
                this.options.attr.fill = 'none';
                break;
            case 'filled':
                this.options.attr.fill = '#000';
                break;
            case 'filled-white':
                this.options.attr.fill = '#FFF';
                this.options.line = [5, 0 , 17, 5, 5, 10, 5, 0];
                break;
        }
    }

    public getMarker(): any {
        if (!this.marker) {
            this.marker = this
                .createShape()
                .marker(...this.options.marker);
        }
        return this.marker;
    }

}