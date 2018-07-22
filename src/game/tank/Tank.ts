interface NPCInterface{
    ctx:CanvasRenderingContext2D;
    position:{
        x:number,
        y:number,
    }
    move():any;
    draw():any;

}


export default class Tank implements NPCInterface {
    position: { x: number; y: number };

    move(): any {
        return undefined;
    }

    draw(): any {
        return undefined;
    }
    ctx:CanvasRenderingContext2D;
    constructor(ctx:CanvasRenderingContext2D){
        this.ctx=ctx;
    }
}


class Bomb implements NPCInterface{
    move(): any {
        return undefined;
    }

    draw(): any {
        return undefined;
    }
    position:{
        x:number;
        y:number;
    }
    ctx:CanvasRenderingContext2D;
    constructor(ctx:CanvasRenderingContext2D){
        this.ctx=ctx;
    }
}