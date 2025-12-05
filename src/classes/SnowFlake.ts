/// <reference path="../interfaces/Point.ts" />

import { Constants } from "../misc/constants";

export class SnowFlake{

    position : Interfaces.Point;
    color: string;
    radius: number;

    velX : number;
    velY : number;

    constructor()
    {
        this.color = "#f2f1f0";
        this.reset();
    }

    setPosition(x: number, y: number){
        this.position = {
            x,
            y
        }
    }

    reset() {
        this.position = {
            x: Constants.RANDOM_INT_BETWEEN(0, Constants.CANVAS_WIDTH),
            y: Constants.RANDOM_INT_BETWEEN(0, -Constants.CANVAS_HEIGHT)
        }
        this.velY = Constants.RANDOM_INT_BETWEEN(2, 5);
        this.velX = Constants.RANDOM_INT_BETWEEN(-1, 1);
        this.radius = Constants.RANDOM_INT_BETWEEN(1, 3);
    }

    advanceFalling()
    {
        this.position.y += this.velY;
        this.position.x += this.velX;

        // If the snowflake reaches the bottom or drifts off screen, reset it
        if (this.position.y > Constants.CANVAS_HEIGHT + this.radius || this.position.x < -this.radius || this.position.x > Constants.CANVAS_WIDTH + this.radius) {
            this.reset();
            this.position.y = -this.radius; // ensure it starts just above the screen
        }
    }
}