import React from 'react';
import Swiper from '../Swipe/Swiper';
import PortCard from './Parts/PortCard';


//img imports ===========================================================================
import testavatar from '../../img/avatar.png'




const Portfolio = () => {

    const portArr = [
        {
            title: 'Test0',
            url: '#',
            git: '#',
            img: testavatar,
            summary: 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text '
        },
        {
            title: 'Test1',
            url: '#',
            git: '#',
            img: testavatar,
            summary: 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text '
        },
        {
            title: 'Test2',
            url: '#',
            git: '#',
            img: testavatar,
            summary: 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text '
        },
    ]

    const portDisplay = portArr.map( (v,i) => (
        <PortCard 
        key = {i}
        num = {i} 
        img={v.img} 
        title={v.title} 
        summary={v.summary} 
        url={v.url} 
        git={ v.git } 
        / >
    ))


    return(
        <div>
            <Swiper swipeLeft = 'Home' swipeRight = 'About' />
            <div className = 'portPage' >
                <h1 className='pageTitle' id='portTitle' style={{fontFamily: 'Poiret One, cursive'}}>myWork</h1>
                {portDisplay}
            </div>
        </div>
    )

}

export default Portfolio;