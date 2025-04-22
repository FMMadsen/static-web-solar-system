import { iPen } from "../iPen";
import { iUIZoomer } from "../iUIZoomer";
import { AstroObject } from "./AstroObject";
import { iVisibleWorldObject } from "./iVisibleWorldObject";

export class Planet extends AstroObject implements iVisibleWorldObject {
    private name: string;
    private uiPositionX: number;
    private uiPositionY: number;
    private uiRadius: number;
    private uiColor: string;

    private uiZoom: iUIZoomer;

    constructor(
        x: number,
        y: number,
        radius: number,
        mass: number,
        color: string,
        uiZoomer: iUIZoomer,
        name: string = '',) {

        super(x, y, mass, radius, color);
        this.name = name;

        this.uiZoom = uiZoomer;

        this.uiPositionX = this.uiZoom.convertWorldPositionXToPixel(this.astroPositionX);
        this.uiPositionY = this.uiZoom.convertWorldPositionYToPixel(this.astroPositionY);
        this.uiRadius = this.uiZoom.convertWorldSizeToPixels(this.astroRadius);
        this.uiColor = this.astroColor;
    }

    reset(): void {
    }

    draw(pen: iPen, timeElapsedInSec: number): void {
        this.move(timeElapsedInSec);
        console.log(`Drawing ${this.name} at (${this.uiPositionX}, ${this.uiPositionY}) with velocity ${this.velocity}`);
        pen.drawCircle(this.uiPositionX, this.uiPositionY, this.uiRadius, this.uiColor);
    }

    SetObjectAttractedBy(astroObject: AstroObject): void {
        this.astroObjectsAttractedBy.push(astroObject);
    }
}