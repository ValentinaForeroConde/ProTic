import React, {useState, useEffect} from 'react'
import {Table, TableHead, TableData, TableRow, ContenedorCardTabla, ContenidoResponsive, InfoCard, ActualizarCard} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import * as server from './server';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';

const TablaGestionUsuarios = () => {

    const [usuarios, setUsuarios]= useState([]);

    const listUsuarios = async()=>{
      try{
        setLoading(true);
        const res = await server.listUsuarios();
        setUsuarios(res.data)
        setLoading(false);
      }catch(error){
        console.log(error)
      }
    };

    useEffect(()=>{
      listUsuarios();
    },[]);

    const history = useHistory();

    const handleDelete= async (usuarioId)=>{
      await server.deleteUser(usuarioId);
      listUsuarios();
    };

    const [busqueda, setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);

    useEffect(() => {
      setUsuariosFiltrados(
      usuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      }));
    }, [busqueda, usuarios]);

    const[loading, setLoading] = useState(false);

        //Ventana nodal
    const showAlert =(usuario)=>{
          Swal.fire({
            title:'Atención!',
            text:'Deseas eliminar el usuario seleccionado?',
            icon:'warning',
            showConfirmButton:true,
            confirmButtonColor: '#023047',
            confirmButtonText: 'Si',
            showCancelButton:true,
            cancelButtonColor: '#023047',
            cancelButtonText: 'No',
            showCloseButton:true,
        }).then((result)=>{
          if(result.value){
            handleDelete(usuario)
              Swal.fire({
                icon: 'success',
                title: 'Usuario eliminado',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }

        return (
            <main className="mainContainerTable">
              <h2 className="tituloGestionVentas">Gestion de Usuarios</h2>
              <input className = "inputBusqueda"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder='Buscar'
            />
            {loading  ?  (
                <ReactLoading  type="cylon" color="#023047" height={300} width={300} />
            ):(
              <div>
                <Table>
                  <TableHead>
                    <tr>
                      <TableData>Nombre</TableData>
                      <TableData>Apellido</TableData>
                      <TableData>Documento</TableData>
                      <TableData>Editar</TableData>
                    </tr>
                  </TableHead>
                  <tbody>
                    {usuariosFiltrados.map((usuario) => (
                        <TableRow key={usuario._id}>
                          <TableData>{usuario.nombre}</TableData>
                          <TableData>{usuario.apellido}</TableData>
                          <TableData>{usuario.documento}</TableData>
                          <TableData>
                            <button className="iconSide edit"
                              onClick={() => {
                                history.push(`/editarUsuario/${usuario._id}`)}}
                              >
                              <FontAwesomeIcon  icon={faPenAlt}/>
                            </button>
                            <button className="iconSide trash"
                                onClick={()=>{showAlert(usuario._id)}}
                            >
                              <FontAwesomeIcon icon={faTrashAlt}/>
                            </button>
                          </TableData>
                        </TableRow>
                    ))}
                  </tbody>
                </Table>
                <ContenedorCardTabla>
                {usuariosFiltrados.map((usuario)=>{
                  return (
                  <ContenidoResponsive>
                    <InfoCard>
                      <span>{usuario.nombre}{" "}{usuario.apellido}</span>
                      <span>{usuario.documento}</span>
                    </InfoCard>
                    <ActualizarCard>
                      <button className="iconSide edit" 
                         onClick={() => {
                          history.push(`/editarUsuario/${usuario._id}`)}}
                      >
                        <FontAwesomeIcon  icon={faPenAlt}/>
                      </button>
                      <button className="iconSide trash"
                        onClick={()=>{showAlert(usuario._id)}}
                      >
                          <FontAwesomeIcon icon={faTrashAlt}/>
                      </button>
                    </ActualizarCard>
                  </ContenidoResponsive>
                  );
                })} 
                </ContenedorCardTabla>
              </div>
            )
            }
            </main>
          );
    }

export default TablaGestionUsuarios;

