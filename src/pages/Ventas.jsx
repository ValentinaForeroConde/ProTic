import React, { useEffect, useState } from 'react';
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado, TableRow, ContenedorCardTabla, ContenidoResponsive, InfoCard, ActualizarCard} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import * as api from './ApiVentas';
import Swal from 'sweetalert2';

  const Ventas = () => {
    const [ventas, setVentas] = useState([]);
    const history = useHistory();

    const listaVentas = async()=> {
      try{
        const res = await api.listaVentas();
        setVentas(res.data)
      }catch(error){
        console.error(error);
      }
    };

    useEffect(() => {
      listaVentas();
    }, []);

    const handleDelete = async (idVenta)=>{
      await api.deleteVenta(idVenta);
      listaVentas();
    };

    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(ventas);

    useEffect(() => {
      setVentasFiltradas(
        ventas.filter((elemento) =>{
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, ventas]);

    const showAlert =(venta)=>{
      Swal.fire({
        title:'Atención!',
        text:'Deseas eliminar la venta seleccionada?',
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
        handleDelete(venta)
          Swal.fire({
            icon: 'success',
            title: 'Venta eliminada',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    return(
      <main className="mainContainerTable">
        <ContenedorBotonCentrado>
          <Boton>
            <Link className="link-boton" to ="/CrearVentas">Crear</Link>
          </Boton>
        </ContenedorBotonCentrado>
        <h2 className="tituloGestionVentas">Todas las ventas</h2>
        <input className="inputBusqueda"
          value={busqueda}
          onChange={(e)=> setBusqueda(e.target.value)}
          placeholder="Buscar"
        />
          <Table>
            <TableHead>
              <tr>
                <TableData>Nombre del cliente</TableData>
                <TableData>Documento del cliente</TableData>
                <TableData>Id compra</TableData>
                <TableData>Editar</TableData>
              </tr>
            </TableHead>
            <tbody>
                {ventasFiltradas.map((ventas) =>(
                  <TableRow key={ventas._id}>
                    <TableData>{ventas.nombre}</TableData>
                    <TableData>{ventas.apellido}</TableData>
                    <TableData>{ventas.documento}</TableData>
                    <TableData>
                      <button className="iconSide edit" 
                        onClick={()=>{
                          history.push(`/actualizarVentas/${ventas._id}`)
                        }}
                      >
                        <FontAwesomeIcon icon={faPenAlt}/>
                      </button>
                      <button className="iconSide trash"
                        onClick={()=>showAlert(ventas._id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt}/>
                      </button>
                    </TableData>
                  </TableRow>
                ))}
            </tbody>
          </Table>
        <ContenedorCardTabla>
        {ventasFiltradas.map((ventas)=>{
          return (
          <ContenidoResponsive>
            <InfoCard>
              <span>{"Nombre: "}{ventas.nombre}{" "}{ventas.apellido}</span>
              <span>{"Documento: "}{ventas.documento}</span>
            </InfoCard>
            <ActualizarCard>
              <button className="iconSide edit" 
                onClick={()=>{
                  history.push(`/actualizarVentas/${ventas._id}`)
                }}
              >
                <FontAwesomeIcon icon={faPenAlt}/>
              </button>
              <button className="iconSide trash"
                onClick={()=>showAlert(ventas._id)}
              >
                <FontAwesomeIcon icon={faTrashAlt}/>
              </button>
            </ActualizarCard>
          </ContenidoResponsive>
          );
        })} 
        </ContenedorCardTabla>
      </main>
    );
  };

export default Ventas;