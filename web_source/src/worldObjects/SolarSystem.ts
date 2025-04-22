const SUN_RADIUS = 695700; //km
const SUN_MASS = 1.9889 * Math.pow(10, 30); //kg

const MERCURY_RADIUS = 2439.7; //km
const MERCURY_MASS = 3.285 * Math.pow(10, 23); //kg
const MERCURY_DISTANCE_TO_SUN = 57.91 * Math.pow(10, 6); //km

const VENUS_RADIUS = 6051.8; //km
const VENUS_MASS = 4.867 * Math.pow(10, 24); //kg
const VENUS_DISTANCE_TO_SUN = 108.2 * Math.pow(10, 6); //km

const EARTH_RADIUS = 6371; //km
const EARTH_MASS = 5.972 * Math.pow(10, 24); //kg
const EARTH_DISTANCE_TO_SUN = 149.6 * Math.pow(10, 6); //km

const MARS_RADIUS = 3389.5; //km
const MARS_MASS = 6.4171 * Math.pow(10, 23); //kg
const MARS_DISTANCE_TO_SUN = 227.9 * Math.pow(10, 6); //km

const JUPITER_RADIUS = 69911; //km
const JUPITER_MASS = 1.898 * Math.pow(10, 27); //kg
const JUPITER_DISTANCE_TO_SUN = 778.5 * Math.pow(10, 6); //km

const SATURN_RADIUS = 58232; //km
const SATURN_MASS = 5.683 * Math.pow(10, 26); //kg
const SATURN_DISTANCE_TO_SUN = 1427 * Math.pow(10, 6); //km

const URANUS_RADIUS = 25362; //km
const URANUS_MASS = 8.681 * Math.pow(10, 25); //kg
const URANUS_DISTANCE_TO_SUN = 2871 * Math.pow(10, 6); //km

const NEPTUNE_RADIUS = 24622; //km
const NEPTUNE_MASS = 1.024 * Math.pow(10, 26); //kg
const NEPTUNE_DISTANCE_TO_SUN = 4497 * Math.pow(10, 6); //km

const PLUTO_RADIUS = 1188.3; //km
const PLUTO_MASS = 1.303 * Math.pow(10, 22); //kg
const PLUTO_DISTANCE_TO_SUN = 5906 * Math.pow(10, 6); //km

import { Colors } from "../canvas/Colors";
import { iPen } from "../iPen";
import { iUIZoomer } from "../iUIZoomer";
import { Planet } from "./Planet";
import { Star } from "./Star";
import { iVisibleWorldObject } from "./iVisibleWorldObject";

export class SolarSystem implements iVisibleWorldObject {

    private stars: iVisibleWorldObject[] = [];
    private planets: iVisibleWorldObject[] = [];
    private moons: iVisibleWorldObject[] = [];

    constructor(ioZoomer: iUIZoomer) {
        let sun = new Star(
            0,
            0,
            SUN_RADIUS,
            SUN_MASS,
            ioZoomer);
        this.stars.push(sun);

        let mercury = new Planet(
            sun.x + MERCURY_DISTANCE_TO_SUN,
            sun.y,
            MERCURY_RADIUS,
            MERCURY_MASS,
            Colors.MERCURY,
            ioZoomer,
            "Mercury");
        this.planets.push(mercury);

        let venus = new Planet(
            sun.x + VENUS_DISTANCE_TO_SUN,
            sun.y,
            VENUS_RADIUS,
            VENUS_MASS,
            Colors.VENUS,
            ioZoomer,
            "Venus");
        this.planets.push(venus);

        let earth = new Planet(
            sun.x + EARTH_DISTANCE_TO_SUN,
            sun.y,
            EARTH_RADIUS,
            EARTH_MASS,
            Colors.EARTH,
            ioZoomer,
            "Earth");
        this.planets.push(earth);

        let mars = new Planet(
            sun.x + MARS_DISTANCE_TO_SUN,
            sun.y,
            MARS_RADIUS,
            MARS_MASS,
            Colors.MARS,
            ioZoomer,
            "Mars");
        this.planets.push(mars);

        let jupiter = new Planet(
            sun.x + JUPITER_DISTANCE_TO_SUN,
            sun.y,
            JUPITER_RADIUS,
            JUPITER_MASS,
            Colors.JUPITER,
            ioZoomer,
            "Jupiter");
        this.planets.push(jupiter);

        let saturn = new Planet(
            sun.x + SATURN_DISTANCE_TO_SUN,
            sun.y,
            SATURN_RADIUS,
            SATURN_MASS,
            Colors.SATURN,
            ioZoomer,
            "Saturn");
        this.planets.push(saturn);

        let uranus = new Planet(
            sun.x + URANUS_DISTANCE_TO_SUN,
            sun.y,
            URANUS_RADIUS,
            URANUS_MASS,
            Colors.URANUS,
            ioZoomer,
            "Uranus");
        this.planets.push(uranus);

        let neptune = new Planet(
            sun.x + NEPTUNE_DISTANCE_TO_SUN,
            sun.y,
            NEPTUNE_RADIUS,
            NEPTUNE_MASS,
            Colors.NEPTUNE,
            ioZoomer,
            "Neptune");
        this.planets.push(neptune);

        let pluto = new Planet(
            sun.x + PLUTO_DISTANCE_TO_SUN,
            sun.y,
            PLUTO_RADIUS,
            PLUTO_MASS,
            Colors.PLUTO,
            ioZoomer,
            "Pluto");
        this.planets.push(pluto);

        mercury.SetObjectAttractedBy(sun);
        venus.SetObjectAttractedBy(sun);
        earth.SetObjectAttractedBy(sun);
        mars.SetObjectAttractedBy(sun);
        jupiter.SetObjectAttractedBy(sun);
        saturn.SetObjectAttractedBy(sun);
        uranus.SetObjectAttractedBy(sun);
        neptune.SetObjectAttractedBy(sun);
        pluto.SetObjectAttractedBy(sun);
    }

    reset(): void {
        this.stars.forEach(star => star.reset());
        this.planets.forEach(planet => planet.reset());
        this.moons.forEach(moon => moon.reset());
    }

    public draw(pen: iPen, timeElapsedInSec: number): void {
        this.stars.forEach(star => star.draw(pen, timeElapsedInSec));
        this.planets.forEach(planet => planet.draw(pen, timeElapsedInSec));
        this.moons.forEach(moon => moon.draw(pen, timeElapsedInSec));
    }
}