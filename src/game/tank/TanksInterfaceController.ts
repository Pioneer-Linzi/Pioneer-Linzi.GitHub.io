import Tanks from './Tank';
export interface TanksInterfaceController{
	ctx:CanvasRenderingContext2D;
	selector:HTMLCanvasElement;
	initCanvas():any;
	addTank(tank:Tanks):any;
	removeTanks():any;
}