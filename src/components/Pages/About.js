import React, {} from 'react';
import Swiper from '../Swipe/Swiper';



const About = () => {


    return (
        <div>
            <Swiper swipeLeft='Portfolio' swipeRight='Home'/>
            <div className = 'aboutPage'>
            <h1 className='pageTitle' style={{fontFamily: 'Reenie Beanie, cursive'}}>Me</h1>
            <h1 className='pageTitle' style={{fontFamily: 'Megrim, cursive'}}>Me</h1>
            <h1 className='pageTitle' style={{fontFamily: 'Unkempt, cursive'}}>Me</h1>
            </div>
        </div>
    )
}

export default About;