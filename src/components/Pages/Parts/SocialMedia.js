import React, {} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';
import posed from 'react-pose';


const SocialNav = posed.nav({
    'enter': {
        x: '0%',
        opacity: 1,
        delay: 500,
    },
    'exit': {
        x: '-100%',
        opacity: 0,
        delay: 400,
        transition: {duration: 300}
    },
})


const SocialMedia = props => {
    const sites = [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/huangjake',
            color: '#3b5998'
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/actionjake/',
            color: '#E56969'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/jake-huang-52a8a8b4/',
            color: '#027AB6'
        },
        {
            name: 'github',
            link: 'https://github.com/bufu2o2/',
            color: '#161414'
        },
    ]

    const socials = sites.map((v,i) => {
        return(
            <li key={i+v}>
            <a href={v.link}target='_blank' className='btn .social-btns' value={v.name}>
                {/* <span id='socialspan'></span> */}
                <FontAwesomeIcon  style={{color: v.color, border: '2px inset '+v.color}} id='fai' className='fa' icon={['fab', v.name]} />
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