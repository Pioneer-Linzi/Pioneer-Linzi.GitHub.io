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
        let n=0;
		window.setInterval(()=>{
			this.ctx.clearRect(0,0,this.selector.width,this.selector.height);
			this.ctx.fillStyle= '#444';
			this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
			if(n==0){
				n=Math.floor(Math.random()*100);
                const i=Math.floor(Math.random()*10);
                if(i<=4){
                    tank.direction=(i+2)%4;
                }
			}else{
				n--;
			}
			if(tank.positionX<0||tank.positionY<0||tank.positionY>this.selector.height||tank.positionX>this.selector.width){
                const i=Math.floor(Math.random()*10);
                if(i<=4){
                    tank.direction=i;
                }
			}
			tank.move();
			tank.draw();
		},10)
	}
	addTank(tank: Tanks) {
		throw new Error("Method not implemented.");
	}
	removeTanks() {
		throw new Error("Method not implemented.");
	}
}

