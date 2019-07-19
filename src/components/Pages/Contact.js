import React, {} from 'react';
import Swiper from '../Swipe/Swiper';

import Modal from './Parts/Modal';


const Contact = () => {


    return (
        <div className = 'pageTransition'>
            <Swiper swipeLeft = 'About' swipeRight = 'Portfolio' swipeDown='Home'/>
            <h1>Contact Page</h1>
            {/* <Modal component='ContactForm' title='Lets Work Together!' /> */}
        </div>
    )
}

export default Contact;