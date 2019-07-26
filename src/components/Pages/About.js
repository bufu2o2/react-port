import React, {Fragment, useState} from 'react';
import Swiper from '../Swipe/Swiper';
import mePic from '../../img/chibiIronman.png';
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Text = posed.p({
    'show': {
        y: 0,
        opacity: 1,
    },
    'hide': {
        y: '-100vh',
        opacity: 0,
    }
})
const Credentials = posed.ul({
    'show': {
        y: '0',
        opacity: 1
    },
    'hide': {
        y: '100vh',
        opacity: 0
    }
})


const About = () => {
    const [display, setdisplay] = useState(true);

    const credArr = [
        {
            title: 'UCLA Extension',
            icon: 'graduation-cap',
            type: 'fas'
        },
        {
            title: 'GMU',
            icon: 'graduation-cap',
            type: 'fas'
        },
        {
            title: 'React',
            icon: 'react',
            type: 'fab'
        },
        {
            title: 'Javascript',
            icon: 'js-square',
            type: 'fab'
        },
        {
            title: 'Mongo Db',
            icon: 'database',
            type: 'fas'
        },
        {
            title: 'My Sql',
            icon: 'database',
            type: 'fas'
        },
        {
            title: 'Node JS',
            icon: 'node',
            type: 'fab'
        },
        {
            title: 'HTML5',
            icon: 'html5',
            type: 'fab'
        },
        {
            title: 'CSS3',
            icon: 'css3-alt',
            type: 'fab'
        },
        {
            title: 'JQuery',
            icon: 'js',
            type: 'fab'
        },
        {
            title: 'Google Firebase',
            icon: 'gripfire',
            type: 'fab'
        },
        {
            title: 'Adobe Photoshop',
            icon: 'image',
            type: 'fas'
        },
        {
            title: 'Adobe Premiere',
            icon: 'video',
            type: 'fas'
        },
        {
            title: 'Adobe After Effects',
            icon: 'adobe',
            type: 'fab'
        },
        {
            title: 'Final Cut Pro',
            icon: 'video',
            type: 'fas'
        }
    ]

  const listItems = credArr.map( (v,i) => (
            <li key= {i} > 
                <FontAwesomeIcon id='aboutCredIcon' className='fa' icon={[v.type, v.icon]} />
                {'   '+v.title} 
            </li>
    ))

    const contentSwitcher = () => {
        if(display){
            return (
                <Fragment>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                {listItems}
                </Fragment>
            )
        }

    }


    return (
        <div>
            <Swiper swipeLeft='Portfolio' swipeRight='Home'/>
            <div id='tempcontainer'>
                <h1 className='pageTitle' style={{fontFamily: 'Poiret One, cursive'}}>this.Guy</h1>
                    <div id='aboutPic'><img src={mePic} alt='Iron Man Avatar' /></div>
                    <Text id='aboutText' pose = {display ? 'show' : 'hide' } >
                        {contentSwitcher()}
                    </Text>
                    <Credentials id = 'aboutCredentials' pose={display ? 'hide' : 'show' } >
                        {contentSwitcher()}
                    </Credentials>
                <div id='aboutMoreContainer' onClick={ () => { setdisplay(!display) }} >
                    <i id='aboutMore' />
                    <div id='aboutMoreLabel'>more</div>
                </div>
            </div>
        </div>
    )
}

export default About;