import React, {Fragment, useState} from 'react';


const NavGuide = props => {
    const [xpos, setXpos] = useState(props.xpos);
    const [ypos, setYpos] = useState(props.ypos);

    if(xpos !== props.xpos) { setXpos(props.xpos) }
    if(ypos !== props.ypos) { setYpos(props.ypos) }

    // xpos>0 ? console.log('left') : console.log('right');
    // ypos>0 ? console.log('down') : console.log('up');

    

    return(
        <Fragment>
            <div style={{opacity: (props.opacityLeft*2)}} id = 'navGuide-L' className = 'navGuide'>
            <i style={ xpos>0 ? {left: `calc(100%/215*${xpos})`} : {right: `calc(100%/-215*${xpos})`} }className ='right' /> 
                <div id='l'>
                    <div>
                        {props.left}
                    </div>
                </div>
            </div>
            <div style={{opacity: (props.opacityRight*2)}} id = 'navGuide-R' className = 'navGuide'>
            <i style={ xpos>0 ? {left: `calc(100%/215*${xpos})`} : {right: `calc(100%/-215*${xpos})`} }className ='left' /> 
                <div id='r'>
                    <div>
                        {props.right}
                    </div>
                </div>
            </div>
            <div style={{opacity: (props.opacityUp*2)}} id = 'navGuide-U' className = 'navGuide'>
            <i style={ ypos>0 ? {top: `calc(100%/215*${ypos})`} : {bottom: `calc(100%/-215*${ypos})`} }className ='down' /> 
                <div id='u'>
                    <div>
                        {props.up}
                    </div>
                </div>
            </div>
            <div style={{opacity: (props.opacityDown*2)}} id = 'navGuide-D' className = 'navGuide'>
            <i style={ ypos>0 ? {top: `calc(100%/215*${ypos})`} : {bottom: `calc(100%/-215*${ypos})`} }className ='up' /> 
                <div id='d'>
                    <div>
                        {props.down}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}



export default NavGuide;