import React from 'react';
import '../css/arrowR.css'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ArrowR extends React.Component{
    render(){
        return(
        <>
            <a className='arrow'><FontAwesomeIcon icon={faArrowCircleRight} size="3x" color="white" /></a>
        </>)
    }
}
