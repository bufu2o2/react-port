
import React, {useContext} from 'react';

//component import ==========================================
import MenuItem from './Menu/MenuItem'
import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuBtn';

//stylesheet =============================================
import './Menu/Menu.css';
import posed from 'react-pose';

//Context Import =============================================
import {MenuContext} from '../Contexts/MenuContext';



//PoseComponent ===============================================
const MenuHolder = posed.div({
  // draggable: true,
      hoverable: true,
      init: { scale: 1, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
      hover: { scale: 1.5, boxShadow: '0px 10px 10px rgba(0,0,0,0.2)' },
      // drag: { scale: 1.1, boxShadow: '0px 2px 3px rgba(0,0,0,0.1)' }
})





//Component ==================================================
const Nav = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useContext(MenuContext);

    const handleMenuClick = () => {
      setIsOpen(!isOpen);
    }
    
    const handleLinkClick = () => {
      console.log('this is menu open before click     ', isOpen);
      setIsOpen(false);
      console.log('this is menu open after click     ', isOpen);
    }
  
    const styles= {
      container:{
        position: 'absolute',
        bottom: '30px',
        right: '10px',
        // left: side ? '' : '10px',
        zIndex: '99',
        opacity: 0.9,
        display:'flex',
        alignItems:'center',
        background: 'grey',
        // width: '10',
        color: 'white',
        fontFamily:'Lobster',
        // transform: side ? 'rotate(180deg)' : 'rotate(0deg)'
      },
      logo: {
        margin: '0 auto',
      },
      body: {
        background: 'black',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        width: '100vw',
        height: '100vh',
        filter: isOpen ? 'blur(2px)':null,
        transition: 'filter 1s ease',
      },
    }
  const menu = ['Home','About','Portfolio','Contact']
  const menuItems = menu.map((val,index)=> {
    // console.log('this is val inside of the menuitems map      ', val);
    return (
      <MenuHolder key = {index*3.141592659589}>
      <MenuItem key={index*3.141592659589} val = {val} index = {index} onClick={()=>{handleLinkClick();}} delay = {index * 0.1}>{val}</MenuItem>
      </MenuHolder>
      )});



    return (
        <div>
            <div className='circleBase' id = 'navMenuBtn' style={styles.container}>
                <MenuButton open={isOpen} onClick={()=>handleMenuClick()} color='white'/>
            </div>
            
            <Menu menuItems = {menuItems} open={isOpen} onClick={()=>{handleLinkClick();}} />
        </div>
    )
}

export default Nav;