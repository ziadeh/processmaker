/**
 * Gateway
 */
export class GatewayShape{
    constructor(canvas, svgLoader) {
        this.canvas = canvas;
        this.scaleX = 40;
        this.scaleY = 40;
        this.svgLoader = svgLoader;
        this.attr = {
            fill: '#FFF',
            stroke: '#000',
            strokeWidth: 2
        };
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    config(options) {
        this.options = options;
        this.x = +options.x + 6;
        this.y = +options.y + 6;
        this.scaleX = options.width || this.scaleX;
        this.scaleY = options.height || this.scaleY;
        this.edgeLength = Math.sqrt(Math.pow(this.scaleX / 2, 2) + Math.pow(this.scaleY / 2, 2));
    }

    render(){
        const mx = +this.x + (this.edgeLength / 2),
            my = +this.y + (this.edgeLength / 2);

        const typeDecorator = this.getDecorator(
            this.options.type,
            {
                x: mx,
                y: my
            }
        );

        const textDecorator = this.getDecorator(
            'TEXT',
            {
                gat_name: this.options.gat_name,
                x: this.x,
                y: this.y
            }
        );

        const base = this.canvas
            .rect(this.x, this.y, this.edgeLength, this.edgeLength)
            .attr(this.attr)
            .transform('r45,' + mx + ',' + my);

        this.shape = this.canvas.group(base, textDecorator, typeDecorator);
        this.shape.drag();
    }

    getDecorator(type, options) {
        let decorator;
        switch (type) {
            case 'bpmn:InclusiveGateway':
                decorator = this.canvas.circle(
                    +options.x,
                    +options.y, 8
                ).attr(this.attr);
                break;
            case 'bpmn:EventBasedGateway':
                decorator = this.canvas.group(
                    this.canvas.circle(+options.x,  +options.y, 13).attr(this.attr),
                    this.canvas.circle(+options.x,  +options.y, 10).attr(this.attr),
                    this.canvas.path("m " + (options.x - 6) + "," + (options.y - 3) + " 6.1854545454545455,-4.123636363636363 6.1854545454545455,4.123636363636363 -2.0618181818181816,8.247272727272726 -8.247272727272726,0 z")
                ).attr(this.attr);
                break;
            case 'bpmn:ExclusiveGateway':
                decorator = this.canvas.group(
                    this.canvas.polyline(
                        [+options.x - 8, +options.y - 8, +options.x + 8, +options.y + 8]
                    ),
                    this.canvas.polyline(
                        [+options.x - 8, +options.y + 8, +options.x + 8, +options.y - 8]
                    )
                ).attr(this.attr);
                break;
            case 'bpmn:ParallelGateway':
                decorator = this.canvas.group(
                    this.canvas.polyline(
                        [+options.x - 12, +options.y, +options.x + 12, +options.y]
                    ),
                    this.canvas.polyline(
                        [+options.x, +options.y - 12, +options.x, +options.y + 12]
                    )
                ).attr(this.attr);
                break;
            case 'TEXT':
                decorator = this.canvas.text(options.x, options.y, options.gat_name);
                const tx = (this.scaleX - decorator.getBBox().width) / 2 - 6;
                const ty = +this.scaleY + 15;
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
