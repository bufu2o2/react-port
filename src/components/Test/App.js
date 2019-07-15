import MenuItem from './MenuItem'
import React, {useState} from 'react';
import Menu from './Menu';
import MenuButton from './MenuBtn';
import './App.css';



const App = () => {

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
      top: 0,
      left: 0,
      zIndex: '99',
      opacity: 0.9,
      display:'flex',
      alignItems:'center',
      background: 'black',
      width: '100%',
      color: 'white',
      fontFamily:'Lobster',
    },
    logo: {
      margin: '0 auto',
    },
    body: {
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      filter: menuOpen ? 'blur(2px)':null,
      transition: 'filter 10s ease',
    },
  }
const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
const menuItems = menu.map((val,index)=> {
  console.log('this is val inside of the menuitems map      ', val);
  return (
  
    <MenuItem val = {val} index = {index} delay = {index * 0.1}>{val}</MenuItem>
    )});

  return (
    <div>
    <div style={styles.container}>
      <MenuButton open={menuOpen} onClick={()=>handleMenuClick()} color='white'/>
      <div style={styles.logo}>Logo</div>
    </div>
    <Menu menuItems = {menuItems} open={menuOpen} onClick={()=>{handleLinkClick();}} />
    <div style={styles.body}>
    </div>
  </div>
  )
}








/* App.jsx */
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       menuOpen:false,
//     }
//   }
  
  // handleMenuClick() {
  //   this.setState({menuOpen:!this.state.menuOpen});
  // }
  
  // handleLinkClick() {
  //   this.setState({menuOpen: false});
  // }
  
  // render(){
  //   const styles= 
  //     {
  //       container:{
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         zIndex: '99',
  //         opacity: 0.9,
  //         display:'flex',
  //         alignItems:'center',
  //         background: 'black',
  //         width: '100%',
  //         color: 'white',
  //         fontFamily:'Lobster',
  //       },
  //       logo: {
  //         margin: '0 auto',
  //       },
  //       body: {
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         width: '100vw',
  //         height: '100vh',
  //         filter: this.state.menuOpen ? 'blur(2px)':null,
  //         transition: 'filter 10s ease',
  //       },
  //     }
  //   const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
  //   const menuItems = menu.map((val,index)=>{
  //     return (
  //       <MenuItem 
  //         key={index} 
  //         delay={`${index * 0.1}s`}
  //         name={val}
  //         onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
  //   });
    
//     return(
//       <div>
//         <div style={styles.container}>
//           <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
//           <div style={styles.logo}>Logo</div>
//         </div>
//         <Menu open={this.state.menuOpen}>
//           {menuItems}
//         </Menu>
//         <div style={styles.body}>
//         </div>
//       </div>
//     )
//   }
// }

export default App;