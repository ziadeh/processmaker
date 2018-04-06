export class Point {
    constructor (xCoordinate, yCoordinate) {
        this.x = xCoordinate;
        this.y = yCoordinate;
        this.type = 'Point';
    }
    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
}
