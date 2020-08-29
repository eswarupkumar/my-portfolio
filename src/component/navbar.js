import React from 'react';
import '../css/navbar.css'
import './nav_sub.js'
import ReactDOM from 'react-dom';

class NavBar extends React.Component{  
    
    render(){
        return (
            <>
                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="/">Home</a></li>
                        <li><a className="smoothscroll" href="/about">About</a></li>
                        <li><a className="smoothscroll" href="/projects">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>
            </>
        )
        
    }
}
export default NavBar