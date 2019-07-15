import React, {useContext} from 'react';
import {PageContext} from '../Contexts/PageContext';
import { BrowserRouter as Link } from 'react-router-dom';





const NavBtn = props => {

    const [page, setPage] = useContext(PageContext);





    return (
            <div id = 'navBtn' onClick= { () => {setPage(props.name)}} style={{margin: '50px'}}>
                <span>
                    {props.name}
                </span>
            </div>
    )
}


export default NavBtn;