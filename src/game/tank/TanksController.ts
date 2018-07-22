import Tanks from './Tank';
import  {TanksInterfaceController} from './TanksInterfaceController';
export class TanksController implements TanksInterfaceController {
    ctx: CanvasRenderingContext2D;
    selector:HTMLCanvasElement;
	constructor(selector:HTMLCanvasElement){
		this.selector= selector;
		this.initCanvas();
	}
	initCanvas() {
		//get CanvasRenderingContext2D
		this.ctx = this.selector.getContext('2d');
	}
	addTank(tank: Tanks) {
		throw new Error("Method not implemented.");
	}
	removeTanks() {
		throw new Error("Method not implemented.");
	}
}

