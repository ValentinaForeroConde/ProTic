import React, {useState, useEffect} from 'react'
import { Formulario} from 'elements/Formularios';
import Input from 'components/Input';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import { Link, useHistory, useParams  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "@material-ui/core";
import * as server from './server';
// import axios from 'axios';


function GestionUsuarios() {

    const params = useParams();
    const history =useHistory();

    console.log(params)

    const initialState={id:0, name:'',email:'', username:'' }
    const [usuarios, setUsuarios]= useState(initialState);

    /*useEffect(
      () => {
        cambiarNombre({nombre, campo: usuarios.name, valido:'true'})
        cambiarApellido({apellido, campo: usuarios.username, valido:'true'})
        cambiarDocumento({documento, campo: usuarios.email, valido:'true'})
        cambiarRol({Rol, campo:'' , valido:'true'})
        cambiarEstado({Estado, campo: '', valido:'true'})
      },
      [ ]
     )*/

    const [nombre, cambiarNombre] = useState({campo: '', valido: ''});
    const [apellido, cambiarApellido] = useState({campo:'', valido: ''});
    const [documento, cambiarDocumento] = useState({campo:'', valido: ''});
    const [Rol, cambiarRol] = useState({campo:'', valido: ''});
    const [Estado, cambiarEstado] = useState({campo:'', valido: ''});
    const [formularioValido, cambiarFormularioValido] = useState('');

    const getUsuario= async(usuarioId)=>{
        try{
            const res = await server.getUsuario(usuarioId);
            const data = await res.json();
            const {name, email, username}=data.usuarios;
            setUsuarios({name, username, email});
            console.log(data);

        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(params.id){
            getUsuario(params.id);
        }
        // eslint-disable-next-line
    }, []);

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        console.log(usuarios)

        try{
            let res;
            if(!params.id){
                res= await server.registerUser(usuarios);
                const data= await res.json();
                if (data.message ==="Sucess"){
                    setUsuarios(initialState);
            }else{
                await server.updateUser(params.id, usuarios);
            }
                history.push("/TablaGestionUsuarios");
            }

        }catch(error){
            console.log(error)
        }

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
                    name="name"
                    lenyenda= "El nombre solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    DefVal={apellido.campo}
                    tipo="text"
                    user="Apellido"
                    placeholdercont="Apellido de usuario"
                    name="username"
                    lenyenda= "El apellido solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                 <Input
                    estado={documento}
                    cambiarEstado={cambiarDocumento}
                    DefVal={documento.campo}
                    tipo="number"
                    user="Id Usuario"
                    placeholdercont="N° ID del usuario"
                    name="email"
                    lenyenda= "El Documento solo admite numeros, minimo 7 - maximo 14"
                    expresionRegular={Expresiones.telefono}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
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
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
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
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />


                {formularioValido === false  && <AlertaError/> }
                { params.id?(
                    <BotonCentrado
                    nombreBoton = "Actualizar"
                    formularioValido = {formularioValido}
                    mensajeBoton = "Actualización exitosa"
                />
                ):(
                    <BotonCentrado
                    nombreBoton = "Crear"
                    formularioValido = {formularioValido}
                    mensajeBoton = "Creación exitosa"
                />

                ) }
           </Formulario>
        </main>
    );
}


export default GestionUsuarios
