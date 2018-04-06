import { ArrowConnectorMarker } from '../arrow-connector-marker';
import { RoundConnectorMarker } from '../round-connector-marker';
import { LineShape } from '../line.shape';
import { SVGLoader } from '../../svg-loader';
import { ManhathanRouter } from './manhathan-route';

/**
 * Flow
 */
export class ConnectorShape extends ManhathanRouter {
    options: any;
    canvas: any;
    shape: any;
    svgLoader: any;
    width: number;
    height: number;
    router: any;
    method: string;
    line: any;
    inputDirection: any;
    outputDirection: any;

    constructor(canvas, svgLoader: SVGLoader) {
        super();
        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.shape = canvas.g();
        this.method = 'manhathan';
        this.line = new LineShape(this.canvas);
        this.inputDirection= 'LEFT';
        this.outputDirection  = 'RIGHT';
    }

    config(options: any) {
        this.options = options;
        if (this.options.label && this.options.label.bounds) {
            this.width = this.options.label.bounds.width || 0;
            this.height = this.options.label.bounds.height || 0;
        } else {
            this.width = 0;
            this.height = 0;
        }
        this.method = options.method;
    }
    redraw (posx1, posy1, posx2, posy2) : void {
        this.options.linePoints = [];
        this.router  = this.createRoute(posx1, posy1, posx2, posy2);
        // console.log(this.router);
        for (const data of this.router) {
            this.options.linePoints.push(data.x);
            this.options.linePoints.push(data.y);
        }
        this.line.config(this.options);
        if (this.options.arrowType !== 'none') {
            this.line.addMarkerEnd(
                new ArrowConnectorMarker(this.canvas)
                    .config({
                        type: this.options.arrowType
                    }).getMarker()
            );
        }

        if (this.options.originConnector === 'round') {
            this.line.addMarkerStart(
                new RoundConnectorMarker(this.canvas)
                    .config(this.options)
                    .getMarker()
            );
        }
        if (this.options.label.bounds) {
            const textDecorator = this.getDecorator(
                'TEXT',
                {
                    text: this.options.name,
                    x: this.options.label.bounds.x,
                    y: this.options.label.bounds.y
                }
            );
        }
        this.line.redraw();
        this.shape.add(
            this.line.getShape()
        );
    }

    /**
     * ,ahathan renderer
     * @param posx1
     * @param posy1
     * @param posx2
     * @param posy2
     */
    renderManhathan (posx1, posy1, posx2, posy2) : void {
        this.options.linePoints = [];
        this.router  = this.createRoute(posx1, posy1, posx2, posy2);

        for (const data of this.router) {
            this.options.linePoints.push(data.x);
            this.options.linePoints.push(data.y);
        }
        this.line.config(this.options);
        if (this.options.arrowType !== 'none') {
            this.line.addMarkerEnd(
                new ArrowConnectorMarker(this.canvas)
                    .config({
                        type: this.options.arrowType
                    }).getMarker()
            );
        }

        if (this.options.originConnector === 'round') {
            this.line.addMarkerStart(
                new RoundConnectorMarker(this.canvas)
                    .config(this.options)
                    .getMarker()
            );
        }

        const textDecorator = this.getDecorator(
            'TEXT',
            {
                text: this.options.name,
                x: this.options.label.bounds.x,
                y: this.options.label.bounds.y
            }
        );

        this.shape.add(
            this.line.getShape(),
            textDecorator
        );
    }


    render () : void {
        this.options.linePoints = [];
        this.router  = this.options.waypoint;

        for (const data of this.router) {
            this.options.linePoints.push(data.x);
            this.options.linePoints.push(data.y);
        }
        this.line.config(this.options);
        if (this.options.arrowType !== 'none') {
            this.line.addMarkerEnd(
                new ArrowConnectorMarker(this.canvas)
                    .config({
                        type: this.options.arrowType
                    }).getMarker()
            );
        }

        if (this.options.originConnector === 'round') {
            this.line.addMarkerStart(
                new RoundConnectorMarker(this.canvas)
                    .config(this.options)
                    .getMarker()
            );
        }

        if (this.options.label && this.options.label.bounds) {
            const textDecorator = this.getDecorator(
                'TEXT',
                {
                    text: this.options.name,
                    x: this.options.label.bounds.x,
                    y: this.options.label.bounds.y
                }
            );
            this.shape.add(
                this.line.getShape(),
                textDecorator
            );
        } else {
            this.shape.add(
                this.line.getShape(),
            );
        }
    }

    getDecorator(type, options) {
        let decorator: any;
        switch (type) {
            case 'TEXT':
                decorator = this.canvas.text(+options.x, +options.y, options.text)
                    .attr({'font-size': '13px', 'font-family': 'Arial, Helvetica, sans-serif'});
                const tx = (+this.options.flo_x1 - +this.options.flo_x2) / - 2 - (decorator.getBBox().width / 2);
                const ty = (+this.options.flo_y1 - +this.options.flo_y2) / - 2 + (decorator.getBBox().height);
                decorator.transform(`t ${tx}, ${ty}`);
                break;
            default:
                decorator = this.canvas.group();
                break;
        }
        return decorator;
    }

    getNativeShape() {
        return this.shape;
    }
    setMethod(method) {
        return this.method = method;
    }
}
