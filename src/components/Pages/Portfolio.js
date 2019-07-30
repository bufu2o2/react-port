import React from 'react';
import Swiper from '../Swipe/Swiper';
import PortCard from './Parts/PortCard';


//img imports ===========================================================================
import testavatar from '../../img/avatar.png'
import myTime from '../../img/myTime.png'



const Portfolio = () => {

    const portArr = [
        {
            title: 'myTime',
            url: 'https://timecardstaging.herokuapp.com/login',
            git: 'https://github.com/twistedx/timecard-app',
            img: myTime,
            summary: 'This is an app created using React Js to keep track of timecards. This is just the MVP of it which is geared towards freelancers, however future iterations will allow you to pick your industry and gear the app towards most types of industries.'
        },
        {
            title: 'Test1',
            url: '#',
            git: '#',
            img: testavatar,
            summary: 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy '
        },
        {
            title: 'Test2',
            url: '#',
            git: '#',
            img: testavatar,
            summary: 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy '
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