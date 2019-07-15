import React, {useState, useEffect} from 'react';

const Menu = props => {


console.log('this is menu items in menu    ', props.menuItems)

  const [open, setOpen] = useState(props.open ? props.open : false)

  useEffect( () => {
    setOpen(props.open);
  }, [props.open]);


  const styles={
    container: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: open? '50%': 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent',
      opacity: 0.95,
      color: '#fafafa',
      transition: 'height 0.3s ease',
      zIndex: -2,
    },
    menuList: {
      zindex: 5,
      color: 'white',
      margin: '15px',
      opacity: 1,
      paddingTop: '3rem',
      background: 'black',
      width: '50%'
    }
  }


  return (
    <div style={styles.container}>
    {
      open ? <div id = 'menuitemlist' style = {styles.menuList}> {props.menuItems}</div>
        :
        null
    }
  </div>
  )
}

  export default Menu