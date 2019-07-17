import React, {Fragment, useState} from 'react';



const NavGuide = props => {




    return(
        <Fragment>
            <div style={{opacity: props.opacityLeft}} id = 'navGuide-L' className = 'navGuide'>
                <div className = 'arrowBtn' id='l'>
                    <i className ='left' /> 
                    <div>
                        {props.left}
                    </div>
                </div>
            </div>
            <div style={{opacity: props.opacityRight}} id = 'navGuide-R' className = 'navGuide'>
                <div className = 'arrowBtn' id='r'>
                    <i className ='right' /> 
                    <div>
                        {props.right}
                    </div>
                </div>
            </div>
            <div style={{opacity: props.opacityUp}} id = 'navGuide-U' className = 'navGuide'>
                <div className = 'arrowBtn' id='u'>
                    <i className ='up' /> 
                    <div>
                        {props.up}
                    </div>
                </div>
            </div>
            <div style={{opacity: props.opacityDown}} id = 'navGuide-D' className = 'navGuide'>
                <div className = 'arrowBtn' id='d'>
                    <i className ='down' /> 
                    <div>
                        {props.down}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}



export default NavGuide;