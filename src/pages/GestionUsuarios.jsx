import React, {useState} from 'react'
import { Formulario} from 'elements/Formularios';
import Input from 'components/Input';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function GestionUsuarios() {

    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [Rol, cambiarRol] = useState({campo:'', valido: null});
    const [Estado, cambiarEstado] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);



    const onSubmitForm = async(e) =>{
        e.preventDefault();
        const infUsuariosJson = {
            	"nombre": nombre.campo,
                "apellido": apellido.campo,
                "documento": documento.campo,
                "Rol": Rol.campo.value,
                "Estado": Estado.campo.value,
        }
        console.log(infUsuariosJson)
        const options = {
            method: 'POST',
            url: '',
            headers: { 'Content-Type': 'application/json' },
            data: { nombre: infUsuariosJson.nombre, apellido: infUsuariosJson.apellido, documento: infUsuariosJson.documento, Rol: infUsuariosJson.Rol, Estado: infUsuariosJson.Estado},
          };
          await axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });

        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            Rol.valido === 'true' &&
            Estado.valido === 'true'
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
                cambiarRol({campo: '', valido:''});
                cambiarEstado({campo: '', valido:''});

                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }
        const opcion1  = [
            {value:'administrador', label: 'Administrador'},
            {value:'vendedor', label: 'Vendedor'},
            {value:'pendiente', label: 'Pendiente'}
        ]
        const opcion2  = [
            {value:'pendiente', label: 'Pendiente'},
            {value:'autorizado', label: 'Autorizado'},
            {value:'no-autorizado', label: 'No Autorizado'}
        ]
    



    return (
        <main className="guiGestionUsuarios">
             <h2 className="tituloGestionVentas">Gestion Usuarios</h2>
            <button >
                <Link to='/TablaGestionUsuarios'>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </button>
           <Formulario action="" onSubmit={onSubmitForm}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    user="Nombre"
                    placeholdercont="Nombre de usuario"
                    name="nombre"
                    lenyenda= "El nombre solo admite letras"
                    expresionRegular={Expresiones.nombre}
                />
                <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    tipo="text"
                    user="Apellido"
                    placeholdercont="Apellido de usuario"
                    name="apellido"
                    lenyenda= "El apellido solo admite letras"
                    expresionRegular={Expresiones.nombre}
                />
                 <Input
                    estado={documento}
                    cambiarEstado={cambiarDocumento}
                    tipo="number"
                    user="Id Usuario"
                    placeholdercont="N° ID del usuario"
                    name="idUsuario"
                    lenyenda= "El Documento solo admite numeros, minimo 7 - maximo 14"
                    expresionRegular={Expresiones.telefono}
                />
                <Selects
                    estado={Rol}
                    cambiarEstado={cambiarRol}
                    tipo="text"
                    user="Rol"
                    placeholdercont="No Asignado"
                    name="rol"
                    lenyenda= "Administrador/ Vendedor / No Asignado"
                    expresionRegular={Expresiones.nombre}
                    opciones={opcion1}
                />

               <Selects
                    estado={Estado}
                    cambiarEstado={cambiarEstado}
                    tipo="text"
                    user="Estado"
                    placeholdercont="Pendiente"
                    name="estado"
                    lenyenda= "Pendiente / Autorizado / No Autorizado"
                    expresionRegular={Expresiones.nombre}
                    opciones={opcion2}
                />


                {formularioValido === false  && <AlertaError/> }
                <BotonCentrado
                    nombreBoton = "Actualizar"
                    mensajeBoton = "Actualización exitosa"
                    formularioValido = {formularioValido}
                />
           </Formulario>
        </main>
    );
}


export default GestionUsuarios
