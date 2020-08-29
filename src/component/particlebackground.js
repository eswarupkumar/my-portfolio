import React from 'react';
// import '../css/intro.css'
import '../css/particle.scss'

export default class Particle extends React.Component{
    render(){
        return(<>
            <div className="page-bg"></div>

            <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>
        </>)
    }
}