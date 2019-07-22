import React, {} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';
import posed from 'react-pose';


const SocialNav = posed.nav({
    'enter': {
        x: 0,
        opacity: 1,
        staggerChildren: 100
    },
    'exit': {
        x: '-100%',
        opacity: 0
    },
})


const SocialMedia = props => {
    const sites = [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/huangjake'
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/actionjake/'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/jake-huang-52a8a8b4/'
        },
        {
            name: 'github',
            link: 'https://github.com/bufu2o2/'
        },
    ]

    const socials = sites.map((v,i) => {
        return(
            <li key={i+v}>
            <a href={v.link} target='_blank' className='btn .social-btns' value={v.name}>
                <span id='socialspan'>{v.name}</span><FontAwesomeIcon id='fai' className='fa' icon={['fab', v.name]} />
            </a>
            </li>
        )
    })


    return (
        <SocialNav className ='social' pose= {props.mis ? 'enter' : 'exit'}>
            <ul>
                {socials}
            </ul>
        </SocialNav>
            

    )
}

export default SocialMedia;