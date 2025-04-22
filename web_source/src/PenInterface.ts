export interface PenInterface {
    clearVisibleArea(): void;
    drawRectangle(x: number, y: number, width: number, height: number, color: string): void;
    drawCircle(x: number, y: number, radius: number, color: string): void;
    drawText(text: string, x: number, y: number, font: string, color: string): void;
    get visibleAreaWidth(): number;
    get visibleAreaHeight(): number;
}