import {IShape} from './shape.model';
import {SVGLoader} from '../svg-loader';
/**
 * Lane Shape class
 */
export class LaneShape implements IShape {
    id: string;
    x: number;
    y: number;
    isFirst: boolean;
    scaleX: number;
    scaleY: number;
    rounded: number;
    attr: any;
    options: any;
    canvas: any;
    svgLoader: SVGLoader;
    shape: any;

    constructor(canvas: any, svgLoader: SVGLoader) {
        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.attr = {
            fill: '#FFF',
            stroke: '#000',
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
        this.shape.drag();
    }

    config(options: any) {
        this.options = options;
        this.id = options.id;
        this.x = options.x + 13;
        this.y = options.y + 3;
        this.scaleX = options.width - 15;
        this.scaleY = options.height - 1;
        this.attr = options.attr || this.attr;
        this.isFirst = options.isFirst || false;
    }

    render(): void {
        this.shape.add(
            this.canvas.rect(this.x, this.y, this.scaleX, this.scaleY).attr({'fill': '#fff'})
        );
        this.addDecorators();
    }

    addDecorators(): void {
        this.addLineDecorator();
        this.addTextDecorator();
    }

    addLineDecorator() {
        let strokeWidth = 2;
        if (this.isFirst) {
            strokeWidth = 0;
        }
        this.shape.add(this.canvas.polyline(`${this.x} ${this.y + this.scaleY - 2} ${this.x + this.scaleX} ${this.y + this.scaleY - 2}`).attr({
            fill: 'none',
            stroke: '#000',
            strokeWidth: strokeWidth
        }));
    }

    addTextDecorator() {
        const text = this.canvas.text(
            this.x,
            this.y,
            this.options.name,
            {'font-size': '13px', 'font-family': 'Arial, Helvetica, sans-serif'})
        const textBox = text.getBBox();
        const tx = textBox.height + (42 - textBox.height) / 2;
        const ty = textBox.width + (this.scaleY - textBox.width) / 2;
        text.transform('r270 ' + this.x + ', ' + this.y + ' t' + -ty + ', ' + tx);
        this.shape.add(text);
    }

    getNativeShape() {
        return this.shape;
    }
}

