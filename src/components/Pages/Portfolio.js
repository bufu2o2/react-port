import React from 'react';
import Swiper from '../Swipe/Swiper';





const Portfolio = () => {


    return(
        <div className = 'pageTransition'>
            <Swiper swipeLeft = 'Home' swipeRight = 'About' />
            <div className = 'portPage'>
            <h1 className='pageTitle' style={{fontFamily: 'Reenie Beanie, cursive'}}>myWork</h1>
            <h1 className='pageTitle' style={{fontFamily: 'Megrim, cursive'}}>myWork</h1>
            <h1 className='pageTitle' style={{fontFamily: 'Unkempt, cursive'}}>myWork</h1>
            </div>
        </div>
    )

}

export default Portfolio;