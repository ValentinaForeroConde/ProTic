import React, {useState} from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonesProductos from 'components/BotonesProductos';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';

const GestionProductos = () => {
    
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [descripcion, cambiarDescripcion] = useState({campo:'', valido: null});
    const [valor, cambiarvalor] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [estado, cambiarEstado] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const productoDisponible = [
        {value:'Disponible', label: 'Disponible'},
        {value:'No disponible', label: 'No disponible'},
        ];
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            descripcion.valido === 'true' &&
            valor.valido === 'true' &&
            idVendedor.valido === 'true' &&
            estado.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarDescripcion({campo: '', valido:''});
                cambiarvalor({campo: '', valido:''});
                cambiarIdVendedor({campo: '', valido:''});
                cambiarEstado({campo: '', valido:''});
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
                    user = "Id-Producto"
                    placeholdercont = "Id-Producto"
                    tipo = "number"
                    lenyenda = "El Id solo admite números"
                    expresionRegular = {Expresiones.valores}
                    name = "idVendedor"
                    estado = {idVendedor}
                    cambiarEstado = {cambiarIdVendedor}
                    />
                   
                    <Selects 
                    user = "Estado"
                    placeholdercont = "Selecciona el estado"
                    tipo = "text"
                    lenyenda = "Solo ingrese disponible o no disponible"
                    expresionRegular = {Expresiones.nombre}
                    name = "estado"
                    estado = {estado}
                    cambiarEstado = {cambiarEstado}
                    opciones={productoDisponible}
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