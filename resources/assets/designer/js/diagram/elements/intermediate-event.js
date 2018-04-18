/**
 * IntermediateEvent
 */
export class IntermediateEvent {
    constructor (options, shape) {
        this.type = options.type;
        this.name = options.name;
        this.options = options;
        options.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        options.marker = "MESSAGETHROW";
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
