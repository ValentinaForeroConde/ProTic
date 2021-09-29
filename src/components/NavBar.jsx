import React from 'react'
import {Bar,Boton} from 'elements/Layouts'



const Navbar = () => {
    return (
        <div>
            <Bar>
                <Boton>INICIO</Boton>
                
             <Boton><a href="/">LOG</a></Boton>           
            </Bar>
            
        </div>
    )
}

export default Navbar
