import React, {useState} from 'react'
import TablaGestionUsuarios from './TablaGestionUsuarios';

    const UsuariosBackend = [
        {
            nombre: 'Valentina',
            apellido: 'Forero',
            documento: 1053867832,
            idUsuario: 123467,
            Estado: 'Autorizado',
            Rol:'Administrador'
        },
        {
            nombre: 'Carlos',
            apellido: 'Espinosa',
            documento: 1098711765,
            idUsuario: 123468,
            Estado: 'Pendiente',
            Rol:'Administrador'
        },
        {
            nombre: 'David',
            apellido: 'Palacios',
            documento: 104687684,
            idUsuario: 123469,
            Estado: 'Pendiente',
            Rol:'Administrador'
        },
        {
            nombre: 'Juan',
            apellido: 'Martinez',
            documento: 1065789613,
            idUsuario: 123470,
            Estado: 'Pendiente',
            Rol:'Administrador'
        },
        {
            nombre: 'Maria',
            apellido: 'Rosas',
            documento: 103588468,
            idUsuario: 123471,
            Estado: 'Pendiente',
            Rol:'Administrador'
        },
        {
        nombre: 'Armando',
        apellido: 'Castillos',
        documento: 13478463,
        idUsuario: 123472,
        Estado: 'Pendiente',
        Rol:'Administrador'
        },
        {
        nombre: 'Maria Camila',
        apellido: 'Dossman',
        documento: 1068422678,
        idUsuario: 123473,
        Estado: 'Pendiente',
        Rol:'Administrador'
        },
    ];

    const Prueba = () => {

            const [users, setUsers] = useState(UsuariosBackend)

            const [editing, setEditing] = useState(false)

            const initialFormState = {nombre:'', apellido:'', documento:'', Rol:'', Estado:'', idUsuario:'',}

            const [currentUser, setCurrentUser] = useState(initialFormState)

            const editRow = (user) => {
                    setEditing(true)
                    setCurrentUser({ nombre: UsuariosBackend.nombre, apellido: UsuariosBackend.apellido, documento: UsuariosBackend.documento, Rol: UsuariosBackend.Rol, Estado: UsuariosBackend.Estado,})
                    }
            const updateUser = (id, updatedUser) => {
                    setEditing(false)
                    setUsers(users.map((user) => (user.idUsuario === id ? updatedUser : user)))
                    }

            return (
                <TablaGestionUsuarios
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
            )
    }

    export default Prueba
