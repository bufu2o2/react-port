import React, {useState, useContext} from 'react';
import {PageContext} from '../../Contexts/PageContext';
import {MenuContext} from '../../Contexts/MenuContext';
import {SwipeRContext} from '../../Contexts/SwipeRContext';

const MenuItem = props => {
  const [hover, setHover] = useState(false);
  const [page, setPage] = useContext(PageContext)
  const [isOpen, setIsOpen] = useContext(MenuContext);
  const [swipeRight, setSwipeRight] = useContext(SwipeRContext);

  const handleHover = () => {
    // console.log('handle hover fired')
    setHover(!hover);
    // console.log('this is hover after mouse handler   ', hover)
  }

  const styles={
    container: {
      opacity: 0,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      animation: '1s appear forwards',
      animationDelay: `${props.delay}s`,
    },
    menuItem:{
      fontFamily:`'Open Sans', sans-serif`,
      fontSize: '2rem',
      fontWeight: 800,
      padding: '1rem 0',
      cursor: 'crosshair',
      opacity: 1,
      color: hover? '#af1f24':'black',
      transition: 'color 0.2s ease-in-out',
      animation: '1s slideIn forwards',
      animationDelay: `${props.delay}s`,

    },
    line: {
      height: '1px',
      boxShadow: '1px 1px 3px',
      background: hover? '#af1f24':'#808080',
      margin: '0 auto',
      transition: 'color 0.2s ease-in-out',
      animation: '0.5s shrink forwards',
      animationDelay: `${props.delay+.1}s`,
      
    }
  }


  return (
    <div style={styles.container}>
    <div 
      style={styles.menuItem} 
      onMouseEnter={()=>{handleHover()}} 
      onMouseLeave={()=>{handleHover()}}
      onClick= {() => { 
          setIsOpen(!isOpen)
          setTimeout(() => {
            setSwipeRight(false);
          }, 500);
          setTimeout(() => {
            setSwipeRight(true);
            setPage(props.val)
          }, 1000);
        }
      }
    >
      {props.children}  
    </div>
  <div style={styles.line}/>
</div>  
  )
}
  
 export default MenuItem;