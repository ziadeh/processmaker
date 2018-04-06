/**
 * LineShape
 */
export class LineShape {
       constructor(canvas) {
        this.canvas = canvas;
        this.shape = false;
    }

    config(options) {
        this.options = Object.assign({}, options);
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

    processLineType() {
        if (this.options.lineType === 'dotted') {
            this.options.attr.strokeDasharray = '1px,2px';
            this.options.attr.strokeLinecap = 'round';
        }
        if (this.options.lineType === 'dashed') {
            this.options.attr.strokeDasharray = '3px,5px';
            this.options.attr.strokeLinecap = 'round';
        }
    }

    addMarkerStart(marker) {
        this.options.attr.markerStart = marker;
        return this;
    }

    addMarkerEnd(marker) {
        this.options.attr.markerEnd = marker;
        return this;
    }

    createShape(){
        if (!this.shape) {
            this.shape = this.canvas
                .polyline(this.options.linePoints)
                .attr(this.options.attr);
        }
        return this.shape;
    }

    getShape(){
        return this.createShape();
    }
    redraw(){
        this.shape.remove();
        this.shape = this.canvas
        .polyline(this.options.linePoints)
        .attr(this.options.attr);
        return this.shape;
    }
}