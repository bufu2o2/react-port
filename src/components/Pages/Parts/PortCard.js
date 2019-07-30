import React, {useState, Fragment} from 'react';
import posed  from 'react-pose';
import './css/PortCard.css';



const BigSmall = posed.div({
    'small': {
        x: 0,
        y: 0,
        scale: '1',
        opacity: .8,
    },
    'large': {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
    }
})


const PortCard = props => {
    const [active, setActive] = useState('all');


    const stylePicker = () => {
        if(active === 'all'){
            return(
                {
                    transform: 'scale(.25)',
                    position: 'static',
                    height: '5vh',
                    zIndex: 20
                }
            )
        } else if (active === props.num){
            return(
                {
                    transform: 'scale(1)', 
                    position: 'fixed', 
                    zIndex: 100, 
                    bottom: '10vh', 
                    left: 0
                }
            )
        } else{
            return(
                {
                    backgroundColor: 'red'
                }
            )
            }
        }


    return (
        <div 
        id='portCardContainer' 
        onClick={active === 'all' ? () => { 
            setActive(props.num)
            } : null} 
            style={stylePicker()}
            >
        <BigSmall className='portCard' pose={ active === 'all' ? 'small' : 'large' }>
            <div id='portClose' onClick={() => { setActive('all') }} >&times;</div>
            <img src = {props.img} alt={props.title}  />
            <div className='portCardTitle' style={ active === 'all' ? { color: 'goldenrod', bottom: 'calc(50% - 9vh)', fontSize: '18vh' } : { color: 'goldenrod', bottom: '-10vh', fontSize: '10vh' } }>
                {props.title}
            </div>
            <div id='appearContainer' style={ active === 'all' ? { display: 'none', transform: 'scale(.25)' } : { display: 'grid', transform: 'scale(1)'}}>
                <p>{ props.summary} </p>
                <a href={props.url} > Link </a>
                <a href={props.git} > GitHub </a>
            </div>
            
        </BigSmall>
        </div>
     )
}

export default PortCard;