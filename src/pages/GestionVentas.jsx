import React, {useState} from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';

const GestionVentas = () => {
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            idVendedor.valido === 'true' &&
            fecha.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
                cambiarIdVendedor({campo: '', valido:''});
                cambiarFecha({campo: '', valido:''});
                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }
    return (
        <main>
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
                 {formularioValido === false  && <AlertaError/>}
                <BotonCentrado 
                    nombreBoton = "Finalizar venta"
                    mensajeBoton = "Venta registrada exitosamente"
                    formularioValido = {formularioValido}
                />
            </Formulario>
            
        </main>
    )
}

export default GestionVentas
