import React, {useContext} from 'react';
import {ModalContext} from '../../Contexts/ModalContext';



const Modal = props => {
    
    const [misOpen, setMisOpen] = useContext(ModalContext);
    console.log(props.open)
    

    return (
        <div id='modalContainer'>
            <div id='close' onClick={() => setMisOpen(false)} >&times;</div>
            <div id='modalTop'>
                
            </div>
            <div id='modalBottom'>
                {props.title}
                {props.component}
            </div>
        </div>
    )
}

export default Modal;