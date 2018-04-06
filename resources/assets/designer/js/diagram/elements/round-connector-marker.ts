import { IMarker } from './marker.model';
/**
 * ArrowMarker
 */
export class RoundConnectorMarker  {
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
        return this;
    }

    public getMarker(): any {
        return this.canvas.circle(5, 5, 5).attr({
            fill: '#FFF',
            stroke: '#000',
            strokeWidth: 1
        }).marker(0, 0, 100, 100, 1, 5);
    }

}