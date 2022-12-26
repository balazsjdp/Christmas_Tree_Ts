/// <reference path="../interfaces/Point.ts" />


export class Line{
    start : Interfaces.Point;
    end   : Interfaces.Point;
    _canvas : HTMLCanvasElement;
    ctx : any;
    color: string;
    width : number = 1;

    constructor(canvas : HTMLCanvasElement)
    {
        this._canvas = canvas;
        this.ctx = this._canvas.getContext("2d");
    }

    setPoints(from : Interfaces.Point, to : Interfaces.Point)
    {
        this.start = from;
        this.end = to;
    }

    setColor(color : string)
    {
        this.color = color;
    }


    draw()
    {
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.width;
        this.ctx.beginPath();
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.lineTo(this.end.x, this.end.y);
        this.ctx.stroke();
    }
}
