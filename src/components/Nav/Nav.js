import React, { useState, useEffect } from 'react';

//component import ==========================================
import NavBtn from './NavBtn';








const Nav = (props) => {





    return (
        <div id = 'navbar'>
            Jake Huang
            <NavBtn name='Home' url='/' />
            <NavBtn name='About' url='/About' />
            <NavBtn name ='Portfolio' url='/react-port' />
            <NavBtn name ='Contact' />
        </div>
    )
}

export default Nav;