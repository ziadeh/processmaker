/**
 * Task Shape class
 */
export class BlackboxPoolShape {
    init() {
        this.id = null;
        this.x = null;
        this.y = null;
        this.scaleX = null;
        this.scaleY = null;
        this.rounded = null;
        this.attr = null;
        this.options = null;
        this.canvas = null;
        this.svgLoader = null;
        this.shape = null;
    }

    constructor(canvas, svgLoader) {
        this.init();
        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.rounded = 5;
        this.attr = {
            fill: '#FFF',
            stroke: '#000',
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
    }

    config(options) {
        this.options = options;
        this.id = options.act_uid;
        this.x = +options.bou_x;
        this.y = +options.bou_y;
        this.scaleX = +options.bou_width;
        this.scaleY = +options.bou_height;
        this.rounded = +options.rounded || this.rounded;
        this.attr = options.attr || this.attr;
    }

    render() {
        this.shape.add(this.canvas.rect(
            this.x,
            this.y,
            this.scaleX,
            this.scaleY,
            this.rounded
        ).attr(this.attr));

        this.addDecorators();
        this.shape.drag();
    }

    addDecorators() {
        this.addLineDecorator();
        this.addTextDecorator();
    }

    addLineDecorator() {
        this.shape.add(
            this.canvas.polyline(`${this.x + 42} ${this.y} ${this.x + 42} ${this.y + this.scaleY}`).attr({
                fill: 'none',
                stroke: '#000',
                strokeWidth: 2
            })
        );
    }

    addTextDecorator() {
        this.shape.add(this.canvas.multitext(
            this.x - 30,
            this.y + (this.scaleY / 2),
            this.options.par_name,
            this.scaleY,
            {'font-size': '13px', 'font-family': 'Arial, Helvetica, sans-serif'}
        ).transform('r270'));
    }

    getNativeShape() {
        return this.shape;
    }

}
