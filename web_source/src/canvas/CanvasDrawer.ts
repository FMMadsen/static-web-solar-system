import { iPen } from "../iPen";
import { Canvas } from "./Canvas";

export class CanvasDrawer implements iPen {
    private static instance: CanvasDrawer | null = null;
    public static getInstance(canvas: Canvas): CanvasDrawer {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new CanvasDrawer(canvas);
            return this.instance;
        }
    }

    private canvasObject: Canvas;
    private ctxt: CanvasRenderingContext2D;

    constructor(canvas: Canvas) {
        this.canvasObject = canvas;
        this.ctxt = canvas.context;
    }

    clearVisibleArea(): void {
        this.ctxt.clearRect(0, 0, this.canvasObject.width, this.canvasObject.height);
    }

    drawRectangle(x: number, y: number, width: number, height: number, color: string): void {
        this.ctxt.fillStyle = color;
        this.ctxt.fillRect(x, y, width, height);
    }

    drawCircle(x: number, y: number, radius: number, color: string): void {
        this.ctxt.fillStyle = color;
        this.ctxt.beginPath();
        this.ctxt.arc(x, y, radius, 0, Math.PI * 2);
        this.ctxt.fill();
    }

    drawText(text: string, x: number, y: number, font: string = '16px Arial', color: string = 'black'): void {
        this.ctxt.font = font;
        this.ctxt.fillStyle = color;
        this.ctxt.fillText(text, x, y);
    }

    get visibleAreaWidth(): number {
        return this.canvasObject.width;
    }
    get visibleAreaHeight(): number {
        return this.canvasObject.height;
    }
}