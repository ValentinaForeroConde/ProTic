import React from 'react'
import {Side, Fila,Boton} from 'elements/Layouts'
import { Link } from 'react-router-dom'
//import Logo from 'assets/Logo.png'
import logoPets1 from "assets/logoPets1.png";
import { NavLink } from 'react-router-dom';



const Aside = () => {
    return (        
            <div className="sidebar">
                <div padding='20px'><img   className='bola' src={logoPets1} alt="" /></div>
                <NavLink className="a" activeClassName='active' to='Dashboard'>Inicio</NavLink>
                <NavLink className="a" activeClassName='active' to='ventas'>ventas</NavLink>
                <NavLink className="a" activeClassName='active' to='ListadoProductos'>Productos</NavLink>
                <NavLink className="a" activeClassName='active' to='tablaGestionUsuarios'>Usuarios</NavLink>
                <Link className="a" to=''>Salir</Link>
            </div>
        
    )
}

export default Aside
