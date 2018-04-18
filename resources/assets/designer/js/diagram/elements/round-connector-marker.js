/**
 * ArrowMarker
 */
export class RoundConnectorMarker {
    constructor (canvas) {
        this.canvas = canvas;
        this.shape = false;
        this.marker = false;
    }

    config (options) {
        this.options = Object.assign({}, options);
        return this;
    }

    getMarker () {
        return this.canvas.circle(5, 5, 5).attr({
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 1
        }).marker(0, 0, 100, 100, 1, 5);
    }
}
