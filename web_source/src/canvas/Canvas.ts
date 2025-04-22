import { ControlPanel } from "../htmlObjects/Controlpanel";

export class Canvas {
  private htmlElement: HTMLCanvasElement;
  private renderingContext: CanvasRenderingContext2D;
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
    this.renderingContext = context;
    this.initializeCanvas();
    this.elementWidth = this.htmlElement.width;
    this.elementHeight = this.htmlElement.height;
  }

  initializeCanvas(): void {
    this.clearCanvas();
    this.resizeCanvas();
    window.addEventListener('resize', () => { this.resizeCanvas(); });
  }

  resizeCanvas(): void {
    this.setCanvasSize(window.innerWidth, window.innerHeight - this.controlPanel.height);
    console.log('Canvas resized:' + this.elementWidth + 'x' + this.elementHeight);
  }

  setCanvasSize(width: number, height: number): void {
    this.htmlElement.width = width;
    this.htmlElement.height = height;
    this.elementWidth = width;
    this.elementHeight = height;
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.elementWidth, this.elementHeight);
  }

  get height(): number {
    return this.elementHeight;
  }

  get width(): number {
    return this.elementWidth;
  }

  get context(): CanvasRenderingContext2D {
    return this.renderingContext;
  }
}