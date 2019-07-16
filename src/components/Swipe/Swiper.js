import React, {useContext, useState} from 'react';
import {Swipe, Position} from 'react-swipe-component';
import {PageContext} from '../Contexts/PageContext';
import {MenuContext} from '../Contexts/MenuContext';







const Swiper = (props) => {
  const [page, setPage] = useContext(PageContext)
  const [isOpen, setIsOpen] = useContext(MenuContext);
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const swipeDistance = 250;

    return(
      <Swipe 
      // onSwipe={() => console.log('On Swipe Fired') }
      // onSwipeEnd={() => console.log("Swipe Ended") }
      onSwipingLeft={ x => {
        setXpos(x);
          if(x<-1*(swipeDistance)){
          console.log('Swiped left', x)
          setPage(props.swipeLeft)
        }}}
      onSwipingRight = { x => {
        setXpos(x);
        if(x>swipeDistance){
          console.log("Swiped right", x) 
          setPage(props.swipeRight)
        }
        } }
      onSwipingUp =  { y => {
        setYpos(y);
        if(y< -1*(swipeDistance)){
          setIsOpen(!isOpen);
          console.log("Swiped up", y) 
        } }}
      onSwipingDown =  { y => {
        setYpos(y);
        if(y>swipeDistance){
        console.log("Swiped down", y) 
        setPage(props.swipeDown || 'Contact')
        } }}
      onSwipeListener = { p => {
        if (p.x !== 0) {
          console.log(`Swipe x: ${p.x}`)
        }
        if (p.y !== 0) {
          console.log(`Swipe y: ${p.y}`)
        }}
      }
      >
      <div id = 'testdiv' ></div>
      </Swipe>
    )
}

export default Swiper;