import { HasCanvas } from "../classes/HasCanvas";
import { Service } from "../interfaces/Service";
import { SnowFlake } from "../classes/SnowFlake";
import { Constants } from "../misc/constants";

const snowConfig : SnowConfig = require('/config.json').snow;

interface SnowConfig {
    density: number;
}

export class SnowService extends HasCanvas implements Service {
    snow: SnowFlake[] = [];

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.initialize();
    }


    initialize(): void {
        this.setup();
        console.log(this.snow)
    }

    setup() : void {
        if(!snowConfig) {
            console.warn("No valid snow configuration found.");
            return;
        }

        for (let i = 0; i < snowConfig.density; i++) {
            const snowFlake : SnowFlake = new SnowFlake();
            snowFlake.setPosition(Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_WIDTH), Constants.RANDOM_INT_BETWEEN(0,Constants.CANVAS_HEIGHT))
            snowFlake.radius = Constants.RANDOM_INT_BETWEEN(0.2, 2);
            snowFlake.advanceFalling();
            this.snow.push(snowFlake);

        }
    }

    renderSnow(): void {
        if (!this.ctx) {
            return;
        }
        for (const snow of this.snow) {
            this.ctx.fillStyle = snow.color;
            this.ctx.strokeStyle = snow.color;
            this.ctx.beginPath();
            this.ctx.ellipse(snow.position.x, snow.position.y, snow.radius, snow.radius, Math.PI, 0, 5 * Math.PI);
            this.ctx.stroke();
            this.ctx.fill();
        }
    }

    update(): void {
        for (const snow of this.snow) {
            snow.advanceFalling();
        }
    }


}