import { Canvas } from './canvas/Canvas.ts'
import { World } from './World.ts'
import { ControlPanel } from './htmlObjects/Controlpanel.ts';
import { CanvasDrawer } from './canvas/CanvasDrawer.ts';
import { CanvasZoomer } from './canvas/CanvasZoomer.ts';

function onDocumentLoaded() {
  let controlPanel = ControlPanel.getInstance();
  let canvas = Canvas.getInstance(controlPanel);
  let canvasDrawer = CanvasDrawer.getInstance(canvas);
  let uiZoomer = new CanvasZoomer();
  let world = World.getInstance(canvasDrawer, uiZoomer);
  world.initialize();

  let buttonElement1 = document.querySelector<HTMLButtonElement>('#buttonReset')!;
  buttonElement1.addEventListener('click', () => world.reset());

  let buttonElement2 = document.querySelector<HTMLButtonElement>('#buttonStartAnimation')!;
  buttonElement2.addEventListener('click', () => world.startAnimation());

  let buttonElement3 = document.querySelector<HTMLButtonElement>('#buttonStopAnimation')!;
  buttonElement3.addEventListener('click', () => world.stopAnimation());

  console.log(world);
  world.draw();
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);