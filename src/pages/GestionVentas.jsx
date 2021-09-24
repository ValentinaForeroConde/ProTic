import React from 'react'

const GestionVentas = () => {
    return (
        <main>
            <section>
                <h1>Registro de ventas</h1>
            </section>
            <section>
                <h2>Información cliente</h2>
                <form action="">
                    <label for="nombre">Nombre:</label>
                    <input type="text" placeholder="Nombre del cliente" id="nombre"/>
                    <label for="apellido">Apellido:</label>
                    <input type="text" placeholder="Apellido del cliente" id="apellido"/>
                    <label for="documento">Documento:</label>
                    <input type="number" placeholder="Documento del cliente" id="documento"/>
                    <label for="direccion">Dirección de entrega:</label>
                    <input type="text" placeholder="Dirección de entrega pedido" id="direccion"/>
                </form>
                <h2>Información del vendedor</h2>
                <form action="">
                    <label for="codigo">Código del vendedor:</label>
                    <input type="text" placeholder="Código del vendedor" id="codigo"/>
                </form>
            </section>
        <section>
            <h2>Información de compra:</h2>
            <div>
                <form action="">
                    <label for="">Items:</label>
                    <select>
                      <option value="item 1">Item 1</option>
                      <option value="item 2">Item 2</option>
                      <option value="item 3">Item 3</option>
                      <option value="item 4">Item 4</option>
                      <option value="item 5">Item 5</option>
                      <option value="item 6">Item 6</option>
                    </select>
                    <label for=""> #: </label>
                    <input type="number" placeholder="Cantidad"/>
                    <button>+</button>
                </form>
            </div>
            <div>
                <form action="">
                    <h3>Resumen de ventas:</h3>
                    <label for=""><input type="checkbox"/>Item 1</label>
                    <label for=""><input type="checkbox"/>Item 2</label>
                    <label for=""><input type="checkbox"/>Item 3</label>
                    <label for=""><input type="checkbox"/>Item 4</label>
                    <label for=""><input type="checkbox"/>Item 5</label>
                    <label for=""><input type="checkbox"/>Item 6</label>
                    <button>Delete</button>
                    <label for="">Total de compra:<input type="number" readonly/></label>
                    <button>Finalizar</button>
                </form>
            </div>
        </section>
    </main>
    )
}

export default GestionVentas
