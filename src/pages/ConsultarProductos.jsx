import React from 'react'

const ConsultarProductos = () => {
    return (
        <div>
            <h1>Consultar productos</h1>
            <ul>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
                <li>Producto 4</li>
                <li>Producto 5</li>
            </ul>
            <form>
                <label for=""><input type="submit"/>ID o nombre</label>
                <button>Buscar producto</button>
            </form>
        </div>

    )
}

export default ConsultarProductos;