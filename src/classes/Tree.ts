import { Constants } from "../misc/constants";
import {Trunk} from './Trunk';
import {Branch} from './Branch'
import {SubBranch} from './SubBranch'


export class Tree
{
    _canvas : HTMLCanvasElement;
    ctx : any;

    trunk : Trunk;
    branches: Branch[] = [];

    constructor(canvas : HTMLCanvasElement)
    {
        this._canvas = canvas;
        this.ctx = this._canvas.getContext("2d");
    }


    init()
    {
        let _ctx : any = this._canvas.getContext("2d");
        _ctx.fillRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);

        // Create trunk
        const start : Interfaces.Point = {
            x: Constants.CANVAS_WIDTH / 2,
            y: 30
        }
        const end : Interfaces.Point = {
            x: Constants.CANVAS_WIDTH / 2,
            y: Constants.CANVAS_HEIGHT
        }

        this.trunk = new Trunk(this._canvas);
        this.trunk.setColor("#362500");
        this.trunk.setPoints(start,end);


        // Draw branches
        let mainBranchesCount : number = Constants.CANVAS_HEIGHT / 40;
        let branchDistance : number = Constants.BRANCH_DISTANCE;

        // Draw main branches from trunk
        for(let i = 0; i < mainBranchesCount; i++)
        {
            let branchR : Branch = new Branch(this._canvas, this.trunk, i * branchDistance);
            branchR.width = 5;
            branchR.theta = 0.5;
            branchR.r = 40;
            branchR.setColor("#125207");
            branchR.calcPoints(false);
            this.branches.push(branchR);

            let branchL : Branch = new Branch(this._canvas, this.trunk, i * branchDistance);
            branchL.width = 5;
            branchL.theta = 0.5;
            branchL.r = 40;
            branchL.setColor("#125207");
            branchL.calcPoints(true);
            this.branches.push(branchL);
        }

        // Draw small branches from main branches
        this.branches.forEach((mainBranch,index) => {
            let subBranchesCount = index / 4;

            for (let i = 0; i < subBranchesCount; i++) {
                let smallBranch : SubBranch = new SubBranch(this._canvas,mainBranch, i)
                smallBranch.width = 3;
                smallBranch.theta = 90;
                smallBranch.r = 17;
                smallBranch.setColor("#125207");
                smallBranch.calcPoints(true);
                
                this.branches.push(smallBranch);
            }

            for (let i = 0; i < subBranchesCount; i++) {
                let smallBranch : SubBranch = new SubBranch(this._canvas,mainBranch, i)
                smallBranch.width = 3;
                smallBranch.theta = -35;
                smallBranch.r = 17;
                smallBranch.setColor("#125207");
                smallBranch.calcPoints(true);
                this.branches.push(smallBranch);
            }

            for (let i = 0; i < subBranchesCount; i++) {
                let smallBranch : SubBranch = new SubBranch(this._canvas,mainBranch, i)
                smallBranch.width = 3;
                smallBranch.theta = 90;
                smallBranch.r = 17;
                smallBranch.setColor("#125207");
                smallBranch.calcPoints(false);
                this.branches.push(smallBranch);
            }

            for (let i = 0; i < subBranchesCount; i++) {
                let smallBranch : SubBranch = new SubBranch(this._canvas,mainBranch, i)
                smallBranch.width = 3;
                smallBranch.theta = -35;
                smallBranch.r = 17;
                smallBranch.setColor("#125207");
                smallBranch.calcPoints(false);
                this.branches.push(smallBranch);
            }
        });
    }


    draw()
    {
        this.trunk.draw();
        this.branches.forEach(b => {
            b.draw();
        });
    }
}