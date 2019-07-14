import React, {} from 'react';
import { BrowserRouter as Link } from 'react-router-dom';





const NavBtn = props => {







    return (
        <div>
            <div>
                <a href={props.url}>
                <span>
                    {props.name}
                </span>
                </a>
            </div>
        </div>
    )
}


export default NavBtn;