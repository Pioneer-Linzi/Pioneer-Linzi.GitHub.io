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
            <Reveal title='text will slow show' />
            <Snow></Snow>
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
function Reveal(props: { title: string }) {
    let { title } = props
    title =title.toUpperCase()

    return (
        <div className="reveal">
            <div className='text-wrap'>
                {title.split('').map(function (item,index) {
                    const middle = title.split('').length/2
                    const style={
                        animationDelay: `${Math.abs(index-middle)*0.1}s`
                    }
                    return <span key={Math.random()} style={style}>{item}</span>
                })}
            </div>
        </div>
    )
}


function Snow(props: {}){
    const arr = new Array(1000).fill(1);
    return (
        <div className='snow'>
            {arr.map(function(item){
                return <div className='snow-item'></div>
            })}
        </div>
    )
}