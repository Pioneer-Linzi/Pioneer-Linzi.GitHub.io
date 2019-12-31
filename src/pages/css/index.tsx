import React = require('react');
import './index.scss'
export default function (props: {}) {
    return (
        <div className='css'>
            <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <LandInText text='learn someThing'/>
        </div>
    )
}

function LandInText(props:{text: string}){
    const {text} = props;
    
    return (
        <div className="LandInText">
            <p className="landIn">
                {
                    text.split('').map(function(item,index){
                        console.log(index)
                        const style = {
                           'animationDelay': `${index*0.5}s`
                        }
                        return <span className='LandInTextAni' style={style} key={Math.random()}>{item}</span>
                    })
                }
            </p>
        </div>
    )
}