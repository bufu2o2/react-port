import React, {Fragment, useContext} from 'react';

//Page Import ============================================================================
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';

//Other Import ==========================================================================
import Nav from '../Nav/Nav';
import {PageContext} from '../Contexts/PageContext';
import {SwipeRContext} from '../Contexts/SwipeRContext';
import {SwipeLContext} from '../Contexts/SwipeLContext';
import {SwipeDContext} from '../Contexts/SwipeDContext';
import {ModalContext} from '../Contexts/ModalContext';
// import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import posed from 'react-pose';



const Transition = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    // filter: 'blur(3px)',
  },
  exit: {
    opacity: 0,
    x: '-200%'
  },
  left: {
    opacity: 0,
    x: '-200%'
  },
  down: {
    opacity: 0,
    y: '1000%'
  },
  right: {
    opacity: 0,
    x: '200%'
  },
  transition: {type: 'physics', velocity: 200},
})

const AppComp = () => {

    const [page, setPage] = useContext(PageContext);
    // console.log('THIS IS THE PAGE THATS IMPORTING FROM USE CONTEXT ', page )
    const [swipeRight, setSwipeRight] = useContext(SwipeRContext);
    const [swipeLeft, setSwipeLeft] = useContext(SwipeLContext);
    const [swipeDown, setSwipeDown] = useContext(SwipeDContext);
    const [misOpen, setMisOpen] = useContext(ModalContext);
    
    const dChecker = () => {
      if(!swipeLeft){ return (swipeLeft ? 'enter' : 'left')}
      if(!swipeRight){ return (swipeRight ? 'enter' : 'right')}
      if(!swipeDown){ return (swipeDown ? 'enter' : 'down')}
      if(swipeDown || swipeRight || swipeLeft){ return (swipeDown ? 'enter' : 'down')}
    }

    const style = {
      filter: misOpen ? 'blur(3px)' : null
    }

// console.log('swipe right: ', swipeRight, ' swipeleft: ', swipeLeft, " swipeDown: ", swipeDown)
    switch (page) {
        case 'Home':
            return(
                <Fragment>
                <Nav />
                <Transition style={style} pose={dChecker()}>
                  <Home />
                </Transition>
                </Fragment>
            )

        case 'About':
            return(
                <Fragment>
                <Nav />
                <Transition style={style} pose={dChecker()}>
                  <About />
                </Transition>
                </Fragment>
            )

        case 'Portfolio':
            return(
                <Fragment>
                <Nav />
                <Transition style={style} pose={dChecker()}>
                  <Portfolio />
                </Transition>
                </Fragment>
            )
    }


    return(
        <Fragment>
          <h1>{page}</h1>
        </Fragment>



    )
}

export default AppComp;