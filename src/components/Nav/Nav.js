
import React, {useState, useEffect, useContext} from 'react';

//component import ==========================================
import MenuItem from './Menu/MenuItem'
import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuBtn';
import Modal from '../Pages/Parts/Modal';
import ContactForm from '../Pages/Parts/ContactForm';
import SocialMedia from '../Pages/Parts/SocialMedia';
import ContactMe from '../Pages/Parts/ContactMe';
import Resume from '../Pages/Parts/Resume';

//stylesheet =============================================
import './Menu/Menu.css';
import posed from 'react-pose';

//Context Import =============================================
import {MenuContext} from '../Contexts/MenuContext';
import {ModalContext} from '../Contexts/ModalContext';
import {PageContext} from '../Contexts/PageContext';
import {SwipeRContext} from '../Contexts/SwipeRContext';


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
  window.mobilecheck = function() {
    var check = false;
    (
      function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
      }
    )
    (navigator.userAgent||navigator.vendor||window.opera);
    // console.log('this is the mobile check', check);
    return check;
  };





    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useContext(MenuContext);
    const [misOpen, setMisOpen] = useContext(ModalContext);
    const [page, setPage] = useContext(PageContext);
    const [swipeRight, setSwipeRight] = useContext(SwipeRContext);

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
        zIndex: '200',
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
    //function to add window listener and remove it after click happens ==================================
    const windowClick = function(e) {
      if(e){
        setPageLoad(true);
        window.removeEventListener('click', windowClick);
        // console.log('winow click listener removed')
        document.removeEventListener( 'click', windowClick );
        // console.log('document click listener removed')
      }
    }
    useEffect(() => {
      if(window.mobilecheck()){
        setTimeout(() => {
            setPageLoad(!pageLoad);
        }, 500);
      }
    }, [])
    setTimeout(() => {
      //detect click anywhere on window =========================================
      window.addEventListener('click', windowClick);
      document.addEventListener('click', windowClick);
    }, 2000);











    const pageSetterLeft = () => {
      if(page === 'Home'){
        return 'Portfolio';
      } else if(page === 'Portfolio') {
        return 'About';
      } else if (page === 'About') {
        return 'Home';
      } else {
        return 'Home';
      }
    }
    const pageSetterRight = () => {
      if(page === 'Home'){
        return 'About';
      } else if(page === 'Portfolio') {
        return 'Home';
      } else if (page === 'About') {
        return 'Portfolio';
      } else {
        return 'Home';
      }
    }

    const arrowBtns = () => {
      if(!window.mobilecheck()){
        return (
          <div>
            <div id='leftBtnContainer' onClick={() => { 
              setTimeout(() => {
                if(pageSetterLeft() !== 'Contact' && pageSetterLeft() !== page){ setSwipeRight(false)}
              }, 200);
              setTimeout(() => {
                if(pageSetterLeft() === 'Contact'){ setMisOpen(true) }
                else{
                  // console.log('setPage set to : ', props.val)
                  setSwipeRight(true) 
                  setPage(pageSetterLeft())
                }
              }, 800);
              }}>
            <i id='leftBtn'  />
            <div id='leftBtnLabel'>{pageSetterLeft()}</div>
            </div>
              
            <div id='rightBtnContainer' onClick={() => { 
              setTimeout(() => {
                if(pageSetterRight() !== 'Contact' && pageSetterRight() !== page){ setSwipeRight(false)}
              }, 200);
              setTimeout(() => {
                if(pageSetterRight() === 'Contact'){ setMisOpen(true) }
                else{
                  // console.log('setPage set to : ', props.val)
                  setSwipeRight(true) 
                  setPage(pageSetterRight())
                }
              }, 800);
              }} >
            <i id='rightBtn' />
            <div id='rightBtnLabel'>{pageSetterRight()}</div>
              </div>
              
          </div>
       
      )
      } else {
        return(null)
      }
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
          {arrowBtns()}
          <SwipeIntro pose={pageLoad ? 'enter' : 'exit'} onClick={ () => { setPageLoad(true) }} id='swipetonav'>Swipe to Navigate</SwipeIntro>
          
        <ContactMe style={ isOpen ? {display: 'none'} : null} />
          <div id='socialmedia'>
            <SocialMedia mis={misOpen} />
            <Resume />
          </div>

          <div className='circleBase' id = 'navMenuBtn' style={styles.container}>
          
                <MenuButton open={isOpen} onClick={()=>handleMenuClick()} color='white'/>
            </div>
            <Menu menuItems = {menuItems} open={isOpen} onClick={()=>{handleLinkClick();}} />
            <ModalTrans id='modal' pose = {misOpen ? 'enter' : 'down'}>
              <Modal open={misOpen} component={<ContactForm />} title='Lets Talk!' />
            </ModalTrans>
        </div>
        
    )
}

export default Nav;