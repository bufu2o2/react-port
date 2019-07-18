import React, {Fragment, useContext, useState} from 'react';
import {Swipe, Position} from 'react-swipe-component';
import {PageContext} from '../Contexts/PageContext';
import {MenuContext} from '../Contexts/MenuContext';
import {SwipeRContext} from '../Contexts/SwipeRContext';
import {SwipeDContext} from '../Contexts/SwipeDContext';
import {SwipeLContext} from '../Contexts/SwipeLContext';
import SwipeBtn from './SwipeBtn';





const Swiper = (props) => {
  const [page, setPage] = useContext(PageContext)
  const [isOpen, setIsOpen] = useContext(MenuContext);
  const [swipeRight, setSwipeRight] = useContext(SwipeRContext);
  const [swipeLeft, setSwipeLeft] = useContext(SwipeLContext);
  const [swipeDown, setSwipeDown] = useContext(SwipeDContext);
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const [opacityU, setOpacityU] = useState(0);
  const [opacityD, setOpacityD] = useState(0);
  const [opacityL, setOpacityL] = useState(0);
  const [opacityR, setOpacityR] = useState(0);
  

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
        setOpacityD(0);
        setOpacityL(0);
        setOpacityR(0);
        setOpacityU(0);
        setXpos(0);
        setYpos(0);
      }}
      detectMouse={false}
      detectTouch={true}
      delta = {200}
      onSwipingLeft={ x => {
        setXpos(x);
        setTimeout(() => {
          setSwipeLeft(false);
        }, 300);
        setTimeout(() => {
          setSwipeLeft(true);
          setPage(props.swipeLeft)
        }, 1000);
      }}
      onSwipingRight = { x => {
        setXpos(x);
        setTimeout(() => {
          setSwipeRight(false);
        }, 300);
        setTimeout(() => {
          setSwipeRight(true);
          setPage(props.swipeRight)
        }, 1000);
        }}
      onSwipingUp = { y => {
        setYpos(y);
          setIsOpen(!isOpen);
      }}
      onSwipingDown =  { y => {
        setYpos(y);
        setTimeout(() => {
          setSwipeDown(false);
        }, 300);
        setTimeout(() => {
          setSwipeDown(true);
          setPage(props.swipeDown || 'Contact')
        }, 1000);
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
        }} }
      >
      <div id = 'testdiv' ></div>
      </Swipe>
      </Fragment>
    )
}

export default Swiper;