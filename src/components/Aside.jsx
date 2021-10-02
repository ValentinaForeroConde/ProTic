import React from 'react'
import {Side, Fila,Boton} from 'elements/Layouts'
import { Link } from 'react-router-dom'
//import Logo from 'assets/Logo.png'
import logoPets1 from "assets/logoPets1.png";



const Aside = () => {
    return (        
            <Side>
                <div padding='20px'><img   className='bola' src={logoPets1} alt="" /></div>
                <Link to='Dasboard'><Fila>Inicio</Fila></Link>
                <Link to='ventas'><Fila>Ventas</Fila></Link>
                <Link to='ListadoProductos'><Fila>Productos</Fila></Link>   
                <Link to='tablaGestionUsuarios'><Fila>Usuarios</Fila></Link>                          
                <Link to=''><Fila>Salir</Fila></Link>
            </Side>
        
    )
}

export default Aside
