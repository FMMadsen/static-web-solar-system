import { CanvasDrawer } from "../canvasDrawer";
import { VisibleWorldObjectInterface } from "./VisibleWorldObjectInterface";

export class Star implements VisibleWorldObjectInterface {
    private x: number;
    private y: number;
    private color: string;
    readonly radius: number = 0;
    readonly mass: number = 0;

    constructor(x: number, y:number, radius: number, mass: number) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.radius = radius;
        this.color = 'yellow';
    }

    public draw(canvasDrawer: CanvasDrawer): void {
        canvasDrawer.drawCircle(this.x, this.y, this.radius, this.color);
    }
}