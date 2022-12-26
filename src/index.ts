/// <reference path="./interfaces/Point.ts" />

import {Tree} from './classes/Tree';
import {Branch} from './classes/Branch';
import {SubBranch} from './classes/SubBranch';
import {Gift} from './classes/Gift';
import { Constants } from './misc/constants';
import {SnowFlake} from './classes/SnowFlake'

// Init canvas
const CANVAS_WIDTH : number = 800;
const CANVAS_HEIGHT : number = 600;
const BORDERCOLOR : string = "black";
const BORDERTHICKNESS : string = "1px";


const canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas_");
canvas.setAttribute("width", CANVAS_WIDTH.toString());
canvas.setAttribute("height", CANVAS_HEIGHT.toString())


document.body.appendChild(canvas);
let canvasEl : HTMLElement = document.getElementById("canvas_")
canvasEl.style.border = `${BORDERTHICKNESS} solid ${BORDERCOLOR}`

let _canvas : HTMLCanvasElement = <HTMLCanvasElement> canvasEl;


const tree : Tree = new Tree(_canvas);
tree.init();
let _ctx : any = _canvas.getContext("2d");

const snow : SnowFlake[] = [];


const fps = 25;


setInterval(() => {
    requestAnimationFrame(render);
    render();
},1000 / fps)

function render()
{
    _ctx.fillStyle = "black";
    _ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    tree.draw();


    snow.forEach(snowFlake => {
        snowFlake.advanceFalling();
        snowFlake.draw();
    });


    //requestAnimationFrame(render);
}

//requestAnimationFrame(render);



for (let i = 0; i < Constants.SNOW_DENSITY; i++) {
    let snowFlake : SnowFlake = new SnowFlake(<HTMLCanvasElement> canvasEl);
    snowFlake.setPosition(Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_WIDTH), Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_HEIGHT))
    snowFlake.radius = Constants.RANDOM_INT_BETWEEN(0.2, 2);
    snow.push(snowFlake);
}

