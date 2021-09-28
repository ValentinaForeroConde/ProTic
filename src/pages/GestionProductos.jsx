import React, {useState} from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Select from 'react-select';

const GestionProductos = () => {
    
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [descripcion, cambiarDescripcion] = useState({campo:'', valido: null});
    const [valor, cambiarvalor] = useState({campo:'', valido: null});
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
            descripcion.valido === 'true' &&
            valor.valido === 'true' &&
            idVendedor.valido === 'true' &&
            fecha.valido === 'true' && 
            cantidadProducto.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarDescripcion({campo: '', valido:''});
                cambiarvalor({campo: '', valido:''});
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
            <h2 className="tituloGestionVentas">Registro de productos</h2>
            <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm}>
                <Input 
                    user = "Nombre"
                    placeholdercont = "Nombre producto"
                    tipo = "text"
                    lenyenda = "El nombre solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "nombre"
                    estado = {nombre}
                    cambiarEstado = {cambiarNombre}
                 />
                 <Input 
                    user = "Descripcion"
                    placeholdercont = "Descripción producto"
                    tipo = "text"
                    lenyenda = "El descripción solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "descripcion"
                    estado = {descripcion}
                    cambiarEstado = {cambiarDescripcion}
                 />
                 <Input 
                    user = "valor"
                    placeholdercont = "valor producto"
                    tipo = "number"
                    lenyenda = "El valor solo admite números"
                    expresionRegular = {Expresiones.telefono}
                    name = "valor"
                    estado = {valor}
                    cambiarEstado = {cambiarvalor}
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
                    placeholdercont = "Id-Producto"
                    tipo = "number"
                    lenyenda = "El Id solo admite números"
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
                    user = "Cantidad Producto"
                    placeholdercont = "Cantidad Producto"
                    tipo = "number"
                    lenyenda = "Solo ingrese números para asignar una cantidad al producto"
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
    )
};

export default GestionProductos;