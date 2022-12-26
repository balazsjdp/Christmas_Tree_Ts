/// <reference path="../interfaces/Point.ts" />

import { Constants } from "../misc/constants";

export class SnowFlake{

    position : Interfaces.Point;
    _canvas : HTMLCanvasElement;
    ctx : any;
    color: string;
    radius: number;

    velX : number;
    velY : number;


    constructor(canvas : HTMLCanvasElement)
    {
        this._canvas = canvas;
        this.ctx = this._canvas.getContext("2d");
        this.color = "#f2f1f0";
        this.velY = 1;
        this.velX = 1;
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

    
    advanceFalling()
    {
        // If the snowflake reaches the bottom, put it back to the top
        if(this.position.y >= Constants.CANVAS_HEIGHT){
            this.setPosition(this.position.x + this.velX, 0 + this.velY);
        }

        if(this.position.x <= 0){
            this.velX++
        }
        else if(this.position.x >= Constants.CANVAS_WIDTH)
        {
            this.velX--;
        }

        this.setPosition(this.position.x + this.velX, this.position.y + this.velY);
        this.changePosition()
    }


    changePosition()
    {
        this.velX = Constants.RANDOM_INT_BETWEEN(-2,2)
        this.velY = Constants.RANDOM_INT_BETWEEN(1,4)
    }

}