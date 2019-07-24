import React, {} from 'react';
import Swiper from '../Swipe/Swiper';



const About = () => {


    return (
        <div>
            <Swiper swipeLeft='Portfolio' swipeRight='Home'/>
            <div className = 'aboutPage'>
            <h1 className='pageTitle' style={{fontFamily: 'Poiret One, cursive'}}>me</h1>
            </div>
        </div>
    )
}

export default About;