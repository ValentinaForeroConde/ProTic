import React, {useState, useEffect} from 'react'
import {Table, TableHead, TableData, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

    const UsuariosBackend = [
        {
            nombreCliente: 'Valentina',
            ApellidoCliente: 'Forero',
            documento: 1053867832,
            idUsuario: 123467,
            estado: 'Autorizado',
            rol:'Administrador'
        },
        {
            nombreCliente: 'Carlos',
            ApellidoCliente: 'Espinosa',
            documento: 1098711765,
            idUsuario: 123468,
            estado: 'Pendiente'
        },
        {
            nombreCliente: 'David',
            ApellidoCliente: 'Palacios',
            documento: 104687684,
            idUsuario: 123469,
            estado: 'Pendiente'
        },
        {
            nombreCliente: 'Juan',
            ApellidoCliente: 'Martinez',
            documento: 1065789613,
            idUsuario: 123470,
            estado: 'No Autorizado'
        },
        {
            nombreCliente: 'Maria',
            ApellidoCliente: 'Rosas',
            documento: 103588468,
            idUsuario: 123471,
            estado: 'Pendiente'
        },
        {
          nombreCliente: 'Armando',
          ApellidoCliente: 'Castillos',
          documento: 13478463,
          idUsuario: 123472,
          estado: 'Autorizado'
        },
        {
          nombreCliente: 'Maria Camila',
          ApellidoCliente: 'Dossman',
          documento: 1068422678,
          idUsuario: 123473,
          estado: 'Pendiente'
        },
        {
          nombreCliente: 'Jorge',
          ApellidoCliente: 'Dominguez',
          documento: 15218465,
          idUsuario: 123474,
          estado: 'Pendiente'
        },
        {
          nombreCliente: 'Sandra',
          ApellidoCliente: 'Rey',
          documento: 132418769,
          idUsuario: 123475,
          estado: 'Pendiente'
        },
    ];


const TablaGestionUsuarios = () => {
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(UsuariosBackend);

  useEffect(() => {
    setUsuariosFiltrados(
      UsuariosBackend.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, UsuariosBackend]);

        return (
            <main className="mainContainerTable">
              <h2 className="tituloGestionVentas">Gestion de Usuarios</h2>
              <input className = "inputBusqueda"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder='Buscar'
            />
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
                  {usuariosFiltrados.map((usuarios, key) => {
                    return (
                      <TableRow key={key}>
                        <TableData>{usuarios.nombreCliente}</TableData>
                        <TableData>{usuarios.documento}</TableData>
                        <TableData>{usuarios.estado}</TableData>
                        <TableData>
                          <button>
                            <Link to='/GestionUsuarios'>
                              <FontAwesomeIcon icon={faPenAlt}/>
                            </Link>
                          </button>
                        </TableData>
                      </TableRow>
                    );
                  })}
                </tbody>
              </Table>
            </main>
          );
    }

export default TablaGestionUsuarios
