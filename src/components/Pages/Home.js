import React, {useState, useContext} from 'react';
import posed from 'react-pose';
// import SplitText from 'react-pose-text';
import Intro from '../Text/Intro';
import Swiper from '../Swipe/Swipe';
import {Swipe, Position } from 'react-swipe-component';
import {PageContext} from '../Contexts/PageContext';


const rnum = constraint => Math.random(Math.floor() * constraint);
const IntroHolder = posed.div({
    init: { scale: 1 },
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
// const charPoses = {
//     draggable: true,
//     hoverable: true,
//     hover: {
//       scale: 2,
//     },
//     drag: {
//         x: 10,
//       y: 10,
//       transition: ({ charInWordIndex }) => ({
//         type: 'spring',
//         velocity: 100 * Math.sin(1 + charInWordIndex),
//         damping: 0,
//         scale: 2,
//       })
//     },
//     dragEnd: {
//         x: 0,
//         y: 0,
//         transition: {
//             type: 'spring',
//             // damping: 10,
//             // stiffness: 1000
//         }
//         }
//     };

//   const wordPoses = {
//     draggable: true
//   };


  const Test = posed.div({
    draggable: true,
    hoverable: true,
    hover: {
      scale: 2,
    },
      init: { scale: 1 },
      drag: { 
        scale: 3,
    },
      dragEnd: {
        x: 0,
        y: 0,
        transition: { type: 'spring' } 
    }
  })


const Home = () => {
   
    const [isVisible, setIsVisible] = useState(true);
    const [page, setPage] = useContext(PageContext)
    
    return(
      <div className = 'pageTransition'>
        <Swipe 
          onSwipe={() => console.log('On Swipe Fired') }
          onSwipeEnd={() => console.log("Swipe Ended") }
          onSwipedLeft={ () => {
            console.log("Swiped left") 
            setPage('About')
            } }
          onSwipedRight = { () => {
            console.log("Swiped right") 
            setPage('Portfolio')
            } }
          onSwipeUpListener = { () => console.log("Swiped Up") }
          onSwipeDownListener = { () => console.log("Swiped down") }
          onSwipeListener = { p => {
            if (p.x !== 0) {
              console.log(`Swipe x: ${p.x}`)
            }
            if (p.y !== 0) {
              console.log(`Swipe y: ${p.y}`)
            }}
          }
          
          >
          <div id = 'testdiv' >hello world</div>
          </Swipe>
            <div className = 'pageTitle'>
                <IntroHolder className = 'box' pose={isVisible ? 'enter': 'exit'} onClick={()=> {setIsVisible(!isVisible)}} >
                    <Test><Intro /></Test> 
                </IntroHolder>
                <WelcomeHolder className = 'wholder' pose={isVisible ? 'enter' : 'exit'} >
                {/* <SplitText charPoses={charPoses}>Welcome</SplitText> */}
                <Test> Welcome </Test>
                </WelcomeHolder>
            </div>
        </div>
    )
}

export default Home;