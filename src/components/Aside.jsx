import React from 'react'
import logoPets1 from "assets/logoPets1.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faHome, faCashRegister, faShoppingBag, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile'
import PrivateComponent from './PrivateComponent';



const Aside = () => {

    const cerrarSesion = ()=>{
        logout({ returnTo: window.location.origin });
        localStorage.setItem('token', null);
    }

    const { isLoading, logout } = useAuth0();

    if (isLoading) return <h1>Loading...</h1>

    return (
            <nav className="sidebar">
                <div padding='20px'><img   className='bola' src={logoPets1} alt="" /></div>
                <span className="tituloSide">Pet Shop</span>

                <NavLink className="a" activeClassName='active' to='/Dashboard'>
                    <FontAwesomeIcon className="iconSide" icon={faHome}/>
                    Inicio
                </NavLink>
                <PrivateComponent roleList={['Administrador','Vendedor']}>
                    <NavLink className="a" activeClassName='active' to='/ventas'>
                        <FontAwesomeIcon className="iconSide" icon={faCashRegister}/>
                        Ventas
                    </NavLink>
                </PrivateComponent>
                <PrivateComponent roleList={['Administrador','Vendedor']}>
                    <NavLink className="a" activeClassName='active' to='/ListadoProductos'>
                        <FontAwesomeIcon className="iconSide" icon={faShoppingBag}/>
                        Productos
                    </NavLink>
                </PrivateComponent>
                <PrivateComponent roleList={['Administrador']}>
                    <NavLink className="a" activeClassName='active' to='/tablaGestionUsuarios'>
                        <FontAwesomeIcon className="iconSide" icon={faUsers}/>
                        Usuarios
                    </NavLink>
                </PrivateComponent>
                <button
                    className= "ButtonSalir"
                    onClick={() => cerrarSesion()}>
                    <FontAwesomeIcon className="iconSide" icon={faSignOutAlt}/>
                    Salir
                </button>
                <Profile/>
                
            </nav>
    )
};

export default Aside;
