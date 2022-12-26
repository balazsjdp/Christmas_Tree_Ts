import {Line} from './Line';



export class Branch extends Line{
    origin : Line;
    index: number;
    angle : number;
    r : number;
    theta : number;

    constructor(canvas : HTMLCanvasElement, origin: Line, index : number)
    {
        super(canvas);
        this.origin = origin;
        this.index = index;
    }


    calcPoints(invert : boolean)
    {
        // Calculate start
        let start : Interfaces.Point = {
            x: this.origin.start.x,
            y: this.index + this.origin.start.y
        }

        let inverter : number = invert == true ? -1 : 1;

        let end : Interfaces.Point = {
            x: start.x + (this.r * inverter) * Math.cos(this.theta) + (this.index / 5 * inverter),
            y: start.y + this.r * Math.cos(this.theta)  + this.index / 5
        }

        this.setPoints(start,end);

    }

}