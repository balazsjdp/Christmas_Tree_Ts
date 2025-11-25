/// <reference path="../interfaces/Point.ts" />

import {Constants} from '../misc/constants'

export class Decoration {
    position : Interfaces.Point;
    _canvas : HTMLCanvasElement;
    ctx : any;
    color: string;
    radius: number;
    isLit: boolean = true;

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
        let color = this.color;
        if(!this.isLit){
            color = this.darkenColor(this.color, 50);
        }

        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.ellipse(this.position.x, this.position.y, this.radius, this.radius, Math.PI, 0, 5 * Math.PI);
        this.ctx.stroke();
        this.ctx.fill();
    }

    darkenColor(color: string, percent: number): string {
        const num = parseInt(color.replace("#", ""), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) - amt,
            G = (num >> 8 & 0x00FF) - amt,
            B = (num & 0x0000FF) - amt;
        return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
    }

    toggle()
    {
        this.isLit = !this.isLit;
    }

    setColor()
    {
        this.color = Constants.DECORATION_COLORS[Constants.RANDOM_INT_BETWEEN(0,Constants.DECORATION_COLORS.length - 1)];
    }
}