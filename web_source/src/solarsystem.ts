import { CanvasDrawer } from "./canvasDrawer.ts";
import { Planet } from "./worldObjects/planet.ts";
import { Star } from "./worldObjects/star.ts";
import { VisibleWorldObjectInterface } from './worldObjects/VisibleWorldObjectInterface.ts';

export class SolarSystem {
    private static instance: SolarSystem | null = null;
    public static getInstance(drawer: CanvasDrawer): SolarSystem {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new SolarSystem(drawer);
            return this.instance;
        }
    }

    private drawer: CanvasDrawer;
    private visibleWorldObjects: VisibleWorldObjectInterface[] = [];
    private doAnimate: boolean = false;

    constructor(drawer: CanvasDrawer) {
        this.drawer = drawer;
    }

    initializeSolarSystem(): void {

        const kmToPixel = 0.1; 

        const SUN_RADIUS = 695700; //km
        const SUN_MASS = 1.9889 * Math.pow(10, 30); //kg


        let sun = new Star(200, 200, 50, 1000);
        this.visibleWorldObjects.push(sun);

        let mercury = new Planet(200 + sunRadius + 10, 200, 5, 'gray');

        planet = new Planet(200, 200, 50, 'yellow'); // Sun
        this.visibleWorldObjects.push(planet);
        planet = new Planet(300, 200, 20, 'blue'); // Earth
        this.visibleWorldObjects.push(planet);
        planet = new Planet(350, 200, 10, 'red'); // Mars
        this.visibleWorldObjects.push(planet);
        planet = new Planet(400, 200, 15, 'green'); // Jupiter
        this.visibleWorldObjects.push(planet);
        planet = new Planet(450, 200, 12, 'purple'); // Saturn
        this.visibleWorldObjects.push(planet);
        planet = new Planet(500, 200, 8, 'orange'); // Uranus
        this.visibleWorldObjects.push(planet);
        planet = new Planet(550, 200, 6, 'pink'); // Neptune
        this.visibleWorldObjects.push(planet);
        planet = new Planet(600, 200, 4, 'gray'); // Pluto
        this.visibleWorldObjects.push(planet);
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

        this.draw(timestamp);
        window.requestAnimationFrame((newTimestamp) => this.animate(newTimestamp));
    }

    draw(timestamp: number): void {

        this.drawer.clearCanvas();
        for (let i = 0; i < this.visibleWorldObjects.length; i++) {
            this.visibleWorldObjects[i].draw(this.drawer);
        }
    }
}