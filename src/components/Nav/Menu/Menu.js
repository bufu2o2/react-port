import React, {useContext} from 'react';
import {MenuContext} from '../../Contexts/MenuContext';

const Menu = props => {


// console.log('this is menu items in menu    ', props.menuItems)

  const [isOpen, setIsOpen] = useContext(MenuContext);
  



  const styles={
    container: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: isOpen? '100%': 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: '#daa520',
      opacity: 0.95,
      color: '#fafafa',
      transition: 'height 0.3s ease',
      zIndex: 2,
    },
    menuList: {
      zindex: 5,
      height: '100%',
      width: '100&',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-Around',
      alignItems: 'space-around',
      opacity: 1,
      background: '#daa520',
    }
  }


  return (
    <div style={styles.container}>
    {
      isOpen ? <div id = 'menuitemlist' style = {styles.menuList}> {props.menuItems}</div>
        :
        null
    }
  </div>
  )
}

  export default Menu