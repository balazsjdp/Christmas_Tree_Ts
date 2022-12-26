/// <reference path="../interfaces/Point.ts" />

export class Gift{
    _canvas : HTMLCanvasElement;
    ctx : any;
    color: string;
    position : Interfaces.Point;
    size : number;


    constructor(canvas : HTMLCanvasElement)
    {
        this._canvas = canvas;
        this.ctx = this._canvas.getContext("2d");
    }


    draw()
    {
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;

        this.ctx.beginPath();
        this.ctx.rect(this.position.x, this.position.y, this.size, this.size);
        this.ctx.stroke();
        this.ctx.fill();
    }

    setPosition(x: number, y: number){
        this.position = {
            x,
            y
        }
    }
}