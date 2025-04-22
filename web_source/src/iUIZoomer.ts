export interface iUIZoomer {
    convertWorldDistanceToPixels(distance: number): number;
    convertWorldPositionXToPixel(position: number): number;
    convertWorldPositionYToPixel(position: number): number;
    convertWorldSizeToPixels(size: number): number;
    convertWorldSizeMegaObjectsToPixels(size: number): number;
}