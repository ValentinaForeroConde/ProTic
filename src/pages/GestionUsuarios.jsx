import React, {useState} from 'react'
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from 'elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from 'components/Input';

function GestionUsuarios() {

    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [idCompra, cambiarIdCompra] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [vendedor, cambiarVendedor] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        valores: /^\d{4,10}$/,
        fechas: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/
    }
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            idCompra.valido === 'true' &&
            fecha.valido === 'true' &&
            vendedor.valido === 'true'
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
                cambiarIdCompra({campo: '', valido:''});
                cambiarFecha({campo: '', valido:''});
                cambiarVendedor({campo: '', valido:''});

                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }

    return (
        <main className="guiGestionUsuarios">
           <Formulario action="" onSubmit={onSubmitForm}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    user="Nombre"
                    placeholdercont="Nombre de usuario"
                    name="nombre"
                    lenyenda= "El nombre solo admite letras"
                    expresionRegular={expresiones.nombre}
                />
                <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    tipo="text"
                    user="Apellido"
                    placeholdercont="Apellido de usuario"
                    name="apellido"
                    lenyenda= "El apellido solo admite letras"
                    expresionRegular={expresiones.nombre}
                />
                 <Input
                    estado={documento}
                    cambiarEstado={cambiarDocumento}
                    tipo="number"
                    user="Documento"
                    placeholdercont="N° ID del usuario"
                    name="documento"
                    lenyenda= "El Documento solo admite numeros, minimo 7 - maximo 14"
                    expresionRegular={expresiones.telefono}
                />
                <Input
                    estado={idCompra}
                    cambiarEstado={cambiarIdCompra}
                    tipo="number"
                    user="Id Compra"
                    placeholdercont="15468"
                    name="idCompra"
                    lenyenda= "No se puede modificar"
                    expresionRegular={expresiones.valores}
                />
                 <Input
                    estado={fecha}
                    cambiarEstado={cambiarFecha}
                    tipo="date"
                    user="Fecha"
                    name="fecha"
                    lenyenda= "Indique una fecha"
                    expresionRegular={expresiones.fechas}

                />
                <Input
                    estado={vendedor}
                    cambiarEstado={cambiarVendedor}
                    tipo="number"
                    user="Id Vendedor"
                    placeholdercont="N° ID del vendedor"
                    name="vendedor"
                    lenyenda= "El Documento solo admite numeros, minimo 7 - maximo 14"
                    expresionRegular={expresiones.telefono}
                />

                <ContenedorTerminos>
                    <Label>
                        <input type="checkbox" name="terminos" id="terminos"/>
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>

                {formularioValido === false  && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b> Por favor rellene el formulario correctamente.
                    </p>
                </MensajeError>}

                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>
           </Formulario>
        </main>
    );
}

export default GestionUsuarios
