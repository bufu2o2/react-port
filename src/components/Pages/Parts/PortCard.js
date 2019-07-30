import React, {useState, Fragment, useContext} from 'react';
import posed  from 'react-pose';
import './css/PortCard.css';
import {MenuContext} from '../../Contexts/MenuContext';



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
    const [isOpen, setIsOpen] = useContext(MenuContext);
    

    const stylePicker = () => {
        if((active === 'all') && !isOpen){
            return(
                {
                    transform: 'scale(.33)',
                    position: 'static',
                    height: '5vh',
                    zIndex: 20,
                    transition: "transform .25s ease-in-out"
                }
            )
        } else if((active === 'all') && isOpen){
            return(
                {
                    zIndex: -500
                }
            )
        }else if ((active === props.num) && isOpen){
            return(
                {
                    zIndex: -500, 
                }
            )
        } else if ((active === props.num) && !isOpen){
            return(
                {
                    transform: 'scale(1)', 
                    position: 'absolute', 
                    zIndex: 100, 
                    top: '0vh', 
                    left: 0,
                    transition: "transform .25s ease-in-out"
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

    const titleFontSize = title => {
        let x = title.length;
        let size = 10 / x;
        return (size+'vh');
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
            <div className='portCardTitle' style={ active === 'all' ? { color: 'goldenrod', bottom: 'calc(50% - 5vh)', fontSize: '10vh' } : { color: 'goldenrod', bottom: '-8vh', fontSize: '8vh', backgroundColor: 'transparent' } }>
                {props.title}
            </div>
            <div id='appearContainer' style={ active === 'all' ? { display: 'none', transform: 'scale(.33)' } : { display: 'grid', transform: 'scale(1)'}}>
                <p>{ props.summary} </p>
                <a href={props.url} target='_blank'> Link </a>
                <a href={props.git} target='_blank'> GitHub </a>
            </div>
            
        </BigSmall>
        </div>
     )
}

export default PortCard;