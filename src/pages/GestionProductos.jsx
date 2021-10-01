import React, {useState} from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonesProductos from 'components/BotonesProductos';
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
    const productoOpciones = [
        {value:'comida cachorros', label: 'Comida cachorros'},
        {value:'comida adultos', label: 'Comida adultos'},
        {value:'comida seca', label: 'Comida seca'},
        {value:'comida humeda', label: 'Comida humeda'},
        {value:'comida razasGrandes', label: 'Comida razas grandes'}
        ];
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
                    expresionRegular = {Expresiones.valores}
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
                    user = "Id-Producto"
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
                        options={productoOpciones}
                        placeholder = "Seleccione el producto"
                        isSearchable                     
                    />
                    
                    </div>
                    <Input 
                    user = "Cantidad Producto"
                    placeholdercont = "Cantidad Producto"
                    tipo = "number"
                    lenyenda = "Solo ingrese números para asignar una cantidad al producto"
                    expresionRegular = {Expresiones.cantidades}
                    name = "cantidadProducto"
                    estado = {cantidadProducto}
                    cambiarEstado = {cambiarCantidadProducto}
                    max = {3}
                    />
                    {formularioValido === false  && <AlertaError/>}
                
                <BotonesProductos 
                    nombreBoton = "Agregar"
                    mensajeBoton = "Producto agregado exitosamente"
                    formularioValido = {formularioValido}
                />
                </Formulario>
        </main>
    )
};

export default GestionProductos;