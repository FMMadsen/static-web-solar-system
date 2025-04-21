import { ControlPanel } from "./controlpanel";

export class Canvas {
  private htmlElement: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private htmlElementId: string = 'canvasapp';
  private elementHeight: number;
  private elementWidth: number;
  private controlPanel: ControlPanel;

  private static instance: Canvas | null = null;

  public static getInstance(controlPanel: ControlPanel): Canvas {
    if (this.instance) {
      return this.instance;
    }
    else {
      this.instance = new Canvas(controlPanel);
      return this.instance;
    }
  }

  constructor(controlPanel: ControlPanel) {

    this.controlPanel = controlPanel;

    let htmlElement: HTMLCanvasElement;
    htmlElement = document.querySelector<HTMLCanvasElement>('#' + this.htmlElementId)!;
    if (!htmlElement) {
      throw new Error('Canvas element not found');
    }
    this.htmlElement = htmlElement;

    const context = this.htmlElement.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D context for the canvas');
    }
    this.context = context;
    this.initializeCanvas();
    this.elementHeight = this.htmlElement.width;
    this.elementWidth = this.htmlElement.height;
  }

  initializeCanvas(): void {
    this.clearCanvas();
    this.resizeCanvas();
    window.addEventListener('resize', () => { this.resizeCanvas(); });
  }

  resizeCanvas(): void {
    this.setCanvasSize(window.innerWidth, window.innerHeight - this.controlPanel.height);
    this.elementHeight = this.htmlElement.width;
    this.elementWidth = this.htmlElement.height;
    console.log('Canvas resized:' + this.elementWidth + 'x' + this.elementHeight);
  }

  setCanvasSize(width: number, height: number): void {
    this.htmlElement.width = width;
    this.htmlElement.height = height;
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.elementWidth, this.elementHeight);
  }

  get Height(): number {
    return this.elementHeight;
  }

  get Width(): number {
    return this.elementWidth;
  }

  get Context(): CanvasRenderingContext2D {
    return this.context;
  }
}