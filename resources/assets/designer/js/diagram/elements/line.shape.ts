import { IMarker } from './marker.model';
/**
 * LineShape
 */
export class LineShape {
    options: any;
    canvas: any;
    shape: any;

    constructor(canvas) {
        this.canvas = canvas;
        this.shape = false;
    }

    public config(options) {
        this.options = (<any>Object).assign({}, options);
        this.options.attr = {
            fill: 'none',
            stroke: '#000',
            strokeWidth: 1
        };

        if (this.options.markerEnd) {
            this.options.attr.markerEnd = this.options.markerEnd;
        }

        if (this.options.markerStart) {
            this.options.attr.markerStart = this.options.markerStart;
        }

        this.processLineType();
        return this;
    }

    private processLineType() {
        if (this.options.lineType === 'dotted') {
            this.options.attr.strokeDasharray = '1px,2px';
            this.options.attr.strokeLinecap = 'round';
        }
        if (this.options.lineType === 'dashed') {
            this.options.attr.strokeDasharray = '3px,5px';
            this.options.attr.strokeLinecap = 'round';
        }
    }

    public addMarkerStart(marker: IMarker) {
        this.options.attr.markerStart = marker;
        return this;
    }

    public addMarkerEnd(marker: IMarker) {
        this.options.attr.markerEnd = marker;
        return this;
    }

    private createShape(): any {
        if (!this.shape) {
            this.shape = this.canvas
                .polyline(this.options.linePoints)
                .attr(this.options.attr);
        }
        return this.shape;
    }

    public getShape(): any {
        return this.createShape();
    }
    public redraw(): any {
        this.shape.remove();
        this.shape = this.canvas
        .polyline(this.options.linePoints)
        .attr(this.options.attr);
        return this.shape;
    }

}