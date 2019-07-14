import React, { useState, useEffect } from 'react';

//component import ==========================================
import NavBtn from './NavBtn';








const Nav = (props) => {





    return (
        <div id = 'navbar'>
            Jake Huang
            <NavBtn name='Home' url='/react-port/' />
            <NavBtn name='About' />
            <NavBtn name ='Portfolio' />
            <NavBtn name ='Contact' />
        </div>
    )
}

export default Nav;