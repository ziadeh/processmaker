/**
 * StartEvent
 */
export class BlackboxPool {
    constructor (options, shape) {
        this.type = options.evn_type;
        this.name = options.evn_name;
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    render () {
        this.shape.render();
    }

    getShape () {
        return this.shape;
    }
}
