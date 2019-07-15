import React, {useState} from 'react';


const MenuItem = props => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    console.log('handle hover fired')
    setHover(!hover);
    console.log('this is hover after mouse handler   ', hover)
  }

  const styles={
    container: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: `${props.delay}s`,
    },
    menuItem:{
      fontFamily:`'Open Sans', sans-serif`,
      fontSize: '1.2rem',
      padding: '1rem 0',
      margin: '0 5%',
      cursor: 'pointer',
      opacity: 1,
      color: hover? 'gray':'#fafafa',
      transition: 'color 0.2s ease-in-out',
      animation: '0.5s slideIn forwards',
      animationDelay: `${props.delay}s`,
      display: 'grid',
      alignItems: 'start'
    },
    line: {
      width: '30px',
      height: '1px',
      background: 'gray',
      margin: '0 auto',
      animation: '0.5s shrink forwards',
      animationDelay: `${props.delay}s`,
    }
  }


  return (
    <div style={styles.container} id = '1'>
    <div id = '2'
      style={styles.menuItem} 
      onMouseEnter={()=>{
        console.log('mouse entered')
        handleHover()}} 
      onMouseLeave={()=>{handleHover()}}
      onClick= {() => { console.log('click', props.val)}}
    >
      {props.children}  
    </div>
  {/* <div style={styles.line} id = 'menuLine'/> */}
</div>  
  )
}
  
 export default MenuItem;