import React from 'react';
import Swiper from '../Swipe/Swiper';





const Portfolio = () => {


    return(
        <div className = 'pageTransition'>
            <Swiper swipeLeft = 'Home' swipeRight = 'About' />
            <div className = 'portPage'>
            <h1 className='pageTitle' style={{fontFamily: 'Poiret One, cursive'}}>myWork</h1>
            </div>
        </div>
    )

}

export default Portfolio;