import React from 'react';
import Swiper from '../Swipe/Swiper';
import PortCard from './Parts/PortCard';


//img imports ===========================================================================
import testavatar from '../../img/avatar.png'




const Portfolio = () => {

    const portArr = [
        {
            title: 'Test',
            url: '#',
            git: '#',
            img: testavatar,
            summary: 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text '
        }
    ]


    return(
        <div>
            <Swiper swipeLeft = 'Home' swipeRight = 'About' />
            <div className = 'portPage' >
                <h1 className='pageTitle' id='portTitle' style={{fontFamily: 'Poiret One, cursive'}}>myWork</h1>
                <PortCard img={portArr[0].img} title={portArr[0].title} summary={portArr[0].summary} url={portArr[0].url} git={ portArr[0].git } ></PortCard>



            </div>
        </div>
    )

}

export default Portfolio;