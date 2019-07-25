import React, {} from 'react';
import Swiper from '../Swipe/Swiper';
import mePic from '../../img/chibiIronman.png';



const About = () => {


    return (
        <div>
            <Swiper swipeLeft='Portfolio' swipeRight='Home'/>
            <div className = 'aboutPage'>
                <h1 className='pageTitle' style={{fontFamily: 'Poiret One, cursive'}}>this.Guy</h1>
            </div>
            <div className='container'>
                <div id='aboutPic'>
                    <img src={mePic} alt='Iron Man Avatar' />
                </div>
                <p id='aboutText'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                </p>
                <div id='aboutMoreContainer'>
                    <i id='aboutMore' />
                    <div id='aboutMoreLabel'>more</div>
                </div>
            </div>
        </div>
    )
}

export default About;