/// <reference path="../interfaces/Point.ts" />

import {Constants} from '../misc/constants'

export class Decoration {
    position : Interfaces.Point;
    _canvas : HTMLCanvasElement;
    ctx : any;
    color: string;
    radius: number;

    constructor(canvas : HTMLCanvasElement)
    {
        this._canvas = canvas;
        this.ctx = this._canvas.getContext("2d");
    }


    setPosition(x: number, y: number){
        this.position = {
            x,
            y
        }
    }


    draw()
    {
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        this.ctx.ellipse(this.position.x, this.position.y, this.radius, this.radius, Math.PI, 0, 5 * Math.PI);
        this.ctx.stroke();
        this.ctx.fill();
    }

    setColor()
    {
        this.color = Constants.DECORATION_COLORS[Constants.RANDOM_INT_BETWEEN(0,Constants.DECORATION_COLORS.length)];
    }

    blink()
    {
        setInterval(() => {
            this.ctx.fillStyle = this.color;
            this.ctx.strokeStyle = this.color;
            this.setColor();
        },500)
    }



}