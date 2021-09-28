import React from "react";

const GestionProductos = () => {
    return (
        <div>
        <h1 className="productos-title">Administración de productos</h1>
        <button className="registrar-producto">Registrar producto</button>
        
            <form>
                <label for=""><input type="text" placeholder="ID o nombre"/></label>
                <button className="consultar-producto">Consultar producto</button>
            </form>
        
            <ul>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
                <li>Producto 4</li>
                <li>Producto 5</li>
            </ul>
        </div>
    );
};

export default GestionProductos;