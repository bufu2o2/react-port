import React, {} from 'react';
import Swiper from '../Swipe/Swiper';



const Contact = () => {


    return (
        <div className = 'pageTransition'>
            <Swiper swipeLeft = 'About' swipeRight = 'Portfolio' swipeDown='Home'/>
            <h1>Contact Page</h1>
        </div>
    )
}

export default Contact;