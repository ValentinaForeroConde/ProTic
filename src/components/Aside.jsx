import React from 'react'
import {Side, Fila,Boton} from 'elements/Layouts'
import { Link } from 'react-router-dom'


const Aside = () => {
    return (        
            <Side>
                <Link to='Dasboard'><Fila>Inicio</Fila></Link>
                <Link to='ventas'><Fila>Ventas</Fila></Link>
                <Link to='GestionUsuarios'><Fila>Usuarios</Fila></Link>               
                <Link to=''><Fila>Salir</Fila></Link>
            </Side>
        
    )
}

export default Aside
