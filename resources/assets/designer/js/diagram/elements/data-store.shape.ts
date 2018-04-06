import { IShape } from './shape.model';
import { SVGLoader } from '../svg-loader';

/**
 * StartEventShape
 */
export class DataStoreShape implements IShape {
    x: number;
    y: number;
    scale: number;
    attr: any;
    options: any;
    animateOptions: any;
    animationTime: number;
    shape: any;
    canvas: any;
    svgLoader: SVGLoader;

    constructor(canvas, svgLoader) {
        this.canvas = canvas;
        this.shape = this.canvas.group();
        this.svgLoader = svgLoader;
        this.x = 100;
        this.y = 100;
        this.scale = 40;
        this.attr = {
            fill: '#B4DCCB',
            stroke: '#018A4F',
            strokeWidth: 2
        };
        this.animateOptions = {r: this.scale};
        this.animationTime = 10;
    }

    config(options: any) {
        this.x = +options.x - 4;
        this.y = +options.y - 3;
        this.scale = options.width || this.scale;
        this.options = options;
        this.attr = options.attr || this.attr;
        this.animateOptions.r = +options.width / 2 || this.scale;
        this.animateOptions = options.animateOptions || this.animateOptions;
        this.animationTime = options.animationTime || this.animationTime;
    }

    getBase(type, marker) {
        const x = this.x;
        const y = this.y;
        const baseConfig = {path: 'm500 184c-78 0-156 7-216 20-30 7-56 15-75 25-18 10-31 21-34 35 0 0 0 1 0 1l0 0 0 0 0 73c0 0 0 0 0 0l0 73c0 0 0 0 0 0l0 324 0 0c3 14 16 26 34 36 19 10 45 18 75 25 60 13 138 19 216 19 78 0 156-6 216-19 30-7 56-15 75-25 19-10 31-22 34-36l0 0 0-324c0 0 0 0 0 0l0-73c0 0 0 0 0 0l0-73c0 0 0 0 0 0l0 0 0 0c0 0 0-1 0-1-3-14-16-25-34-35-19-10-45-18-75-25-60-13-138-20-216-20z m0 5c78 0 156 7 215 20 30 6 55 15 73 24 18 10 29 21 32 32-3 12-14 23-32 32-18 10-43 18-73 24-59 13-137 20-215 20-78 0-156-7-215-20-30-6-55-14-73-24-18-9-29-20-32-32 3-11 14-22 32-32 18-9 43-18 73-24 39-8 86-14 135-17 26-2 53-3 80-3z m-320 88c6 10 16 18 29 25 19 10 45 18 75 24 60 13 138 20 216 20 78 0 156-7 216-20 30-6 56-14 75-24 13-7 23-15 29-25l0 61c-2 12-13 23-32 32-18 10-43 18-73 24-59 13-137 20-215 20-78 0-156-7-215-20-30-6-55-14-73-24-18-9-29-20-32-32z m0 73c6 10 16 18 29 25 19 10 45 18 75 24 60 13 138 20 216 20 78 0 156-7 216-20 30-6 56-14 75-24 13-7 23-15 29-25l0 61c-2 12-13 23-32 32-18 10-43 18-73 25-59 12-137 19-215 19-78 0-156-7-215-19-30-7-55-15-73-25-18-9-29-20-32-32z m0 73c6 10 16 18 29 25 19 10 45 18 75 24 60 14 138 20 216 20 78 0 156-6 216-20 30-6 56-14 75-24 13-7 23-15 29-25l0 311c-2 12-13 23-32 33-18 9-43 17-73 24-59 13-137 19-215 19-78 0-156-6-215-19-30-7-55-15-73-24-18-10-29-21-32-33z', options: {x: x, y: y, scale: 's0.07', attr: {
            stroke: '#000',
            strokeWidth: 0
        }}};
        const base = this.svgLoader.loadElement(
            baseConfig.path,
            baseConfig.options
        );
        const offsetX = Math.round(x - base.getBBox().x);
        const offsetY = Math.round(y - base.getBBox().y);
        base.transform(`S0.07, ${x + offsetX + 4}, ${y + offsetY + 2}`);

        this.shape.add(
            base
        );
    }

    getDecorator(type, options) {
        let decorator: any;
        switch (type) {
            case 'TEXT':
                decorator = this.canvas.text(options.x, options.y, options.text)
                    .attr({'font-size': '13px', 'font-family': 'Arial, Helvetica, sans-serif'});
                const tx = (+this.options.width - decorator.getBBox().width) / 2 + 2;
                const ty = +this.options.height + 20;
                decorator.transform(`t ${tx}, ${ty}`);
                break;
            default:
                decorator = this.canvas.group();
                break;
        }
        return decorator;
    }

    render(): void {
        this.shape.add(
            this.canvas.rect(this.x, this.y, this.scale, this.scale).attr({'fill': '#FFF'})
        );
        this.getBase(
            this.options.type,
            this.options.marker
        );
        const textDecorator = this.getDecorator(
            'TEXT',
            {
                text: this.options.name,
                x: this.x,
                y: this.y
            }
        );
        this.shape.add(textDecorator);
        this.shape.drag();
    }

    getNativeShape() {
        return this.shape;
    }
}
