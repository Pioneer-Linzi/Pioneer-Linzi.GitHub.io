import React = require('react');
import './Panel.scss';
import {TanksController} from "./TanksController";
export default class Panel extends React.PureComponent{
    constructor(props:any){
		super(props);
    }
    componentDidMount(){
    	this.init();
	}
    init(){
		new TanksController(window.document.querySelector('#tank-canvas') as HTMLCanvasElement);
	}
	render(){
		return (
			<div id='tank-panel'>
			<canvas id='tank-canvas'>
			</canvas>
			</div>
		);
	}
}
