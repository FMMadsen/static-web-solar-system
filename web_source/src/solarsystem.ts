import { CanvasManager } from './canvas.ts'

export function initializeSolarSystem(canvasManager: CanvasManager): void {
    canvasManager.drawCircle(200, 200, 50, 'yellow'); // Sun
    canvasManager.drawCircle(300, 200, 20, 'blue'); // Earth
    canvasManager.drawCircle(350, 200, 10, 'red'); // Mars
    canvasManager.drawCircle(400, 200, 15, 'green'); // Jupiter
    canvasManager.drawCircle(450, 200, 12, 'purple'); // Saturn
    canvasManager.drawCircle(500, 200, 8, 'orange'); // Uranus
    canvasManager.drawCircle(550, 200, 6, 'pink'); // Neptune
}