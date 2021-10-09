import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonesProductos from 'components/BotonesProductos';import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as api from 'Api'



   
   
  const ListadoProductos = () => {
   /* useEffect(() => {
      //console.log('este es el listado de ventas en el componente de tabla', listaProductos);
    }, [listaProductos]);*/    
    const [busqueda, setBusqueda] = useState('');

    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState(productos);
  
    const listProductos = async()=>{
      try{
          const res = await api.listProduct();
          setProductos(res.data)
          

      }catch(error){
          console.log(error)
      }
  }

        useEffect(() => {
          setProductosFiltrados(
            productos.filter((elemento) => {
              return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
          );
        }, [busqueda, productos]);



  useEffect(()=>{
      listProductos();
  },[]);

    return (
      <div className="mainContainerTable">
         <ContenedorBotonCentrado>
            <Boton
            
            >
               <Link to="/CrearProductos">Agregar</Link>
              
            </Boton>
          </ContenedorBotonCentrado>
        <h2 className="tituloGestionVentas">Todos los productos</h2>
        <input className = "inputBusqueda"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder='Buscar'
            />
        <Table>
          <TableHead>
            <tr>
              <TableData>Producto</TableData>
              <TableData>Estado</TableData>
              <TableData>Valor</TableData>
              <TableData>Actualizar</TableData>
            </tr>
          </TableHead>
          <tbody>
            {productosFiltrados.map((productos) => {
              return (
                <TableRow key={productos._id}>
                  <TableData>{productos.nombre}</TableData>
                  <TableData>{productos.estado}</TableData>
                  <TableData>{productos.valor}</TableData>
                  <TableData>
                    <button className="iconSide">
                      <Link to='/actualizarProductos'>
                        <FontAwesomeIcon icon={faPenAlt}/>
                      </Link>
                    </button>
                    <button className="iconSide">
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                  </TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
;  
  

export default ListadoProductos;