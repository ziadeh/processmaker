/**
 * EndEvent
 */
export class Diagram {
    private type: string;
    private name: string;
    private options: any;
    private shape: any;

    constructor(options: any, shape: any) {
        this.type = 'diagram';
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    zoomIn() {
        this.shape.zoomIn();
    }

    zoomOut() {
        this.shape.zoomOut();
    }

    zoomReset() {
        this.shape.zoomReset();
    }

    add(element: any) {
        this.shape.add(
            element.getShape()
        );
    }

    render() {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}
