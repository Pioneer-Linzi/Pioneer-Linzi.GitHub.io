import *  as React from 'react';
import './canvas.scss'
class CanvasPanel extends React.Component{
    constructor(props:any){
        super(props);
    }

    componentDidMount(){
        this.getCanvas();
    }
    getCanvas(){
       const canvas= window.document.querySelector('#canvasEle') as HTMLCanvasElement;
        const ctx= canvas.getContext('2d');
        ctx.fillStyle='#ff0';
        ctx.fillRect(0,0,100,100);
    }
    render(){
        return (
                <div id="canvas">
                    <canvas id='canvasEle'></canvas>
                </div>
        );
    }
}


export {
    CanvasPanel
}
