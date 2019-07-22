
import React, {useState, useEffect, useContext} from 'react';

//component import ==========================================
import MenuItem from './Menu/MenuItem'
import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuBtn';
import Modal from '../Pages/Parts/Modal';
import ContactForm from '../Pages/Parts/ContactForm';
import SocialMedia from '../Pages/Parts/SocialMedia';

//stylesheet =============================================
import './Menu/Menu.css';
import posed from 'react-pose';

//Context Import =============================================
import {MenuContext} from '../Contexts/MenuContext';
import {ModalContext} from '../Contexts/ModalContext';



//PoseComponent ===============================================
const MenuHolder = posed.div({
  // draggable: true,
      hoverable: true,
      init: { scale: 1, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
      hover: { scale: 1.5, boxShadow: '0px 10px 10px rgba(0,0,0,0.2)' },
      // drag: { scale: 1.1, boxShadow: '0px 2px 3px rgba(0,0,0,0.1)' }
})

const ModalTrans = posed.div({
  enter: {
    opacity: 1,
    y: 0
  },
  down: {
    opacity: 0,
    y: '-300%'
  },
  transition: {type: 'physics', velocity: 200},
})



const SwipeIntro = posed.div({
  'enter': {
      opacity: 0,
      y: '-100vh',
      duration: 500
  },
  'exit': {
      opacity: 1,
      y: 0,
      duration: 500
  }
})



//Component ==================================================
const Nav = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useContext(MenuContext);
    const [misOpen, setMisOpen] = useContext(ModalContext);

    const handleMenuClick = () => {
      setMisOpen(false);
      setIsOpen(!isOpen);
    }
    
    const handleLinkClick = () => {
      setIsOpen(false);
    }
  
    const styles= {
      container:{
        position: 'fixed',
        bottom: '30px',
        right: '10px',
        float: 'center',
        // textAlign: 'center',
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
        filter: isOpen || misOpen ? 'blur(2px)':null,
        transition: 'filter 1s ease',
      },
      modal: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        width: '100vw',
        height: '100vh',
        transition: 'filter 1s ease',
      }
    }

    //swipe nav directions on initial load=====================================================================
    const [pageLoad, setPageLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setPageLoad(!pageLoad);
        }, 500);
    }, [])
    setTimeout(() => {
        setPageLoad(true);
    }, 2000);


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
          <SwipeIntro pose={pageLoad ? 'enter' : 'exit'} id='swipetonav'>Swipe to Navigate</SwipeIntro>
          <div id='socialmedia'><SocialMedia mis={misOpen} /></div>
            <div className='circleBase' id = 'navMenuBtn' style={styles.container}>
                <MenuButton open={isOpen} onClick={()=>handleMenuClick()} color='white'/>
            </div>
            <Menu menuItems = {menuItems} open={isOpen} onClick={()=>{handleLinkClick();}} />
            <ModalTrans id='modal' pose = {misOpen ? 'enter' : 'down'}>
              <Modal open={misOpen} component={<ContactForm />} title='Lets Work Together!' />
            </ModalTrans>
        </div>
        
    )
}

export default Nav;