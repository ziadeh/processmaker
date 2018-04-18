/**
 * Flow
 */
export class Flow {
    constructor (options, shape) {
        this.shape = shape;
        options.lineType = "solid";
        options.arrowType = "filled";
        this.shape.config(options);
    }

    render () {
        this.shape.render();
    }

    getShape () {
        return this.shape;
    }

    redraw (posx1, posy1, posx2, posy2) {
        this.shape.redraw(posx1, posy1, posx2, posy2);
    }
}
