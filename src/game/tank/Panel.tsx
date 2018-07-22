import * as React from 'react';
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
    	new TanksController(window.document.querySelector('#tanks-panel > tank-canvas') as HTMLCanvasElement);
	}
	render(){
		return (
			<div id='tank-panel'>
			<canvas className='tank-canvas'>
			</canvas>
			</div>
		);
	}
}
