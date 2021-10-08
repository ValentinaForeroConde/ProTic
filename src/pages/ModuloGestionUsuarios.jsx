import React, { useState, useEffect } from 'react'
import TablaGestionUsuarios from './TablaGestionUsuarios';
import * as server from './server';

const ModuloGestionUsuarios = () => {


    const [usuarios, setUsuarios]= useState([]);

    const listUsuarios = async()=>{
        try{
            const res = await server.listUsuarios();
            const data = await res.json();
            setUsuarios(data)
            console.log(data);

        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        listUsuarios();
    },[]);

    return (

        <div className="guiGestionUsuarios">
            {usuarios.map((usuarios) => (
                <TablaGestionUsuarios usuarios={usuarios}/>
            ))}
        </div>


    );
};

export default ModuloGestionUsuarios
