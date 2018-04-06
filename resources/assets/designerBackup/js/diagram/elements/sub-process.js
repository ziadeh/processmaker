
/**
 * SubProcess
 */
export class SubProcess {
    init() {
        this.type = null;
        this.name = null;
        this.options = null;
        this.shape = null;
    }

    constructor(options, shape) {
        this.init();
        this.options = options;
        this.options.attr = {
            fill: '#FFF',
            stroke: '#000',
            strokeWidth: 3
        };
        this.options.act_loop_type = 'COLLAPSED';
        this.options.act_task_type = 'EMPTY';
        this.shape = shape;
        this.shape.config(options);
    }

    render() {
        this.shape.render();
    }

    getShape() {
        return this.shape;
    }
}
