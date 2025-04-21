import { CanvasDrawer } from "../canvasDrawer";

export interface VisibleWorldObjectInterface {
    draw(canvasDrawer: CanvasDrawer): void; 
}