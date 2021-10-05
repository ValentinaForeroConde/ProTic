import React from 'react'
import {Foot} from 'elements/Layouts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faFileSignature, faAtlas} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
<<<<<<< HEAD
        <div>
            <Foot>Pet Shop</Foot>            
        </div>
=======
        <Foot>
            <span> Contácta con nosotros </span>
            <span><FontAwesomeIcon icon={faPhone}/> - </span>
            <span> Términos y Condiciones </span>
            <span><FontAwesomeIcon icon={faFileSignature}/> - </span>
            <span> Política de privacidad </span>
            <span><FontAwesomeIcon icon={faAtlas}/></span>
        </Foot>            
>>>>>>> 86c87f2e5f81af4b752d3697600543dec55a3a4a
    )
}

export default Footer
