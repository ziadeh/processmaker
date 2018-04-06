/**
 * Task Shape class
 */
export class GroupShape {
    constructor(canvas, svgLoader) {
        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.attr = {
            fill: 'none',
            stroke: '#000',
            strokeWidth: 2,
            strokeDasharray: '3px,7px',
            strokeLinecap: 'square'
        };
        this.shape = this.canvas.group();
        this.shape.drag();
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
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

    render(){
        this.shape.add(this.canvas.rect(
            this.x,
            this.y,
            this.scaleX,
            this.scaleY,
            this.rounded
        ).attr(this.attr));

        this.addDecorators();
    }

    addDecorators(){
        this.addTextDecorator();
    }

    addTextDecorator() {
        this.shape.add(this.canvas.multitext(
            this.x + (this.scaleX / 2),
            this.y + 20,
            this.options.art_name,
            this.scaleY,
            {'font-size': '13px', 'text-align': 'center'}
        ));
    }

    getNativeShape() {
        return this.shape;
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
