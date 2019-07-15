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
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: color,
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: open ? 'rotate(45deg)':'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0: 1,
      transform: open ? 'translateX(-16px)':'none',
    },
    lineBottom: {
      transform: open ? 'translateX(-1px) rotate(-45deg)':'none',
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








// /* MenuButton.jsx */
//   class MenuButton extends React.Component {
//     constructor(props){
//       super(props);
//       this.state={
//         open: this.props.open? this.props.open:false,
//         color: this.props.color? this.props.color:'black',
//       }
//     }
  
    // componentWillReceiveProps(nextProps){
    //   if(nextProps.open !== this.state.open){
    //     this.setState({open:nextProps.open});
    //   }
    // }
    
    // handleClick(){
    // this.setState({open:!this.state.open});
    // }
    
  //   render(){
  //     const styles = {
  //       container: {
  //         height: '32px',
  //         width: '32px',
  //         display:'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         cursor: 'pointer',
  //         padding: '4px',
  //       },
  //       line: {
  //         height: '2px',
  //         width: '20px',
  //         background: this.state.color,
  //         transition: 'all 0.2s ease',
  //       },
  //       lineTop: {
  //         transform: this.state.open ? 'rotate(45deg)':'none',
  //         transformOrigin: 'top left',
  //         marginBottom: '5px',
  //       },
  //       lineMiddle: {
  //         opacity: this.state.open ? 0: 1,
  //         transform: this.state.open ? 'translateX(-16px)':'none',
  //       },
  //       lineBottom: {
  //         transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
  //         transformOrigin: 'top left',
  //         marginTop: '5px',
  //       },       
  //     }
  //     return(
  //       <div style={styles.container} 
  //         onClick={this.props.onClick ? this.props.onClick: 
  //           ()=> {this.handleClick();}}>
  //         <div style={{...styles.line,...styles.lineTop}}/>
  //         <div style={{...styles.line,...styles.lineMiddle}}/>
  //         <div style={{...styles.line,...styles.lineBottom}}/>
  //       </div>
  //     )
  //   }
  // }

  // export default MenuButton;