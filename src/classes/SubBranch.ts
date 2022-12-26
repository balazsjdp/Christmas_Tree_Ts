import {Branch} from './Branch';
import {Decoration} from './Decoration'


export class SubBranch extends Branch{
    decoration : Decoration;

    override calcPoints(invert : boolean)
    {
        let inverter : number = invert == true ? -1 : 1;

         let start : Interfaces.Point = {
            x: this.origin.start.x + (this.index * inverter) + (this.r * this.index * inverter), 
            y: this.index + this.origin.start.y + this.r * this.index
        }

        let end : Interfaces.Point = {
            x: start.x - (this.r * inverter) * Math.cos(this.theta) + (this.index / 5 * -1),
            y: start.y - this.r * Math.cos(this.theta)  + (this.r * -1)
        }

        this.setPoints(start,end);
        this.addDecor()
    }

    addDecor()
    {
        this.decoration = new Decoration(this._canvas);
        this.decoration.setPosition(this.start.x,this.start.y + 10);
        this.decoration.setColor();
        this.decoration.radius = 3;
        this.decoration.draw();
        this.decoration.blink();
    }


    override draw(): void
    {
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.width;
        this.ctx.beginPath();
        this.ctx.moveTo(this.start.x, this.start.y);
        this.ctx.lineTo(this.end.x, this.end.y);
        this.ctx.stroke();
        this.decoration.draw();
    }


}