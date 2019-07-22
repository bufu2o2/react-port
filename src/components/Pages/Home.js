import React, {useState, useEffect} from 'react';
import posed from 'react-pose';
// import SplitText from 'react-pose-text';
import Intro from '../Text/Intro';
import Swiper from '../Swipe/Swiper';


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

const Transition = posed.div({
  enter: {
    filter: 'blur(5px)'
  },
  exit: {
    filter: 'blur(0px)'
  }
})

  const Drag = posed.div({
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
    const [fade, setFade] = useState(true);

    useEffect( () => { 
      setTimeout(() => {
        setFade(false);
      }, 1500);
    },[])
    
    return(
      <div className = 'pageTransition'>
        <Swiper swipeLeft = 'About' swipeRight = 'Portfolio' />
            <Transition pose={fade ? 'enter' : 'exit'} className = 'pageTitle'>
                <IntroHolder className = 'pointerHover' pose={isVisible ? 'enter': 'exit'} onClick={()=> {setIsVisible(!isVisible)}} >
                    <Drag><Intro /></Drag> 
                </IntroHolder>
                <WelcomeHolder className = 'pointerHover' pose={isVisible ? 'enter' : 'exit'} >
                {/* <SplitText charPoses={charPoses}>Welcome</SplitText> */}
                <Drag> Welcome </Drag>
                </WelcomeHolder>
            </Transition>
        </div>
    )
}

export default Home;