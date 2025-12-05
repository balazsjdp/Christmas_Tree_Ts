/// <reference path="../interfaces/Point.ts" />

export class Gift{
    color: string;
    position : Interfaces.Point;
    size : number;


    constructor(giftConfig?: Partial<Gift>)
    {
        if(giftConfig){
            this.color = giftConfig.color;
            this.position = {x: giftConfig.position.x, y: giftConfig.position.y}
            this.size = giftConfig.size;
        }
    }

    setPosition(x: number, y: number){
        this.position = {
            x,
            y
        }
    }
}