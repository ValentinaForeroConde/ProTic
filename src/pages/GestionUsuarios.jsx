import React from 'react'
import { Formulario, Label, GrupoInput, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from 'elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from 'components/Input';

function GestionUsuarios() {
    return (
        <main className="guiGestionUsuarios">
           <Formulario action="">
                <Input
                    tipo="text"
                    user="Nombre"
                    placeholdercont="Nombre de usuario"
                    name="nombre"
                    lenyenda= "El nombre solo admite letras"
                    expresionRegular=""
                />



                <ContenedorTerminos>
                    <Label>
                        <input type="checkbox" name="terminos" id="terminos"/>
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b> Por favor rellene el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
                </ContenedorBotonCentrado>
           </Formulario>
        </main>
    );
}

export default GestionUsuarios
