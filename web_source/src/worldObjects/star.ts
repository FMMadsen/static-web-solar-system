import { PenInterface } from "../PenInterface";

export class Star implements VisibleWorldObjectInterface {
    private initialX: number;
    private initialY: number;

    private positionX: number;
    private positionY: number;
    readonly radius: number = 0;
    readonly mass: number = 0;
    private color: string;

    constructor(x: number, y: number, radius: number, mass: number) {
        this.positionX = x;
        this.positionY = y;
        this.mass = mass;
        this.radius = radius;
        this.color = 'yellow';
        
        this.initialX = this.positionX;
        this.initialY = this.positionY;
    }

    reset(): void {
        this.positionX = this.initialX;
        this.positionY = this.initialY;
    }

    public draw(pen: PenInterface, animationTimestamp: number): void {
        pen.drawCircle(this.x, this.y, this.radius, this.color);
    }

    get x(): number {
        return this.positionX;
    }

    get y(): number {
        return this.positionY;
    }
}