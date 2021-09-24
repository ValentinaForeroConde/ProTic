import React from 'react'
import { Formulario } from 'elements/Formularios';
function GestionUsuarios() {
    return (
        <main className="guiGestionUsuarios">
           <Formulario action="">
                <div>
                    <label htmlFor="">Usuario</label>
                    <input type="text" placeholder="usuario"/>
                    <p>texto visible</p>
                </div>
                <div>
                    <label htmlFor="">Usuario</label>
                    <input type="text" placeholder="usuario"/>
                    <p>texto visible</p>
                </div>
           </Formulario>
        </main>
    );
}

export default GestionUsuarios
