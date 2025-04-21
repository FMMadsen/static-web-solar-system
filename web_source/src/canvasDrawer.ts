import { Canvas } from "./canvas";

export class CanvasDrawer {
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

    private canvas: Canvas;
    private ctxt: CanvasRenderingContext2D;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.ctxt = canvas.Context;
    }

    clearCanvas(): void {
        this.ctxt.clearRect(0, 0, this.canvas.Width, this.canvas.Height);
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

}