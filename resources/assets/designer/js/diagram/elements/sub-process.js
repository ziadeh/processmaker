/**
 * SubProcess
 */
export class SubProcess {
    constructor(options, shape) {
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
