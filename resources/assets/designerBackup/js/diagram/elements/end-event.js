/**
 * EndEvent
 */
export class EndEvent {
    init() {
        this.type = null;
        this.name = null;
        this.options = null;
        this.shape = null;
        this.inputConnectors = null;
        this.outputConnectors = null;
    }

    constructor(options, shape) {
        this.init();
        this.type = options.type;
        this.name = options.name || '';
        options.attr = {
            fill: '#EEC0C0',
            stroke: '#C62D2D',
            strokeWidth: 3
        };
        options.marker = 'EMPTY';
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    render() {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }

    registerInputConn(id, conn) {
        this.inputConnectors.set(id, conn);
    }

    registerOutputConn(id, conn) {
        this.outputConnectors.set(id, conn);
    }
}
