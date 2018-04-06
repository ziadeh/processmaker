
/**
 * ArrowMarker
 */
export class ArrowConnectorMarker  {
    constructor(canvas) {
        this.canvas = canvas;
        this.shape = false;
        this.marker = false;
    }

    config(options) {
        this.options = Object.assign({}, options);
        this.options.attr = {
            fill: '#000',
            stroke: '#000',
            strokeWidth: 1
        };
        this.options.line = [5, 0 , 17, 5, 5, 10];
        this.options.marker = [0, 0, 100, 100, 18, 5];
        return this;
    }

    createShape(){
        this.generateMarkerOptions();
        if (!this.shape) {
            this.shape = this.canvas
                .polyline(this.options.line)
                .attr(this.options.attr);
        }
        return this.shape;
    }

    generateMarkerOptions() {
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

    getMarker(){
        if (!this.marker) {
            this.marker = this
                .createShape()
                .marker(...this.options.marker);
        }
        return this.marker;
    }

}