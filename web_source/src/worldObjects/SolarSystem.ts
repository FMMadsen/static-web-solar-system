const SUN_RADIUS = 695700; //km
const SUN_MASS = 1.9889 * Math.pow(10, 30); //kg

const MERCURY_RADIUS = 2439.7; //km
const MERCURY_MASS = 3.285 * Math.pow(10, 23); //kg
const MERCURY_COLOR = 'gray';
const MERCURY_DISTANCE_TO_SUN = 57.91 * Math.pow(10, 6); //km

const VENUS_RADIUS = 6051.8; //km
const VENUS_MASS = 4.867 * Math.pow(10, 24); //kg
const VENUS_COLOR = 'orange';
const VENUS_DISTANCE_TO_SUN = 108.2 * Math.pow(10, 6); //km

const EARTH_RADIUS = 6371; //km
const EARTH_MASS = 5.972 * Math.pow(10, 24); //kg
const EARTH_COLOR = 'blue';
const EARTH_DISTANCE_TO_SUN = 149.6 * Math.pow(10, 6); //km

const MARS_RADIUS = 3389.5; //km
const MARS_MASS = 6.4171 * Math.pow(10, 23); //kg
const MARS_COLOR = 'red';
const MARS_DISTANCE_TO_SUN = 227.9 * Math.pow(10, 6); //km

const JUPITER_RADIUS = 69911; //km
const JUPITER_MASS = 1.898 * Math.pow(10, 27); //kg
const JUPITER_COLOR = 'orange';
const JUPITER_DISTANCE_TO_SUN = 778.5 * Math.pow(10, 6); //km

const SATURN_RADIUS = 58232; //km
const SATURN_MASS = 5.683 * Math.pow(10, 26); //kg
const SATURN_COLOR = 'goldenrod';
const SATURN_DISTANCE_TO_SUN = 1427 * Math.pow(10, 6); //km

const URANUS_RADIUS = 25362; //km
const URANUS_MASS = 8.681 * Math.pow(10, 25); //kg
const URANUS_COLOR = 'lightblue';
const URANUS_DISTANCE_TO_SUN = 2871 * Math.pow(10, 6); //km

const NEPTUNE_RADIUS = 24622; //km
const NEPTUNE_MASS = 1.024 * Math.pow(10, 26); //kg
const NEPTUNE_COLOR = 'darkblue';
const NEPTUNE_DISTANCE_TO_SUN = 4497 * Math.pow(10, 6); //km

const PLUTO_RADIUS = 1188.3; //km
const PLUTO_MASS = 1.303 * Math.pow(10, 22); //kg
const PLUTO_COLOR = 'lightgray';
const PLUTO_DISTANCE_TO_SUN = 5906 * Math.pow(10, 6); //km

import { PenInterface } from "../PenInterface";
import { Planet } from "./Planet";
import { Star } from "./Star";

export class SolarSystem implements VisibleWorldObjectInterface {

    private stars: VisibleWorldObjectInterface[] = [];
    private planets: VisibleWorldObjectInterface[] = [];
    private moons: VisibleWorldObjectInterface[] = [];

    constructor(visibleAreaWidth: number, visibleAreaHeight: number) {
        let sun = new Star(
            visibleAreaWidth / 2, 
            visibleAreaHeight / 2, 
            SUN_RADIUS, 
            SUN_MASS);
        this.stars.push(sun);

        let mercury = new Planet(
            sun.x + MERCURY_DISTANCE_TO_SUN,
            sun.y,
            MERCURY_RADIUS,
            MERCURY_MASS,
            MERCURY_COLOR);
        this.planets.push(mercury);
    }

    // public Initialize(visibleAreaWidth: number, visibleAreaHeight: number): void {

    //     let sun = new Star(
    //         visibleAreaWidth / 2, 
    //         visibleAreaHeight / 2, 
    //         SUN_RADIUS, 
    //         SUN_MASS);
    //     this.stars.push(sun);

    //     let mercury = new Planet(
    //         sun.x + MERCURY_DISTANCE_TO_SUN,
    //         sun.y,
    //         MERCURY_RADIUS,
    //         MERCURY_MASS,
    //         MERCURY_COLOR);
    //     this.planets.push(mercury);
    // }
 
    reset(): void {
        this.stars.forEach(star => star.reset());
        this.planets.forEach(planet => planet.reset());
        this.moons.forEach(moon => moon.reset());
    }

    public draw(pen: PenInterface, animationTimestamp: number): void {
        this.stars.forEach(star => star.draw(pen, animationTimestamp));
        this.planets.forEach(planet => planet.draw(pen, animationTimestamp));
        this.moons.forEach(moon => moon.draw(pen, animationTimestamp));
    }
}