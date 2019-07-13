import React, { useState, useEffect } from 'react';

//component import ==========================================
import NavBtn from './NavBtn';








const Nav = (props) => {





    return (
        <div>
            Jake Huang
            <NavBtn name='Home' url='/' />
            <NavBtn name='About' />
            <NavBtn name ='Portfolio' />
            <NavBtn name ='Contact' />
        </div>
    )
}

export default Nav;