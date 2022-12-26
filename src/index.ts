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

const snow : SnowFlake[] = [];

setInterval(() => {
    requestAnimationFrame(render);
    render();
},1000 / Constants.FPS)

function render()
{
    _ctx.fillStyle = "black";
    _ctx.fillRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
    tree.draw();

    snow.forEach(snowFlake => {
        snowFlake.advanceFalling();
        snowFlake.draw();
    });
}




for (let i = 0; i < Constants.SNOW_DENSITY; i++) {
    let snowFlake : SnowFlake = new SnowFlake(<HTMLCanvasElement> canvasEl);
    snowFlake.setPosition(Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_WIDTH), Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_HEIGHT))
    snowFlake.radius = Constants.RANDOM_INT_BETWEEN(0.2, 2);
    snow.push(snowFlake);
}

