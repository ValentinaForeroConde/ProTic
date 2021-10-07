import React, {useState} from 'react'
import {Table, TableHead, TableData, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Tooltip } from "@material-ui/core";
import GestionUsuarios from './GestionUsuarios';

    const UsuariosBackend = [
        {
            nombre: 'Valentina',
            apellido: 'Forero',
            documento: 1053867832,
            idUsuario: 123467,
            Estado: {value:'0', label: 'Pendiente'},
            Rol:{value:'0', label: 'Administrador'},
        },
        {
            nombre: 'Carlos',
            apellido: 'Espinosa',
            documento: 1098711765,
            idUsuario: 123468,
            Estado: {value:'0', label: 'Pendiente'},
            Rol:{value:'0', label: 'Administrador'},
        },
        {
            nombre: 'David',
            apellido: 'Palacios',
            documento: 104687684,
            idUsuario: 123469,
            Estado: {value:0, label: 'Pendiente'},
            Rol:{value:0, label: 'Administrador'},
        },
        {
            nombre: 'Juan',
            apellido: 'Martinez',
            documento: 1065789613,
            idUsuario: 123470,
            Estado: {value:'0', label: 'Pendiente'},
            Rol:{value:'0', label: 'Administrador'},
        },
        {
            nombre: 'Maria',
            apellido: 'Rosas',
            documento: 103588468,
            idUsuario: 123471,
            Estado: {value:'0', label: 'Pendiente'},
            Rol:{value:'0', label: 'Administrador'},
        },
        {
          nombre: 'Armando',
          apellido: 'Castillos',
          documento: 13478463,
          idUsuario: 123472,
          Estado: {value:'0', label: 'Pendiente'},
          Rol:{value:'0', label: 'Administrador'},
        },
        {
          nombre: 'Maria Camila',
          apellido: 'Dossman',
          documento: 1068422678,
          idUsuario: 123473,
          Estado: {value:'0', label: 'Pendiente'},
          Rol:{value:'0', label: 'Administrador'},
        },
    ];



const TablaGestionUsuarios = () => {
        const [users, setUsers] = useState(UsuariosBackend)

        const [editing, setEditing] = useState(false)

        const initialFormState = {nombre:'', apellido:'', documento:'', Rol:'', Estado:'', idUsuario:'',}

        const [currentUser, setCurrentUser] = useState(initialFormState)

        const editRow = (usuarios) => {
                setEditing(true)
                setCurrentUser({ nombre: usuarios.nombre, apellido: usuarios.apellido, documento: usuarios.documento, Rol: usuarios.Rol, Estado: usuarios.Estado,})
                }
        const updateUser = (documento, updatedUser) => {
                setEditing(false)
                setUsers(users.map((user) => (user.documento === documento ? updatedUser : user)))
                }

      

        return (
            <main className="mainContainerTable">
              <h2 className="tituloGestionVentas">Gestion de Usuarios</h2>
              <Table>
                <TableHead>
                  <tr>
                    <TableData>Nombre</TableData>
                    <TableData>Documento</TableData>
                    <TableData>Estado</TableData>
                    <TableData>Editar</TableData>
                  </tr>
                </TableHead>
                <tbody>
                  {UsuariosBackend.map((usuarios) => (
                      <TableRow key={usuarios.idUsuario}>
                        <TableData>{usuarios.nombre}</TableData>
                        <TableData>{usuarios.documento}</TableData>
                        <TableData>{usuarios.Estado.label}</TableData>
                        <TableData>
                          <Tooltip
                            className='TooltipEditar'
                            title="Editar Usuario"
                            arrow
                            onClick={() => {
                                editRow(usuarios)
                              }} >
                            {/* <Link to='/GestionUsuarios'>  */}
                              <FontAwesomeIcon  icon={faPenAlt}/>
                            {/* </Link> */}
                          </Tooltip>
                        </TableData>
                      </TableRow>
                  ))}
                </tbody>
              </Table>
              <GestionUsuarios
                className='GUS'
                editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}/>
            </main>
          );
    }

export default TablaGestionUsuarios

