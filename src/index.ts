/// <reference path="./interfaces/Point.ts" />

import {Tree} from './classes/Tree';
import {Branch} from './classes/Branch';
import {SubBranch} from './classes/SubBranch';
import {Gift} from './classes/Gift';
import { Constants } from './misc/constants';
import { GiftService } from './services/gift.service';
import { SnowService } from './services/snow.service';

// Init canvas
const canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas_");
canvas.setAttribute("width", Constants.CANVAS_WIDTH.toString());
canvas.setAttribute("height", Constants.CANVAS_HEIGHT.toString())


document.body.appendChild(canvas);
let canvasEl : HTMLElement = document.getElementById("canvas_")
let _canvas : HTMLCanvasElement = <HTMLCanvasElement> canvasEl;


const giftService = new GiftService(_canvas);
const snowService = new SnowService(_canvas);

const tree : Tree = new Tree(_canvas);
tree.init();
let _ctx : any = _canvas.getContext("2d");
const decorations = tree.getDecorations();
let blinkCounter = 0;


function gameLoop() {
    // 1. Clear screen
    _ctx.fillStyle = "black";
    _ctx.fillRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);

    // 2. Update objects
    snowService.update();

    // 3. Render objects
    tree.draw();
    giftService.renderGifts();
    snowService.renderSnow();


    blinkCounter++;
    if (blinkCounter % 15 === 0) {
        decorations.forEach((d, i) => {
            if (i % 2 === 0) {
                d.toggle();
            }
        });
    }
    if (blinkCounter % 30 === 0) {
        decorations.forEach((d, i) => {
            if (i % 2 !== 0) {
                d.toggle();
            }
        });
    }

    // 4. Repeat
    requestAnimationFrame(gameLoop);
}

// Start the loop
gameLoop();
