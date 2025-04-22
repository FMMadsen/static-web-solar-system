export class ControlPanel {
    private htmlElement: HTMLDivElement;
    private htmlElementId: string = 'controlpanel';
    private elementHeight: number;

    private static instance: ControlPanel | null = null;

    public static getInstance(): ControlPanel {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ControlPanel();
            return this.instance;
        }
    }

    constructor() {
        let htmlElement: HTMLDivElement;
        htmlElement = document.querySelector<HTMLDivElement>('#' + this.htmlElementId)!;
        if (!htmlElement) {
            throw new Error('Control panel div element not found');
        }
        this.htmlElement = htmlElement;
        this.elementHeight = this.getElementHeight();
    }

    private getElementHeight(): number {
        return this.htmlElement.offsetHeight;
    }

    get height(): number {
        return this.elementHeight;
    }
}