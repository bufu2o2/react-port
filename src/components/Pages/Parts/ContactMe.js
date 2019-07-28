import React, { Fragment, useContext } from 'react';
import posed from 'react-pose';
import './css/ContactMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalContext} from '../../Contexts/ModalContext';


const ContactArrow = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        y: '0vh',
        opacity: .2,
        scale: 1,
        textShadow: '0 0 0 #000',
        color: '#33C3F7'
    },
    hover: {
        y: '1vh',
        opacity: .6,
        textShadow: '2px 2px 2px #33C3F7',
        scale: .85
    },
    press: {
        y: '15vh',
        opacity: 0,
        textShadow: '2px 2px 2px #33C3F7',
        scale: .25
    }
})
const ContactWord = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        y: '0vh',
        opacity: .1,
        scale: .5,
        textShadow: '0 0 0 #000',
        color: '#33C3F7'
    },
    hover: {
        y: '0vh',
        opacity: .85,
        textShadow: '2px 2px 2px #33C3F7',
        scale: 1
    },
    press: {
        y: '15vh',
        opacity: 0,
        textShadow: '2px 2px 2px #33C3F7',
        scale: .2
    }
})

const ContactMe = () => {
const [misOpen, setMisOpen] = useContext(ModalContext);


return(
    <Fragment>
    <ContactArrow id='contactMeArrow' >
        <FontAwesomeIcon  
        className='fa' 
        icon= {['fas', 'angle-double-down']} 
        onClick= { () => { 
            console.log('clicked MIS arrows   ', misOpen)
            setMisOpen(!misOpen) 
            console.log('new mis : ', misOpen)}} 
        />
    </ContactArrow>
        {/* <ContactWord id='contactMeWord'>
        Contact
        </ContactWord> */}
    </Fragment>
    )
}

export default ContactMe;