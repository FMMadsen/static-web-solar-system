import { iPen } from "./iPen.ts";
import { iUIZoomer } from "./iUIZoomer.ts";
import { SolarSystem } from "./worldObjects/SolarSystem.ts";
import { iVisibleWorldObject } from "./worldObjects/iVisibleWorldObject.ts";

export class World {
    private static instance: World | null = null;
    public static getInstance(pen: iPen, uiZoomer: iUIZoomer): World {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new World(pen, uiZoomer);
            return this.instance;
        }
    }

    private pen: iPen;
    private uiZoomer: iUIZoomer;
    private visibleWorldObjects: iVisibleWorldObject[] = [];
    private doAnimate: boolean = false;
    private animationSpeedFactor: number = 10000000; //animating as 100 times faster than real time

    private lastAnimationTimestamp: number = 0;
    private timeElapsedInSec: number = 0;

    constructor(pen: iPen, uiZoomer: iUIZoomer) {
        this.pen = pen;
        this.uiZoomer = uiZoomer;
    }

    initialize(): void {
        let solarSystem = new SolarSystem(this.uiZoomer);
        this.visibleWorldObjects.push(solarSystem);
    }

    addWorldObject(worldObject: iVisibleWorldObject): void {
        this.visibleWorldObjects.push(worldObject);
    }

    startAnimation(): void {
        console.log("Starting animation...");
        window.requestAnimationFrame((newTimestamp) => this.animate(newTimestamp));
        this.doAnimate = true;
    }
    stopAnimation(): void {
        this.doAnimate = false;
    }

    animate(timestamp: number): void {
        if (!this.doAnimate)
            return;

        this.timeElapsedInSec = (timestamp - this.lastAnimationTimestamp) / 1000; // Convert to seconds
        this.timeElapsedInSec = this.timeElapsedInSec * this.animationSpeedFactor; // Adjust for animation speed
        console.log(`Time elapsed: ${this.timeElapsedInSec} seconds`);
        this.lastAnimationTimestamp = timestamp;
        this.draw();
        window.requestAnimationFrame((newTimestamp) => this.animate(newTimestamp));
    }

    draw(): void {

        this.pen.clearVisibleArea();
        for (let i = 0; i < this.visibleWorldObjects.length; i++) {
            this.visibleWorldObjects[i].draw(this.pen, this.timeElapsedInSec);
        }
    }

    reset(): void {
        for (let i = 0; i < this.visibleWorldObjects.length; i++) {
            this.visibleWorldObjects[i].reset();
        }
        this.draw();
    }
}