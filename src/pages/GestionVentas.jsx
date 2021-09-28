import React, {useState} from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Select from 'react-select';

const GestionVentas = () => {
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const foodOptions = [
        {value: 'comida-perros-adultos', label: "Comida perros adultos"},
        {value: 'comida-perros-cachorros', label: "Comida perros cachorros"},
        {value: 'comida-perros-pelo-delgado', label: "Comida perros pelo delgado"}

    ]
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            idVendedor.valido === 'true' &&
            fecha.valido === 'true' && 
            cantidadProducto.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
                cambiarIdVendedor({campo: '', valido:''});
                cambiarFecha({campo: '', valido:''});
                cambiarCantidadProducto({campo: '', valido:''});
                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }
    return (
        <main>
<<<<<<< HEAD
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
=======
            <h2 className="tituloGestionVentas">Infomación de venta</h2>
            <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm}>
                <Input 
                    user = "Nombre"
                    placeholdercont = "Nombre cliente"
                    tipo = "text"
                    lenyenda = "El nombre solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "nombre"
                    estado = {nombre}
                    cambiarEstado = {cambiarNombre}
                 />
                 <Input 
                    user = "Apellido"
                    placeholdercont = "Apellido cliente"
                    tipo = "text"
                    lenyenda = "El apellido solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "apellido"
                    estado = {apellido}
                    cambiarEstado = {cambiarApellido}
                 />
                 <Input 
                    user = "Documento"
                    placeholdercont = "Documento cliente"
                    tipo = "number"
                    lenyenda = "El Documento solo admite numeros"
                    expresionRegular = {Expresiones.telefono}
                    name = "documento"
                    estado = {documento}
                    cambiarEstado = {cambiarDocumento}
                 />
                 <Input
                    estado={fecha}
                    cambiarEstado={cambiarFecha}
                    tipo="date"
                    user="Fecha"
                    name="fecha"
                    lenyenda= "Indique una fecha"
                    expresionRegular={Expresiones.fechas}

                />
                 <Input 
                    user = "Id-vendedor"
                    placeholdercont = "Id-vendedor"
                    tipo = "number"
                    lenyenda = "El Id solo admite numeros"
                    expresionRegular = {Expresiones.telefono}
                    name = "idVendedor"
                    estado = {idVendedor}
                    cambiarEstado = {cambiarIdVendedor}
                 />
                 <div>
                    <Select
                        options={foodOptions}
                        placeholder = "Seleccione el producto"
                        isSearchable                     
                    />
                     <button>+</button>
                 </div>
                 <Input 
                    user = "cantidadProducto"
                    placeholdercont = "cantidadProducto"
                    tipo = "number"
                    lenyenda = "Solo ingrese numeros para asignar una cantidad al producto"
                    expresionRegular = {Expresiones.telefono}
                    name = "cantidadProducto"
                    estado = {cantidadProducto}
                    cambiarEstado = {cambiarCantidadProducto}
                 />
                 {formularioValido === false  && <AlertaError/>}
                <BotonCentrado 
                    nombreBoton = "Finalizar venta"
                    mensajeBoton = "Venta registrada exitosamente"
                    formularioValido = {formularioValido}
                />
            </Formulario>
            
        </main>
>>>>>>> 810acafba767454f591fd04eed5cb0c887628cb7
    )
}

export default GestionVentas
