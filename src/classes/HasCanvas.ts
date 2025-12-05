

export class HasCanvas {
    private _canvas?: HTMLCanvasElement;
    private _ctx : CanvasRenderingContext2D | null;

    constructor(protected cnv: HTMLCanvasElement) {
        this._canvas = cnv;
        this._ctx = this._canvas.getContext("2d");
    }

    get canvas(): HTMLCanvasElement | undefined {
        return this._canvas;
    }

    get ctx(): CanvasRenderingContext2D | null {
        return this._ctx;
    }

}