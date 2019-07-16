import React from 'react';
import Swiper from '../Swipe/Swiper';





const Portfolio = () => {


    return(
        <div className = 'pageTransition'>
            <Swiper swipeLeft = 'Home' swipeRight = 'About' />
            <h1>Portfolio Page</h1>
        </div>
    )

}

export default Portfolio;