import { Canvas } from './canvas.ts'
import { SolarSystem } from './solarsystem.ts'
import { ControlPanel } from './controlpanel.ts';
import { CanvasDrawer } from './canvasDrawer.ts';

function onDocumentLoaded() {
  let controlPanel = ControlPanel.getInstance();
  let canvas = Canvas.getInstance(controlPanel);
  let canvasDrawer = CanvasDrawer.getInstance(canvas);
  let solarsystem = SolarSystem.getInstance(canvasDrawer);
  solarsystem.initializeSolarSystem();

  let buttonElement1 = document.querySelector<HTMLButtonElement>('#buttonInitializeCanvas')!;
  buttonElement1.addEventListener('click', () => canvas.initializeCanvas());

  let buttonElement2 = document.querySelector<HTMLButtonElement>('#buttonStartAnimation')!;
  buttonElement2.addEventListener('click', () => solarsystem.startAnimation());

  let buttonElement3 = document.querySelector<HTMLButtonElement>('#buttonStopAnimation')!;
  buttonElement3.addEventListener('click', () => solarsystem.stopAnimation());
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);