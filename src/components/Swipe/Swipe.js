import React, {Fragment, useContext} from 'react';
import {Swipe, Position} from 'react-swipe-component';







const Swiper = () => {


    const onSwipeEnd = () => {
        console.log("Swipe Ended")
      }
    const onSwipeLeftListener = () => {
        console.log("Swiped left")
      }
    const onSwipeRightListener = () => {
        console.log("Swiped right")
      }
    const onSwipeUpListener = () => {
        console.log("Swiped Up")
      }
    const onSwipeDownListener = () => {
        console.log("Swiped down")
      }
    const onSwipeListener = (p) => {
        if (p.x !== 0) {
          console.log(`Swipe x: ${p.x}`)
        }
        if (p.y !== 0) {
          console.log(`Swipe y: ${p.y}`)
        }
      }

    return(
        <Swipe
        nodeName="div"
        className="test"
        onSwipeEnd={onSwipeEnd}
        onSwipedLeft={onSwipeLeftListener}
        onSwipedRight={onSwipeRightListener}
        onSwipedDown={onSwipeDownListener}
        onSwipedUp={onSwipeUpListener}
        onSwipe={() => console.log('On Swipe Fired')} />
    )
}

export default Swiper;