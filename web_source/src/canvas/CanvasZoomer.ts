import { iUIZoomer } from "../iUIZoomer";

/*
    * All planets visible:  0.00000022
    * Saturn visible:       0.0000009
    * Jupiter included:     0.0000017
    * Mars included:        0.000006
*/
const INITIAL_DISTANCE_SCALE_RATIO = 0.0000017;
const INITIAL_OBJECT_SIZE_SCALE_RATIO = 0.00050;     //small:0.00200  small:0.00030;
const INITIAL_MEGA_OBJECT_SIZE_SCALE_RATIO = 0.0001; //large:0.00030  small:0.00005;

const INITIL_UI_OFFSET_X = 500;
const INITIAL_UI_OFFSET_Y = 400;

export class CanvasZoomer implements iUIZoomer {
    private distanceScaleRatio: number;
    private objectSizeScaleRatio: number;
    private megaObjectSizeScaleRatio: number;
    private uiOffsetX: number;
    private uiOffsetY: number;

    constructor() {
        this.distanceScaleRatio = INITIAL_DISTANCE_SCALE_RATIO;
        this.objectSizeScaleRatio = INITIAL_OBJECT_SIZE_SCALE_RATIO;
        this.megaObjectSizeScaleRatio = INITIAL_MEGA_OBJECT_SIZE_SCALE_RATIO;
        this.uiOffsetX = INITIL_UI_OFFSET_X;
        this.uiOffsetY = INITIAL_UI_OFFSET_Y;
    }

    convertWorldDistanceToPixels(distance: number): number {
        return distance * this.distanceScaleRatio;
    }
    convertWorldPositionXToPixel(position: number): number {
        return (position * this.distanceScaleRatio) + this.uiOffsetX;
    }
    convertWorldPositionYToPixel(position: number): number {
        return (position * this.distanceScaleRatio) + this.uiOffsetY;
    }
    convertWorldSizeToPixels(size: number): number {
        return size * this.objectSizeScaleRatio;
    }
    convertWorldSizeMegaObjectsToPixels(size: number): number {
        return size * this.megaObjectSizeScaleRatio;
    }
}