import React, {useContext} from 'react';
import {ModalContext} from '../../Contexts/ModalContext';


const Modal = props => {
    
    const [misOpen, setMisOpen] = useContext(ModalContext);
    console.log(props.open)
    

    return (
        <div id='modalContainer'>
            {/* <div id='modalTitle' >{props.title}</div> */}
            <div id='close' onClick={() => setMisOpen(false)} >&times;</div>
            <div id='modalTop'>
                {props.title}
            </div>
            <div id='modalBottom'>
                {props.component}
            </div>
        </div>
    )
}

export default Modal;