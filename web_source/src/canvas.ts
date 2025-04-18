export function initializeCanvas(element: HTMLCanvasElement): CanvasManager {
  let canvasManager = new CanvasManager(element);
  return canvasManager;
}

export class CanvasManager {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D context for the canvas');
    }
    this.context = context;
    this.initializeCanvas();
  }

  initializeCanvas(): void {
    this.clearCanvas();
    this.setCanvasSize(window.innerWidth, window.innerHeight - 70);
  }

  setCanvasSize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRectangle(x: number, y: number, width: number, height: number, color: string): void {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  }

  drawCircle(x: number, y: number, radius: number, color: string): void {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2);
    this.context.fill();
  }

  drawText(text: string, x: number, y: number, font: string = '16px Arial', color: string = 'black'): void {
    this.context.font = font;
    this.context.fillStyle = color;
    this.context.fillText(text, x, y);
  }
}