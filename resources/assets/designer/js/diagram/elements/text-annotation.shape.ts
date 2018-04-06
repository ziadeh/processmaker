import { IShape } from './shape.model';
import { SVGLoader } from '../svg-loader';

export class TextAnnotationShape implements IShape {
    private options: any;
    private shape: any;
    private canvas: any;
    private svgLoader: any;
    inputConnectors: Map<string, any>;
    outputConnectors: Map<string, any>;

    constructor(canvas: any, svgLoader: SVGLoader) {
        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.shape = canvas.g();
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    config(options: any) {
        this.options = options;
    }

    render(): any {
        const x = +this.options.bou_x,
            y = +this.options.bou_y,
            width = +this.options.bou_width,
            height = +this.options.bou_height;

        const boxX = x + 15,
            boxY = y,
            boxWidth = 30,
            boxHeight = height;

        const sampleText = this.canvas.multitext(
            x,
            y,
            this.options.art_name,
            width + 20,
            {'font-size': '13px', 'font-family': 'Arial, Helvetica, sans-serif'}
        );
        this.shape.add(sampleText);

        const box = this.canvas.polyline(
            boxX,
            boxY,
            boxX - boxWidth,
            boxY,
            boxX - boxWidth,
            boxY + boxHeight,
            boxX,
            boxY + boxHeight
        );

        box.attr({
            fill: 'none',
            stroke: '#000',
            strokeWidth: 1
        });
        const offset = y - sampleText.getBBox().y + (height - sampleText.getBBox().height) / 2;
        this.shape.add(box);
        box.transform('t0 ' + Math.floor(-(offset)).toString());
        this.shape.transform('t0 ' + Math.floor(+(offset)).toString());
        this.shape.drag();
    }

    getNativeShape(): any {
        return this.shape;
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
}
