import { Colors } from "../canvas/Colors";
import { iPen } from "../iPen";
import { iUIZoomer } from "../iUIZoomer";
import { AstroObject } from "./AstroObject";
import { iVisibleWorldObject } from "./iVisibleWorldObject";

export class Star extends AstroObject implements iVisibleWorldObject {
    private uiPositionX: number;
    private uiPositionY: number;
    private uiRadius: number;
    private uiColor: string;

    private uiZoom: iUIZoomer;

    constructor(x: number, y: number, radius: number, mass: number, uiZoomer: iUIZoomer) {
        super(x, y, mass, radius, Colors.SUN);

        this.uiZoom = uiZoomer;

        this.uiPositionX = this.uiZoom.convertWorldPositionXToPixel(this.astroPositionX);
        this.uiPositionY = this.uiZoom.convertWorldPositionYToPixel(this.astroPositionY);
        this.uiRadius = this.uiZoom.convertWorldSizeMegaObjectsToPixels(this.astroRadius);
        this.uiColor = this.astroColor;
    }

    reset(): void {
    }

    public draw(pen: iPen, _animationTimestamp: number): void {
        pen.drawCircle(this.uiPositionX, this.uiPositionY, this.uiRadius, this.uiColor);
    }

    get x(): number {
        return this.astroPositionX;
    }

    get y(): number {
        return this.astroPositionY
    }
}