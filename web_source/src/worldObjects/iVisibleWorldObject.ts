import { iPen } from "../iPen";

export interface iVisibleWorldObject {
    draw(pen: iPen, timeElapsedInSec: number): void;
    reset(): void;
}