import React, {useState, useContext} from 'react';
import posed from 'react-pose';
import Intro from '../SVG/Intro';


const rnum = constraint => Math.random(Math.floor() * constraint);
const IntroHolder = posed.div({
    enter: { y: 200, opacity: 1, delay: 300},
    exit: { y: 400, opacity: .2, delay: 300},
    transition: {type: 'physics', velocity: 1000},
    // transition: {type: 'spring', stiffness: 100, duration: 2000},
    // visible: {opacity: 1},
    // hidden: {opacity: 0}
});
const WelcomeHolder = posed.div({
    enter: { y: 400, opacity: 1, delay: 200},
    exit: { y: 1000, opacity: 0, delay: 450},
    transition: {type: 'physics', velocity: 1000},
})


const Home = () => {
   
    const [isVisible, setIsVisible] = useState(true);
    
    return(
        <div className = 'pageTransition'>
            <div className = 'pageTitle'>
                <IntroHolder className = 'box' pose={isVisible ? 'enter': 'exit'} onClick={()=> {setIsVisible(!isVisible)}} >
                    <Intro /> 
                </IntroHolder>
                <WelcomeHolder className = 'wholder' pose={isVisible ? 'enter' : 'exit'} >
                    Welcome
                </WelcomeHolder>
            </div>
        </div>
    )
}

export default Home;