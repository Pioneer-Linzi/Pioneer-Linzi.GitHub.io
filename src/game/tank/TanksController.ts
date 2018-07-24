import Tanks, {Direction} from './Tank';
import  {TanksInterfaceController} from './TanksInterfaceController';
import Tank from './Tank';
export class TanksController implements TanksInterfaceController {
    ctx: CanvasRenderingContext2D;
    selector:HTMLCanvasElement;
	constructor(selector:HTMLCanvasElement){
		this.selector= selector;
		this.initCanvas();
	}
	initCanvas() {
		//get CanvasRenderingContext2D
		this.selector.width=window.innerWidth;
		this.selector.height= window.innerHeight;
		this.ctx = this.selector.getContext('2d');
		this.ctx.fillStyle= '#444';
		this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		let tank=new Tank(this.ctx);
		window.setInterval(()=>{
			this.ctx.clearRect(0,0,this.selector.width,this.selector.height);
			this.ctx.fillStyle= '#444';
			this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
			tank.direction=Direction.DOWN;
			tank.move();
			tank.draw();
		},100)
	}
	addTank(tank: Tanks) {
		throw new Error("Method not implemented.");
	}
	removeTanks() {
		throw new Error("Method not implemented.");
	}
}

