import React, {useState, useEffect, useContext} from 'react';
import posed from 'react-pose';
// import SplitText from 'react-pose-text';
import Intro from '../Text/Intro';
import Swiper from '../Swipe/Swiper';
import {FirstLoadContext} from '../Contexts/FirstLoad'


const IntroHolder = posed.div({
    init: { scale: 1 },
    'open': { 
    y: 'calc(100vh * .25)', 
    opacity: 1, 
    delay: 200,
    filter: 'blur(0px)',
    display: 'inline-flex'
  },
    'close': { 
    y: 'calc(100vh * .5)',
    opacity: .2, 
    delay: 300,
    filter: 'blur(0px)',
    display: 'inline-flex'
  },
  transition: {
    type: 'physics',
    // damping: 10,
    stiffness: 1000,
  },
  'load': {
    filter: 'blur(5px)'
  },
  'loaded': {
    filter: 'blur(0px)'
  }
});
const WelcomeHolder = posed.div({
    'open': { 
    y: 'calc(100vh * .45)', 
    opacity: 1, 
    delay: 200,
  },
    'close': { 
    y: 'calc(100vh * 1)', 
    opacity: 1, 
    delay: 400, 
  },
  'load': {
    filter: 'blur(5px)'
  },
  'loaded': {
    filter: 'blur(0px)'
  }
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
        // transition: {
        //     type: 'spring',
        //     // damping: 10,
        //     // stiffness: 1000
        // }
//         }
//     };

//   const wordPoses = {
//     draggable: true
//   };

const Transition = posed.div({
  init: {fiilter: 'blur(0px)'},
  enter: {
    filter: 'blur(0px)'
  },
  exit: {
    filter: 'blur(5px)'
  }
})

  const Drag = posed.div({
    draggable: true,
    hoverable: true,
    hover: { scale: 2 },
      init: { scale: 1 },
      drag: { 
        scale: 3,
    },
      dragEnd: {
        x: 0,
        y: 0,
        transition: { type: 'spring' } 
    },
    'start': {
      x: 0,
      opacity: 1,
      color: 'goldenrod'
    },
    'change': {
      x: '-100vw',
      opacity: 0,
      color: '#FF4C3F'
    }
  })


const Home = () => {
  // Mobile Browser Checker ======================================================
  window.mobilecheck = function() {
    var check = false;
    (
      function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
      }
    )
    (navigator.userAgent||navigator.vendor||window.opera);
    console.log('this is the mobile check', check);
    return check;
  };
   
    const [isVisible, setIsVisible] = useState(false);
    const [fade, setFade] = useState(window.mobilecheck() ? true : false);
    const [phrase, setPhrase] = useState('pull up a chair');
    const [changeP, setChangeP] = useState(true);
    const [loaded, setLoaded] = useContext(FirstLoadContext);

    const randNum = x => Math.floor(Math.random() * x);
    const phraseArr  = [
      'pull up a chair',
      'bring the pups',
      'pour yourself some tea',
      'curious minds are welcome',
      'grab a nitro cold brew',
      'shh, the toddler is sleeping',
      "90's music encouraged",
    ]
    const randomPhrase = () =>{
      const num = randNum(phraseArr.length);
      if(phraseArr[num] !== phrase){
        setChangeP(false);
        setTimeout(() => {
          setPhrase(phraseArr[num]);
        }, 200);
        
        setTimeout(() => {
          setChangeP(true);
        }, 300);
      } else {
        randomPhrase();
      }}

    useEffect( () => { 
      if(!loaded){
        setTimeout(() => {
          setFade(false)
        }, 300);
        setTimeout(() => {
          setFade(true);
        }, 1800);
        setLoaded(true);
      }
    },[])
    
    return(
      <div className = 'pageTransition'>
        <Swiper swipeLeft = 'About' swipeRight = 'Portfolio' />
            <Transition pose={fade ? 'enter' : 'exit'} className = 'pageText'>
                <IntroHolder 
                className = 'pointerHover homeText' 
                pose={isVisible ? 'close': 'open'} 
                onClick={()=> {setIsVisible(!isVisible)}} 
                >
                    <Drag><Intro /></Drag> 
                </IntroHolder>
                <WelcomeHolder 
                className = 'pointerHover homeText' 
                pose={isVisible ? 'close' : 'open'} 
                >
                {/* <SplitText charPoses={charPoses}>Welcome</SplitText> */}
                <Drag pose={changeP ? 'start' : 'change'} onClick={ () => { randomPhrase() }}> {phrase} </Drag>
                </WelcomeHolder>
            </Transition>
        </div>
    )
}

export default Home;