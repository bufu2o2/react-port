import React, {} from 'react';






const NavBtn = props => {







    return (
        <div>
            <a title = {props.name} href={props.url}>
                <span>
                    {props.name}
                </span>
            </a>
        </div>
    )
}


export default NavBtn;