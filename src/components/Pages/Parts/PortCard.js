import React, {useState, Fragment} from 'react';
import posed  from 'react-pose';
import './css/PortCard.css';



const BigSmall = posed.div({
    'small': {
        x: 0,
        y: 0,
        scale: '.25',
        opacity: .8,
        position: 'relative'
    },
    'large': {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        position: 'fixed'
    }
})


const PortCard = props => {
    const [cardState, setCardState] = useState(true);

    // setTimeout(() => {
    //     setCardState(false)
    // }, 2000);


    return (
        <div id='portCardContainer' style={ cardState ? { position: 'inherit' } : { position: 'fixed' }}>
        <BigSmall className='portCard' pose={ cardState ? 'small' : 'large' }>
            <img src = {props.img} alt={props.title}  />
            <div className='portCardTitle' style={ cardState ? { color: 'goldenrod', bottom: 'calc(50% - 9vh)', fontSize: '18vh' } : { color: 'goldenrod', bottom: '-10vh', fontSize: '10vh' } }>
                {props.title}
            </div>
            <div id='appearContainer' style={ cardState ? { display: 'none' } : { display: 'grid'}}>
                <p>{ props.summary} </p>
                <a href={props.url} > Link </a>
                <a href={props.git} > GitHub </a>
            </div>
            
        </BigSmall>
        </div>
     )
}

export default PortCard;