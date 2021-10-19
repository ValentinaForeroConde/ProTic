import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import {faUsers, faHome, faCashRegister, faShoppingBag, faSignOutAlt, faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";


const SideResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false)
    const cerrarSesion = ()=>{
        logout({ returnTo: window.location.origin });
        localStorage.setItem('token', null);
    }

    const { isLoading, logout } = useAuth0();

    if (isLoading) return <h1>Loading...</h1>
    return (
        <div>
            <FontAwesomeIcon  className="burger" size="2x" icon={mostrarNavegacion? faWindowClose : faBars} onClick={()=>setMostrarNavegacion(!mostrarNavegacion)} />
            <div className="responsive" padding='20px'>
                {mostrarNavegacion && (  
                <nav>
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
                    <button
                        className= "ButtonSalir"
                        onClick={() => cerrarSesion()}>
                        <FontAwesomeIcon className="iconSide" icon={faSignOutAlt}/>
                        Salir
                    </button>
                </nav>
                )}
            </div>
        </div>
    )
};

export default SideResponsive;
