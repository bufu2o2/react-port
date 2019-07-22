import React, {Fragment, useContext, useState} from 'react';
import {Swipe} from 'react-swipe-component';
import {PageContext} from '../Contexts/PageContext';
import {MenuContext} from '../Contexts/MenuContext';
import {SwipeRContext} from '../Contexts/SwipeRContext';
import {SwipeDContext} from '../Contexts/SwipeDContext';
import {SwipeLContext} from '../Contexts/SwipeLContext';
import {ModalContext} from '../Contexts/ModalContext';
import SwipeBtn from './SwipeBtn';





const Swiper = (props) => {
  const [page, setPage] = useContext(PageContext)
  const [isOpen, setIsOpen] = useContext(MenuContext);
  const [swipeRight, setSwipeRight] = useContext(SwipeRContext);
  const [swipeLeft, setSwipeLeft] = useContext(SwipeLContext);
  const [swipeDown, setSwipeDown] = useContext(SwipeDContext);
  const [misOpen, setMisOpen] = useContext(ModalContext);
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const [opacityU, setOpacityU] = useState(0);
  const [opacityD, setOpacityD] = useState(0);
  const [opacityL, setOpacityL] = useState(0);
  const [opacityR, setOpacityR] = useState(0);
  const [swipeAction, setSwipeAction] = useState('');
  

  //functions =============================================================
    const zeroState = () => {
      setSwipeAction('');
        setOpacityD(0);
        setOpacityL(0);
        setOpacityR(0);
        setOpacityU(0);
        setXpos(0);
        setYpos(0);
    }

    return(
      <Fragment>
      <SwipeBtn 
        xpos={xpos}
        ypos={ypos}
        opacityUp={opacityU} 
        opacityDown={opacityD} 
        opacityLeft={opacityL} 
        opacityRight={opacityR} 
        left = {props.swipeRight} 
        right={props.swipeLeft} 
        down={"Nav"} 
        up={props.swipeDown || 'Contact'} 
      />
      <Swipe 
      // onSwipe={() => console.log('On Swipe Fired') }
      onSwipeEnd={() => {
        switch (swipeAction) {
          case 'd':
            setMisOpen(!misOpen);
            zeroState();
            break;
          case 'l':
            setTimeout(() => {
              setSwipeLeft(false);
            }, 300);
            setTimeout(() => {
              setSwipeLeft(true);
              setPage(props.swipeLeft)
            }, 1000);
            zeroState();
            break;
          case 'r':
            setTimeout(() => {
              setSwipeRight(false);
            }, 300);
            setTimeout(() => {
              setSwipeRight(true);
              setPage(props.swipeRight)
            }, 1000);
            zeroState();
            break;
          case 'u':
            setMisOpen(false);
            setIsOpen(true);
            zeroState();
            break;
          default:
            setMisOpen(false);  
            setIsOpen(false);
            zeroState();
            break;
        }
  
      }}
      detectMouse={false}
      detectTouch={true}
      delta = {200}
      onSwipingLeft={ x => {
        setXpos(x);
        setSwipeAction('l');
      }}
      onSwipingRight = { x => {
        setXpos(x);
        setSwipeAction('r');
        }}
      onSwipingUp = { y => {
        setYpos(y);
        setSwipeAction('u');
      }}
      onSwipingDown =  { y => {
        setYpos(y);
        setSwipeAction('d');
      }}
      onSwipe = { p => {
        if (p.x !== 0) {
          setXpos(p.x);
          let x = (((Math.floor(p.x)/2))/100);
           x > 0 ? setOpacityL(x) : setOpacityR(Math.abs(x));
         
            
          // console.log(`Swipe x: ${p.x} SetOpacity: LEFT${opacityL}   RIGHT${opacityR}`)
        }
        if (p.y !== 0) {
          setYpos(p.y);
          let y = (((Math.floor(p.y)/2))/100);
           y > 0 ? setOpacityU(y) : setOpacityD(Math.abs(y));
          // console.log(`Swipe y: ${p.y} SetOpacity: UP${opacityU}    DOWN${opacityD}`)
        }} 
      }
      >
      <div id = 'testdiv' ></div>
      </Swipe>
      </Fragment>
    )
}

export default Swiper;