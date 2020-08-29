import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin,faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import '../css/socialIcon.css'
// import { render } from 'node-sass'

export default class Social extends React.Component{
    render(){
        return(<>
            <ul className="social">
                <li><a href='https://github.com/eswarupkumar'target="_blank"><FontAwesomeIcon icon={faGithub}  size="2x" color="white" /></a></li>
                <li><a href="https://www.linkedin.com/in/e-swarup-kumar/"target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="white" /></a></li>
                <li><a href="https://www.instagram.com/_swarup._.kumar_/"target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" color="white" /></a></li>
                <li><a href="https://t.me/ESwarupKumar"target="_blank"><FontAwesomeIcon icon={faTelegramPlane} size="2x" color="white" /></a></li>
                <li><a href="mailto:eswarupk@gmail.com"target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x" color="white" /></a></li>
            </ul>
            
        
        </>)
    }
}