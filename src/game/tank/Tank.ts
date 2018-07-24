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
		this.drawPerail();
		this.drawControllRoom();
		this.drawGun();
    }

	private drawGun() {
		//gun
		this.ctx.fillStyle = '#fff';
		switch (this._direction){
			case Direction.RIGHT:
				this.ctx.fillRect(this.positionX + 50/2, this.positionY + 8.5+33/4, 50/2, 1.5);
				break;
			case Direction.UP:
				this.ctx.fillRect(this.positionX + 8.5 + 33 / 4, this.positionY + 16 - 50 / 2, 1.5, 50 / 2);
				break;
			case Direction.DOWN:
				this.ctx.fillRect(this.positionX + 8 + 33 / 4, this.positionY +  50 / 2, 1.5, 50 / 2);
				break;
			case Direction.LEFT:
				this.ctx.fillRect(this.positionX + 16-50/2, this.positionY + 8+33/4, 50/2, 1.5);
				break;
			default:
				break;
		}
	}

	private drawControllRoom() {
		//center control room
		this.ctx.fillStyle = '#D9E021';
		this.ctx.beginPath();
		if(this._direction===Direction.DOWN||this._direction===Direction.UP) {
			this.ctx.fillRect(this.positionX + 8.5, this.positionY + 10, 33 / 2, 49 / 2);
			//control room top enter
			this.ctx.fillStyle = '#ED1C24';
			this.ctx.arc(this.positionX + 8.5 + 33 / 4, this.positionY + 22, 6, 0, 2 * Math.PI);
			this.ctx.closePath();
			this.ctx.fill();
		}else{
			this.ctx.fillRect(this.positionX+10, this.positionY + 8.5, 49/2, 33/2);
			//control room top enter
			this.ctx.fillStyle = '#ED1C24';
			this.ctx.arc(this.positionX + 22, this.positionY + 8.5+33/4, 6, 0, 2 * Math.PI);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}

	private drawPerail() {
    	//perail
		this.ctx.fillStyle = '#FCEE21';
		if(this._direction===Direction.DOWN||this._direction===Direction.UP){
			this.ctx.fillRect(this.positionX, this.positionY, 17 / 2, 90 / 2);
			this.ctx.fillRect(this.positionX + 25, this.positionY, 17 / 2, 90 / 2);
		}else{
			this.ctx.fillRect(this.positionX, this.positionY, 90 / 2, 17 / 2);
			this.ctx.fillRect(this.positionX , this.positionY+25, 90 / 2, 17 / 2);
		}
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
