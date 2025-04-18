import { initializeCanvas } from './canvas.ts'
import { initializeSolarSystem } from './solarsystem.ts'

function onDocumentLoaded() {

  let canvasElement = document.querySelector<HTMLCanvasElement>('#canvasapp')!;
  let buttonElement = document.querySelector<HTMLButtonElement>('#buttonInitializeCanvas')!;
  let canvasManager = initializeCanvas(canvasElement);
  buttonElement.addEventListener('click', () => canvasManager.initializeCanvas());
  initializeSolarSystem(canvasManager);
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);