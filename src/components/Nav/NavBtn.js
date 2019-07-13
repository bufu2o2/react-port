import React, {} from 'react';
import { BrowserRouter as Link } from 'react-router-dom';





const NavBtn = props => {







    return (
        <div>
            <div>
                <a href='/react-port'>
                <span>
                    {props.name}
                </span>
                </a>
            </div>
        </div>
    )
}


export default NavBtn;