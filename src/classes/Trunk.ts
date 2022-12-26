import {Line} from './Line';

   
export class Trunk extends Line{
    constructor(canvas : HTMLCanvasElement)
    {
        super(canvas);
        this.width = 10;
    }
}
