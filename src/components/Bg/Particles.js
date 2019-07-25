import React, {Fragment, useState} from 'react';
import './style.css';
import posed from 'react-pose';




const RedToggle = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        background: 'radial-gradient(circle at 75% 25%, white 1px, #ff6347 3%, #8b0000 60%, #ff6347 100%)',
        scale: 1,
        boxShadow: '0px 0px 0px 0px #ff6347'
    },
    hover: {
    scale: 1,
    boxShadow: '0px 0px 20px 5px #ff6347',
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 0px 10px 10px #ff6347'
},
})

const GreenToggle = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        background: 'radial-gradient(circle at 75% 25%, white 1px, #90ee90 3%, #0ab10a 60%, #90ee90 100%)',
        scale: 1,
        boxShadow: '0px 0px 0px 0px #90ee90'
    },
    hover: {
    scale: 1,
    boxShadow: '0px 0px 20px 5px #90ee90',
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 0px 5px 2px #90ee90'
},
    
    // {
    //     // background: 'radial-gradient(circle at 75% 25%, white 1px, red 3%, darkgreen 60%, lightgreen 100%)',
        
    // }
})

const Particles = () => {

    const [particles, setParticles] = useState(true);


    const pToggler = () => {
        if(particles){
            return(
                <GreenToggle className='particleToggle greenToggle' onClick={() => {setParticles(!particles)}}>
                    {/* <span>on</span> */}
                </GreenToggle>
            )
        } else{
            return(
                <RedToggle className='particleToggle redToggle' onClick={() => {setParticles(!particles)}}>
                    {/* <span>off</span> */}
                </RedToggle>
            )
        }
    }

    const bgToggler = () => {
        if(!particles){
            return(
                <div style={{position: 'fixed', width: '100%', height: '100%', background: '#000', zIndex: '-1'}} />
            )
        } else{
            return(
                null
            )
        }
    }

    console.log('particle status: ',particles)

    return(
        <Fragment>
        {bgToggler()}
        <div id = 'particles-js' />
        {pToggler()}
        </Fragment>
    )
}

export default Particles;