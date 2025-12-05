import {Gift} from "../classes/Gift";
import { Service } from "../interfaces/Service";
import { HasCanvas } from "../classes/HasCanvas";
const giftConfig = require('/config.json').gifts;

export class GiftService extends HasCanvas implements Service {
    gifts: Gift[] = [];

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.initialize();
    }

    initialize(): void {
        this.setup();
        this.renderGifts();
    }

    setup() : void {
        if(!giftConfig || !Array.isArray(giftConfig)) {
            console.warn("No valid gift configuration found.");
            return;
        }

        for (const cfg of giftConfig) {
            this.gifts.push(new Gift(cfg as Gift));
        }
    }

    renderGifts(): void {
        if (!this.ctx) {
            return;
        }
        for (const gift of this.gifts) {
            this.ctx.fillStyle = gift.color;
            this.ctx.strokeStyle = gift.color;

            this.ctx.beginPath();
            this.ctx.rect(gift.position.x, gift.position.y, gift.size, gift.size);
            this.ctx.stroke();
            this.ctx.fill();
        }
    }
}