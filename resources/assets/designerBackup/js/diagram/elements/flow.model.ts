export interface IFlow {
    config(options: any);
    render(): any;
    getNativeShape(): any
    redraw(posx1, posy1, posx2, posy2): any
    renderManhathan(x1, y1, x2, y2): any
}
