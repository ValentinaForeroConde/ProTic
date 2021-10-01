import React from 'react'
import {Bar,Boton} from 'elements/Layouts'
import { Link } from 'react-router-dom'
import Googlein from './Googlein'




const Navbar = () => {
    return (
        <div>
            <Bar>
                <Boton>INICIO</Boton>
                
             <Boton><Link to='/Ventas'>LOG</Link></Boton>
             <Googlein/>           
            </Bar>
            
        </div>
    )
}

export default Navbar
