import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin,faInstagram,faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import '../css/footer.css'
export default class Footer extends React.Component{
    render(){
        return(<>
            <div className='footer'>
                <div className='social-icon'>
                    <ul>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faGithub}   size="2x" color="white"/></a></li>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faLinkedin}  size="2x" color="white"/></a></li>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faInstagram}  size="2x" color="white"/></a></li>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faTelegramPlane}  size="2x" color="white"/></a></li>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faEnvelope}  size="2x" color="white"/></a></li>
                    </ul>
                </div>
                <div className='modules'>
                    <ul className='links'>
                        <li  className='m-li'><a href='/'>Home</a></li>
                        <li className='m-li'><a href='/about'>About</a></li>
                        <li className='m-li'><a href='/projects'>Projects</a></li>
                        <li className='m-li'><a href='/contact'>Contact</a></li>
                    </ul>

                </div>
                <div className='end-note'>
                    <div className='name'>
                        <h1 style={{color:"white"}}>󠀾╠ E Swarup K󠀾umar ╣</h1>
                        <h3 style={{color:"white"}}>Web Developer</h3>
                        <p>(>‿◠)✌</p>
                        <p>Creating stuff with ❤️ ! </p>
                        <a href='eswarupk@gmail.com'>eswarupk@gmail.com</a>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2020 E Swarup Kumar. All rights reserved.</p>
                    </div>

                </div>

            </div>

        </>)
    }
}