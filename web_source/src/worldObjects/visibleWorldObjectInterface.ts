import { PenInterface } from "../PenInterface";

export interface VisibleWorldObjectInterface {
    draw(pen: PenInterface, animationTimestamp: number): void;
    reset(): void;
}