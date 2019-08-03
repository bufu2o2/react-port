import React, {Fragment, useState, useContext} from 'react';
import Swiper from '../Swipe/Swiper';
import mePic from '../../img/chibiIronman.png';
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Parts/css/AboutNav.css';
import { MenuContext } from '../Contexts/MenuContext';


const Text = posed.div({
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
const TextSwap = posed.div({
    'show': {
        x: '0',
        opacity: 1
    },
    'hide': {
        x: '-100vw',
        opacity: 0
    }
})


const About = () => {
    const [display, setdisplay] = useState(true);
    const [aboutText, setAboutText] = useState('Intro');
    const [isOpen, setIsOpen] = useContext(MenuContext);
    const [swap, setSwap] = useState(true);
    
//mobile check ===============================================================================================
    window.mobilecheck = function() {
        var check = false;
        (
          function(a){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
            check = true;
          }
        )
        (navigator.userAgent||navigator.vendor||window.opera);
        // console.log('this is the mobile check', check);
        return check;
      };

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

    const aboutFill = {
        Intro: `Hey! Thanks for stopping by - please allow me to introduce myself! My name is Jake Huang and 
        I am a highly motivated and extremely hard working individual.`,
        Programming: `I began my journey in full stack web development at UCLA Extension completing their full stack web development course 
        with an A+ and a love for programming! I truely enjoy all aspects of web development from the conceptualization to the creation of a project. 
        My personal challange is to make everything as intuitive and efficient as possible`,
        Film: `For the past 10 years I have been a Hollywood Stuntman / Stunt Rigger for film and TV. 
        Working on big budget films and having extremely tight deadlines has taught me to work well under high pressure situations ie Michael Bay 
        shouting at you while explosions are going off. 
        I commonly have to manage large teams of people while coordinating with other deparment heads. 
        Through all of this I have learned that I love to be creative, solve problems, and quick on my feet.`,
        Business: `I've always had a desire for creation, and a need to solve problems. After opening my first business in 2011 
        (Joining All Movement, aka JAM), this desire and need have grown exponentially. 
        Now I find myself putting together new business ideas for myself and others constantly - I'm addicted to creation and problem solving - 
        one day I would love to be a part of a team/group/company who is solving major world problems; for now I will continue doing what I can!`,
        Personal: `Things I love: Jumping, Climbing, Scuba, GOT, Marvel Universe, Food Network, Pixar, Anime, SonyA7RIII, Tea, Nitro Cold Brew, 90's Rock, 
        Escape Rooms, Puzzles, Learning, Thinking, Challenges, Kingdom Hearts, Final Fantasy, Traveling, Experience, Adventures, 
        Building, Thinking, Creating, Problem Solving, Growth, My Pups (Tum Tum & Munchkin)  -  
        and most importantly, being the best Father / Significant Other / Role Model that I can be`
    }

/* about text =======================================================================================================
    -- Intro --
    Hey! Thanks for stopping by - please allow me to introduce myself. 

    -- Personal --
    family
    hobbies
    likes

    --  Programming --
    ucla
    full stack web dev
    A+ grade

    -- Business --
    JAM
    Real Estate
    Entreprenur mindset
    Solve Problems in the world

    --  Film -- 
    For the past 10 years I have been a Hollywood Stuntman and Stunt Rigger for film and TV. 
    Big budget films and short timelines led to many high pressure situations where 
    I commonly have to manage large teams of people while coordinating with other deparment heads.  
    As a stunt rigger, other people's lives are on the line. 
    Engineering, unfaltering focus, and communication are imperative. 
    In the hours between filming I often shot and edited action sequences for the director's approval. 
    Through all of this I have learned that I love to be creative, solve problems, and quick on my feet.

=======================================================================================================================*/

    // console.log(aboutText)

  const listItems = credArr.map( (v,i) => (
            <li key= {i} > 
                <FontAwesomeIcon id='aboutCredIcon' className='fa' icon={[v.type, v.icon]} />
                {'   '+v.title} 
            </li>
    ))

    const navArr = [
        'Intro',
        'Programming',
        'Film',
        'Business',
        'Personal'
    ]

    const navDisplay = navArr.map( (v,i) => {
        return(
            <div 
            key = {i} 
            onClick={ () => { 
                setSwap(false);
                setTimeout(() => {
                    setAboutText(v)
                    setSwap(true);
                }, 200);
            }} 
            style = { aboutText === v ? {backgroundColor: 'goldenrod'} : {backgroundColor: null}}>
                {v}
            </div>
        )
    })

    const contentSwitcher = () => {
        if(display){
            return (
                <div>
                    <nav id = 'aboutnav'>
                        {navDisplay}
                    </nav>
                    
                    <TextSwap id='aboutP' pose = { swap ? 'show' : 'hide'}>
                        {aboutFill[aboutText]}
                    </TextSwap>
                </div>
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
            <div id='aboutContainer'>
                <h1 className='pageTitle' style={{fontFamily: 'Poiret One, cursive'}}>this.Guy</h1>
                    <div id='aboutPic'><img src={mePic} alt='Iron Man Avatar' /></div>
                    <Text id='aboutText' pose = {display ? 'show' : 'hide' } style={ window.mobilecheck() ? { margin: '0'} : { margin: '0 10vw'}}>
                        {contentSwitcher()}
                    </Text>
                    <Credentials id = 'aboutCredentials' pose={display ? 'hide' : 'show' } >
                        {contentSwitcher()}
                    </Credentials>
                <div id='aboutMoreContainer' style={ isOpen ? {display: 'none'} : null} onClick={ () => { setdisplay(!display) }} >
                    <i id='aboutMore' />
                    <div id='aboutMoreLabel'>more</div>
                </div>
            </div>
        </div>
    )
}

export default About;