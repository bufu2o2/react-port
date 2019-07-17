import React, {Fragment, useState} from 'react';



const NavGuide = props => {




    return(
        <Fragment>
            <div id = 'navGuide-L' class = 'navGuide'>
                {props.left}
            </div>
            <div id = 'navGuide-R' class = 'navGuide'>
                {props.right}
            </div>
            <div id = 'navGuide-U' class = 'navGuide'>
                {props.up}
            </div>
            <div id = 'navGuide-D' class = 'navGuide'>
                {props.down}
            </div>
        </Fragment>
    )
}



export default NavGuide;