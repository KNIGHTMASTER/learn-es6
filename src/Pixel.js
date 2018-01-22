import Point from "./Point"

class Pixel extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color;
    }
    toString() {
        return super.toString() + 'in '+this.color;
    }
}

export default Pixel;