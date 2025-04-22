import { PenInterface } from "../PenInterface";

export class Planet implements VisibleWorldObjectInterface {
    private initialX: number;
    private initialY: number;
    private initialVelocityX: number;
    private initialVelocityY: number;

    private positionX: number;
    private positionY: number;
    readonly radius: number = 0;
    readonly mass: number = 0;
    private color: string;
    private velocityX: number;
    private velocityY: number;

    constructor(x: number, y: number, radius: number, mass: number, color: string) {
        this.positionX = x;
        this.positionY = y;
        this.mass = mass;
        this.radius = radius;
        this.color = color;
        this.velocityX = Math.random() * 4 - 2;
        this.velocityY = Math.random() * 4 - 2;

        this.initialX = this.positionX;
        this.initialY = this.positionY;
        this.initialVelocityX = this.velocityX;
        this.initialVelocityY = this.velocityY;
    }

    reset(): void {
        this.positionX = this.initialX;
        this.positionY = this.initialY;
        this.velocityX = this.initialVelocityX;
        this.velocityY = this.initialVelocityY;
    }

    public draw(pen: PenInterface, animationTimestamp: number): void {
        pen.drawCircle(this.positionX, this.positionY, this.radius, this.color);
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
    }
}