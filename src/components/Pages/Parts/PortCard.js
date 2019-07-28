import React, {useState, Fragment} from 'react';
import posed  from 'react-pose';
import './css/PortCard.css';



const BigSmall = posed.div({
    'small': {
        x: 0,
        y: 0,
        scale: '1',
        opacity: .8,
        // position: 'relative'
    },
    'large': {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        // position: 'fixed'
    }
})


const PortCard = props => {
    const [cardState, setCardState] = useState(true);
    const [active, setActive] = useState('all');


    return (
        <div 
        id='portCardContainer' 
        onClick={cardState ? () => { 
            setCardState(false); 
            setActive(props.num)
            } : null} 
            style={ active === props.num || 'all' ? (cardState ? { transform: 'scale(.25)', position: 'static' } : { transform: 'scale(1)', position: 'fixed', zIndex: 100, bottom: '10vh' }) : (cardState ? { transform: 'scale(.25)', position: 'inherit', pointerEvents: 'none', zIndex: 10 } : { transform: 'scale(1)', position: 'fixed', pointerEvents: 'none', zIndex: 10, bottom: '10vh' })}
            >
        <BigSmall className='portCard' pose={ cardState ? 'small' : 'large' }>
            <div id='portClose' onClick={() => { setCardState(true) }} >&times;</div>
            <img src = {props.img} alt={props.title}  />
            <div className='portCardTitle' style={ cardState ? { color: 'goldenrod', bottom: 'calc(50% - 9vh)', fontSize: '18vh' } : { color: 'goldenrod', bottom: '-10vh', fontSize: '10vh' } }>
                {props.title}
            </div>
            <div id='appearContainer' style={ cardState ? { display: 'none', transform: 'scale(.25)' } : { display: 'grid', transform: 'scale(1)'}}>
                <p>{ props.summary} </p>
                <a href={props.url} > Link </a>
                <a href={props.git} > GitHub </a>
            </div>
            
        </BigSmall>
        </div>
     )
}

export default PortCard;