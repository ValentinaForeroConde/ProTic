import React from 'react'
import { Link } from 'react-router-dom'
import logoPets1 from "assets/logoPets1.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faHome, faCashRegister, faShoppingBag, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
    return (        
            <nav className="sidebar">
                <div padding='20px'><img   className='bola' src={logoPets1} alt="" /></div>
                <span className="tituloSide">Pet Shop</span>
                
                <NavLink className="a" activeClassName='active' to='Dashboard'>
                    <FontAwesomeIcon className="iconSide" icon={faHome}/>
                    Inicio
                </NavLink>
                <NavLink className="a" activeClassName='active' to='ventas'>
                    <FontAwesomeIcon className="iconSide" icon={faCashRegister}/>
                    Ventas
                </NavLink>
                <NavLink className="a" activeClassName='active' to='ListadoProductos'>
                    <FontAwesomeIcon className="iconSide" icon={faShoppingBag}/>
                    Productos
                </NavLink>
                <NavLink className="a" activeClassName='active' to='tablaGestionUsuarios'>
                    <FontAwesomeIcon className="iconSide" icon={faUsers}/>
                    Usuarios
                </NavLink>
                <Link className="a" to=''>
                    <FontAwesomeIcon className="iconSide" icon={faSignOutAlt}/>
                    Salir
                </Link>
            </nav>
        
    )
};

export default Aside;
