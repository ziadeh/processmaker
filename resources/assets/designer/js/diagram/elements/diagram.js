/**
 * EndEvent
 */
export class Diagram {
    constructor (options, shape) {
        this.type = "diagram";
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    zoomIn () {
        this.shape.zoomIn();
    }

    zoomOut () {
        this.shape.zoomOut();
    }

    zoomReset () {
        this.shape.zoomReset();
    }

    add (element) {
        this.shape.add(element.getShape());
    }

    render () {
        this.shape.render();
    }

    getShape () {
        return this.shape;
    }
}
