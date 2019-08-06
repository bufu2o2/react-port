import React, { useContext } from 'react';
import {ModalContext} from '../../Contexts/ModalContext';
import posed from 'react-pose';
import resumeIcon from '../../../img/resumeW.png';
import './css/Resume.css';


const ResumeTrans = posed.div({
    draggable: true,
    hoverable: true,
    hover: { scale: .5 },
      init: { scale: .25 },
      drag: { 
        scale: .75,
    },
      dragEnd: {
        x: 0,
        y: 0,
        transition: { type: 'spring' } 
    },
    'show': {
        x: 0,
        delay: 800,
        opacity: 1
    },
    'hide': {
        x: '100vw',
        delay: 800,
        opacity: 0
    },
})


const Resume = () => {
    const [misOpen, setMisOpen] = useContext(ModalContext);

    return (
        <ResumeTrans 
        id='resumeContainer' 
        pose={ misOpen ? 'show' : 'hide' }
        onClick={ () => { console.log('clicked')}}
        >
            <img id = 'resume' src = {resumeIcon } />
            <div id='resumeLabel'> Resume </div>
        </ResumeTrans>
    )
}

export default Resume;