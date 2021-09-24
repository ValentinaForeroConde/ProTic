import React from 'react'

function GestionUsuarios() {
    return (
        <div className="guiContainer">
            <h1 className="guititle">Gestion de usuarios</h1>
            <form action="" className="busquedaUsuario">
                    <select className="guiclassName" name="user-id" id=""></select>
                        <option value="">Id Usuario</option>
                        <option value="">Identificación</option>
                    <input className="guiclassName" type="text" id="user-name" placeholder="Id del usuario/ Documento de identidad" required></input>
                    <button className="guiclassName">Buscar</button>
            </form>
            {/* <form action="" className="gestionUsuarios">
                    <fieldset className="guiDatos">
                        <label className="guiLabel" for="">Nombre:</label>
                        <input type="text" id="user-name" value="Nombre del usuario"></input>
                        <label className="guiLabel" for="">Apellido:</label>
                        <input type="text" id="user-name" value="Apellido del usuario" ></input>
                        <label className="guiLabel" for="">Documento:</label>
                        <input type="number" id="user-name" value="10000000" ></input>
                        <label className="guiLabel" for="">Telefono:</label>
                        <input type="number" id="user-name" value="317213543" ></input>
                        <label className="guiLabel" for="">Rol:</label>
                        <select name="user-id" id="">
                            <option value="">Gerente Comercial</option>
                            <option value="">Director</option>
                            <option value="">Operario</option>
                            <option value="">Ejecutivo</option>
                            <option value="">Administrador</option>
                            <option value="">Vendedor</option>
                        </select>
                        <label for="">Id Usuario:</label>
                        <input type="text" id="user-name" value="Id Usuario" readonly></input>
                    </fieldset>
                    <fieldset className="guiModulos">
                        <input type="checkbox" id="" value=""> <label for="">Modulo 1</label></input>
                        <input type="checkbox" id="" value=""> <label for="">Modulo 2</label></input>
                        <input type="checkbox" id="" value=""> <label for="">Modulo 1</label></input>
                        <input type="checkbox" id="" value=""> <label for="">Modulo 1</label></input>
                        <input type="checkbox" id="" value=""> <label for="">Modulo 1</label></input>
                        <button>Actualizar</button>
                    </fieldset>
            </form> */}
        </div>
    );
}

export default GestionUsuarios
