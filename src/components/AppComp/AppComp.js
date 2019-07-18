import React, {Fragment, useContext} from 'react';

//Page Import ============================================================================
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

//Other Import ==========================================================================
import Nav from '../Nav/Nav';
import {PageContext} from '../Contexts/PageContext';
import {SwipeRContext} from '../Contexts/SwipeRContext';
import {SwipeLContext} from '../Contexts/SwipeLContext';
import {SwipeDContext} from '../Contexts/SwipeDContext';
// import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import posed from 'react-pose';



const Transition = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    y: 0
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
    y: '200%'
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
    
    const dChecker = () => {
      if(!swipeLeft){ return (swipeLeft ? 'enter' : 'left')}
      if(!swipeRight){ return (swipeRight ? 'enter' : 'right')}
      if(!swipeDown){ return (swipeDown ? 'enter' : 'down')}
      if(swipeDown || swipeRight || swipeLeft){ return (swipeDown ? 'enter' : 'down')}
    }

// console.log('swipe right: ', swipeRight, ' swipeleft: ', swipeLeft, " swipeDown: ", swipeDown)
    switch (page) {
        case 'Home':
            return(
                <Fragment>
                <Nav />
                <Transition pose={dChecker()}>
                  <Home />
                </Transition>
                </Fragment>
            )

        case 'About':
            return(
                <Fragment>
                <Nav />
                <Transition pose={dChecker()}>
                  <About />
                </Transition>
                </Fragment>
            )

        case 'Portfolio':
            return(
                <Fragment>
                <Nav />
                <Transition pose={dChecker()}>
                  <Portfolio />
                </Transition>
                </Fragment>
            )

        case 'Contact':
            return(
                <Fragment>
                <Nav />
                <Transition pose={dChecker()}>
                  <Contact />
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