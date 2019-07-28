import React, { Fragment, useContext } from 'react';
import posed from 'react-pose';
import './css/ContactMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalContext} from '../../Contexts/ModalContext';


const ContactMe = () => {
const [misOpen, setMisOpen] = useContext(ModalContext);
const animate = () => {
    console.log('animation started')
    document.getElementById('contactMeArrow').className = 'contactMeArrowAnimation';
    setTimeout(() => {
        document.getElementById('contactMeArrow').classList.remove('contactMeArrowAnimation');
    }, 500);
}

return(
    <Fragment>
    <div id='contactMeArrow' >
        <FontAwesomeIcon  
        className='fa' 
        icon= {['fas', 'angle-double-down']} 
        onClick= { () => { 
            animate();
            setMisOpen(!misOpen) 
        }} 
        />
    </div>
    </Fragment>
    )
}

export default ContactMe;