interface NPCInterface{
    ctx:CanvasRenderingContext2D;
    positionX:number;
    positionY:number;
    move():void;
    draw():void;
	direction:Direction;

}

export enum Direction {
	UP=1,
	DOWN=2,
	LEFT=3,
	RIGHT=4,
}


export default class Tank implements NPCInterface {
	set direction(value: Direction) {
		this._direction = value;
	}
	private _direction: Direction;
	positionX: number;
	positionY: number;
    move(): void{
    	switch(this._direction){
			case Direction.UP:
				this.positionY--;
				if(this.positionY<=0){
					//block;
				}
				break;
			case Direction.DOWN:
				this.positionY++;
				break;
			case Direction.LEFT:
				this.positionX--;
				break;
			case Direction.RIGHT:
				this.positionX++
				break;
			default:
				break;
		}
    }

    draw(): void{
		//perail
		this.ctx.fillStyle='#FCEE21';
		this.ctx.fillRect(this.positionX,this.positionY,17/2,90/2);
		this.ctx.fillRect(this.positionX+25,this.positionY,17/2,90/2);
		//center control room
		this.ctx.fillStyle='#D9E021';
		this.ctx.fillRect(this.positionX+8.5,this.positionY+10,33/2,49/2);
		this.ctx.fillStyle='#ED1C24';
		//control room top enter
		this.ctx.beginPath();
		this.ctx.arc(this.positionX+8.5+33/4,this.positionY+22,6,0,2*Math.PI);
		this.ctx.closePath();
		this.ctx.fill();
		//gun
		this.ctx.fillStyle='#fff';
		this.ctx.fillRect(this.positionX+8.5+33/4,this.positionY+16-50/2,1.5,50/2);
    }
    ctx:CanvasRenderingContext2D;
    constructor(ctx:CanvasRenderingContext2D){
        this.ctx=ctx;
        this.positionX=200;
        this.positionY=100;
    }
}


class Bomb implements NPCInterface{
	direction: Direction;
	positionX: number;
	positionY: number;
    move(): void{
        return undefined;
    }

    draw(): void {
        return undefined;
    }

    ctx:CanvasRenderingContext2D;
    constructor(ctx:CanvasRenderingContext2D){
        this.ctx=ctx;
    }
}
