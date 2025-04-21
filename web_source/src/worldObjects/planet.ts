import { CanvasDrawer } from "../canvasDrawer";
import { VisibleWorldObjectInterface } from "./VisibleWorldObjectInterface";

export class Planet implements VisibleWorldObjectInterface {
    private x: number;
    private y: number;
    private radius: number;
    private color: string;
    private velocityX: number;
    private velocityY: number;

    constructor(x: number, y:number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocityX = Math.random() * 4 - 2;
        this.velocityY = Math.random() * 4 - 2;
    }

    public draw(canvasDrawer: CanvasDrawer): void {
        canvasDrawer.drawCircle(this.x, this.y, this.radius, this.color);
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}