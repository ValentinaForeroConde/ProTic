import React, {useState, useEffect} from 'react'
import { Formulario} from 'elements/Formularios';
import Input from 'components/Input';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "@material-ui/core";
// import axios from 'axios';


function GestionUsuarios(props) {


    useEffect(
      () => {
        cambiarNombre({nombre, campo: props.currentUser.nombre, valido:'true'})
        cambiarApellido({apellido, campo: props.currentUser.apellido, valido:'true'})
        cambiarDocumento({documento, campo: props.currentUser.documento, valido:'true'})
        cambiarRol({Rol, campo: props.currentUser.Rol, valido:'true'})
        cambiarEstado({Estado, campo: props.currentUser.Estado, valido:'true'})
      },
      [ props ]
    )

    const [nombre, cambiarNombre] = useState({campo: '', valido: ''});
    const [apellido, cambiarApellido] = useState({campo:'', valido: ''});
    const [documento, cambiarDocumento] = useState({campo:'', valido: ''});
    const [Rol, cambiarRol] = useState({campo:'', valido: ''});
    const [Estado, cambiarEstado] = useState({campo:'', valido: ''});
    const [formularioValido, cambiarFormularioValido] = useState('');



    const onSubmitForm = async(e) =>{
        e.preventDefault();
        const infUsuariosJson = {
            	"nombre": nombre.campo,
                "apellido": apellido.campo,
                "documento": documento.campo,
                "Rol": Rol.campo,
                "Estado": Estado.campo,
        }
        console.log(infUsuariosJson)
        // const options = {
        //     method: 'POST',
        //     url: '',
        //     headers: { 'Content-Type': 'application/json' },
        //     data: { nombre: infUsuariosJson.nombre, apellido: infUsuariosJson.apellido, documento: infUsuariosJson.documento, Rol: infUsuariosJson.Rol, Estado: infUsuariosJson.Estado},
        //   };
        //   await axios
        //     .request(options)
        //     .then(function (response) {
        //       console.log(response.data);
        //     })
        //     .catch(function (error) {
        //       console.error(error);
        //     });

        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            Rol.valido === 'true' &&
            Estado.valido === 'true'
            ){
                cambiarFormularioValido(true);
                // cambiarNombre({campo: '', valido:''});
                // cambiarApellido({campo: '', valido:''});
                // cambiarDocumento({campo: '', valido:''});
                // cambiarRol({campo: '', valido:''});
                // cambiarEstado({campo: '', valido:''});

                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }
        const opcion1  = [
            {value:'0', label: 'Administrador'},
            {value:'1', label: 'Vendedor'},
            {value:'2', label: 'Pendiente'}
        ]
        const opcion2  = [
            {value:'0', label: 'Pendiente'},
            {value:'1', label: 'Autorizado'},
            {value:'2', label: 'No Autorizado'}
        ]


    return (
        <main className="guiGestionUsuarios">
             <h2 className="tituloGestionVentas">Gestion Usuarios</h2>
            <Tooltip title="Regresar" arrow >
                <Link to='/TablaGestionUsuarios'>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </Tooltip>
           <Formulario action="" onSubmit={onSubmitForm}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    DefVal={nombre.campo}
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
                    DefVal={apellido.campo}
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
                    DefVal={documento.campo}
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
                    DefVal={[Rol.campo]}
                    tipo="text"
                    user="Rol"
                    name="rol"
                    lenyenda= "Administrador/ Vendedor / No Asignado"
                    expresionRegular={Expresiones.nombre}
                    opciones={opcion1}
                />

               <Selects
                    estado={Estado}
                    cambiarEstado={cambiarEstado}
                    DefVal={[Estado.campo]}
                    tipo="text"
                    user="Estado"
                    name="estado"
                    lenyenda= "Pendiente / Autorizado / No Autorizado"
                    expresionRegular={Expresiones.nombre}
                    opciones={opcion2}
                />


                {formularioValido === false  && <AlertaError/> }
                <BotonCentrado
                    nombreBoton = "Actualizar"
                    formularioValido = {formularioValido}
                    mensajeBoton = "Actualización exitosa"
                />
           </Formulario>
        </main>
    );
}


export default GestionUsuarios
