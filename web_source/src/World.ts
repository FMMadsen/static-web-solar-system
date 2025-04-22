import { PenInterface } from "./PenInterface.ts";
import { Planet } from "./worldObjects/Planet.ts";
import { SolarSystem } from "./worldObjects/SolarSystem.ts";
import { VisibleWorldObjectInterface } from "./worldObjects/VisibleWorldObjectInterface.ts";

export class World {
    private static instance: World | null = null;
    public static getInstance(pen: PenInterface): World {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new World(pen);
            return this.instance;
        }
    }

    private pen: PenInterface;
    private visibleWorldObjects: VisibleWorldObjectInterface[] = [];
    private doAnimate: boolean = false;

    private animationTimestamp: number = 0;

    constructor(pen: PenInterface) {
        this.pen = pen;
    }

    initialize(): void {

        let solarSystem = new SolarSystem(this.pen.visibleAreaWidth, this.pen.visibleAreaHeight);
        this.visibleWorldObjects.push(solarSystem);
        // const scaleRatioKm2Px = 0.1;

        let planet;
        planet = new Planet(200, 200, 50, 0, 'yellow'); // Sun
        this.visibleWorldObjects.push(planet);
        planet = new Planet(300, 200, 20, 0, 'blue'); // Earth
        this.visibleWorldObjects.push(planet);
        planet = new Planet(350, 200, 10, 0, 'red'); // Mars
        this.visibleWorldObjects.push(planet);
        planet = new Planet(400, 200, 15, 0, 'green'); // Jupiter
        this.visibleWorldObjects.push(planet);
        planet = new Planet(450, 200, 12, 0, 'purple'); // Saturn
        this.visibleWorldObjects.push(planet);
        planet = new Planet(500, 200, 8, 0, 'orange'); // Uranus
        this.visibleWorldObjects.push(planet);
        planet = new Planet(550, 200, 6, 0, 'pink'); // Neptune
        this.visibleWorldObjects.push(planet);
        planet = new Planet(600, 200, 4, 0, 'gray'); // Pluto
        this.visibleWorldObjects.push(planet);
    }

    addWorldObject(worldObject: VisibleWorldObjectInterface): void {
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

        this.animationTimestamp = timestamp;
        this.draw();
        window.requestAnimationFrame((newTimestamp) => this.animate(newTimestamp));
    }

    draw(): void {

        this.pen.clearVisibleArea();
        for (let i = 0; i < this.visibleWorldObjects.length; i++) {
            this.visibleWorldObjects[i].draw(this.pen, this.animationTimestamp);
        }
    }

    reset(): void {
        for (let i = 0; i < this.visibleWorldObjects.length; i++) {
            this.visibleWorldObjects[i].reset();
        }
        this.draw();
    }
}