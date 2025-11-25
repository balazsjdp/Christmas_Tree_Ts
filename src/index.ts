/// <reference path="./interfaces/Point.ts" />

import {Tree} from './classes/Tree';
import {Branch} from './classes/Branch';
import {SubBranch} from './classes/SubBranch';
import {Gift} from './classes/Gift';
import { Constants } from './misc/constants';
import {SnowFlake} from './classes/SnowFlake'

// Init canvas
const canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas_");
canvas.setAttribute("width", Constants.CANVAS_WIDTH.toString());
canvas.setAttribute("height", Constants.CANVAS_HEIGHT.toString())


document.body.appendChild(canvas);
let canvasEl : HTMLElement = document.getElementById("canvas_")
let _canvas : HTMLCanvasElement = <HTMLCanvasElement> canvasEl;


const tree : Tree = new Tree(_canvas);
tree.init();
let _ctx : any = _canvas.getContext("2d");
const decorations = tree.getDecorations();
let blinkCounter = 0;

const snow : SnowFlake[] = [];
const gifts: Gift[] = [];

const gift1 = new Gift(_canvas);
gift1.setPosition(350, 550);
gift1.size = 30;
gift1.color = "#FF0000";
gifts.push(gift1);

const gift2 = new Gift(_canvas);
gift2.setPosition(400, 540);
gift2.size = 40;
gift2.color = "#0000FF";
gifts.push(gift2);

const gift3 = new Gift(_canvas);
gift3.setPosition(450, 560);
gift3.size = 20;
gift3.color = "#00FF00";
gifts.push(gift3);

setInterval(() => {
    requestAnimationFrame(render);
    render();
},1000 / Constants.FPS)

function render()
{
    _ctx.fillStyle = "black";
    _ctx.fillRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
    tree.draw();

    gifts.forEach(gift => {
        gift.draw();
    });

    snow.forEach(snowFlake => {
        snowFlake.advanceFalling();
        snowFlake.draw();
    });

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
}




for (let i = 0; i < Constants.SNOW_DENSITY; i++) {
    let snowFlake : SnowFlake = new SnowFlake(<HTMLCanvasElement> canvasEl);
    snowFlake.setPosition(Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_WIDTH), Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_HEIGHT))
    snowFlake.radius = Constants.RANDOM_INT_BETWEEN(0.2, 2);
    snow.push(snowFlake);
}

