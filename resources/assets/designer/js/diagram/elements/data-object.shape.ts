import { IShape } from './shape.model';
import { SVGLoader } from '../svg-loader';

/**
 * StartEventShape
 */
export class DataObjectShape implements IShape {
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
    inputConnectors: Map<string, any>;
    outputConnectors: Map<string, any>;

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
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
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
        const baseConfig = {path: 'm250 174l0 2c0 1 0 1 0 1l0 649 500 0 0-486c0 0 0 0 0 0l0-1 0-1c-1 0-1 0-1 0l-166-162 0-2-2 0-236 0-92 0z m5 5l323 0 0 163 167 0 0 479-490 0z m328 4l158 154-158 0z', options: {x: x, y: y, scale: 's0.07', attr: {
            stroke: '#000',
            strokeWidth: 0
        }}};

        const base = this.svgLoader.loadElement(
            baseConfig.path,
            baseConfig.options
        );
        const offsetX = Math.round(x - base.getBBox().x);
        const offsetY = Math.round(y - base.getBBox().y);
        base.transform(`s0.07, ${x + offsetX + 4}, ${y + offsetY + 2}`);

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
                const tx = (+this.options.bou_width - decorator.getBBox().width) / 2 + 2;
                const ty = +this.options.bou_height + 20;
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
                text: this.options.dat_name,
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
    /**
     * Refresh all shapes connectors
     * @param posx
     * @param posy
     */
    refreshAllConnections(nativeShape){
        let conn, dX, dY;
        const shapeBox = nativeShape.getBBox();


        this.outputConnectors.forEach(function(value, key) {
            conn =  value;

            if (conn.shape.outputDirection === 'RIGHT'){
                dX= shapeBox.width;
                dY= shapeBox.height/2;
            }

            let linesArray = conn.shape.router;
            let n = linesArray.length;

            conn.shape.options.method = 'manhathan';
            conn.shape.config(conn.shape.options);

            conn.shape.redraw( shapeBox.x + dX ,  shapeBox.y + dY, linesArray[n-1].x, linesArray[n-1].y);
        });

        this.inputConnectors.forEach(function(value, key) {
            conn =  value;
            if (conn.shape.inputDirection === 'LEFT'){
                dX= 0;
                dY= shapeBox.height/2;
            }

            let linesArray = conn.shape.router;
            let n = linesArray.length;

            conn.shape.options.method = 'manhathan';
            conn.shape.config(conn.shape.options);

            conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX ,  shapeBox.y + dY);

        })
    }
    registerInputConn (id, conn) {
        this.inputConnectors.set(id, conn);
        this.setDirections(conn);
    }
    setDirections(conn) {
        conn.getShape().inputDirection = 'LEFT';
        conn.getShape().outputDirection = 'RIGHT';
    }
    registerOutputConn (id, conn) {
        this.outputConnectors.set(id, conn);
        this.setDirections(conn);
    }
}
