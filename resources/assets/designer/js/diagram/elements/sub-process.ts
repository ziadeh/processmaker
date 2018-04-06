import { IShape } from './shape.model';
/**
 * SubProcess
 */
export class SubProcess {
    private type: string;
    private name: string;
    private options: any;
    private shape: IShape;

    constructor(options: any, shape: IShape) {
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
