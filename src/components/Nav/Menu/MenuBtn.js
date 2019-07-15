import React, {useState, useEffect} from 'react';



const MenuBtn = props => {

  const [open, setOpen] = useState(props.open ? props.open : false);
  const [color, setColor] = useState(props.color ? props.color : 'black');

  useEffect( () => {
    if(props.open !== open){
      setOpen(props.open)
    }
  }, [props.open])

  const handleClick = () => { setOpen(!open) }

  const styles = {
    container: {
      height: '32px',
      width: '32px',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'crosshair',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: color,
      transition: 'all .8s ease',
    },
    lineTop: {
      transform: open ? 'translateX(3px) rotate(405deg)':'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0: 1,
      transform: open ? 'translateX(20px)':'none',
    },
    lineBottom: {
      transform: open ? 'translateX(2px) rotate(315deg)':'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },       
  }


  return (
    <div style={styles.container} 
    onClick={props.onClick ? props.onClick: 
      ()=> {handleClick()} }>
    <div style={{...styles.line,...styles.lineTop}}/>
    <div style={{...styles.line,...styles.lineMiddle}}/>
    <div style={{...styles.line,...styles.lineBottom}}/>
  </div>
  )
}

export default MenuBtn;