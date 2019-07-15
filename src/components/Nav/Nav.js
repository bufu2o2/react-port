
import React, {useState} from 'react';

//component import ==========================================
import MenuItem from './Menu/MenuItem'
import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuBtn';

//stylesheet =============================================
import './Menu/Menu.css';

//Component ==================================================
const Nav = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    }
    
    const handleLinkClick = () => {
      setMenuOpen(false);
    }
  
    const styles= {
      container:{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        zIndex: '99',
        opacity: 0.9,
        display:'flex',
        alignItems:'center',
        background: 'grey',
        // width: '10',
        color: 'white',
        fontFamily:'Lobster',
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
        filter: menuOpen ? 'blur(2px)':null,
        transition: 'filter 1s ease',
      },
    }
  const menu = ['Home','About','Portfolio','Contact']
  const menuItems = menu.map((val,index)=> {
    // console.log('this is val inside of the menuitems map      ', val);
    return (
    
      <MenuItem key={index*3.141592659589} val = {val} index = {index} delay = {index * 0.1}>{val}</MenuItem>
      )});



    return (
        <div>
            <div className='circleBase' id = 'navMenuBtn' style={styles.container}>
                <MenuButton open={menuOpen} onClick={()=>handleMenuClick()} color='white'/>
                {/* <div style={styles.logo}>Logo</div> */}
            </div>
            <Menu menuItems = {menuItems} open={menuOpen} onClick={()=>{handleLinkClick();}} />
            {/* <div style={styles.body} /> */}
        </div>


    )
}

export default Nav;