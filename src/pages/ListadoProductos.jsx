import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Select from 'react-select';
import {Table, TableHead, TableData, TableDataGrey, Boton, ContenedorBotonCentrado} from 'elements/Listas';

const productosBackend = [
    {
        nombreProducto: 'Hills',
        idProducto: 123456,
        estado: 'Disponible',
    },
    {
        nombreProducto: 'DogChow',
        idProducto: 123456,
        estado: 'Disponible',
    },
    {
        nombreProducto: 'Monello',
        idProducto: 4782377,
        estado: 'Disponible',
    },
    
  ];

  const Lista = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setProductos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Venta');
  
    useEffect(() => {
      //obtener lista de vehículos desde el backend
      setProductos(productosBackend);
    }, []);
  
    useEffect(() => {
      if (mostrarTabla) {
        setTextoBoton('Nueva Venta');
      } else {
        setTextoBoton('Mostrar Todas las ventas');
      }
    }, [mostrarTabla]);
    return (
      <div>
        <div>
          <h2>
            Página de administración de ventas
          </h2>
          <ContenedorBotonCentrado>
            <Boton
              onClick={() => {
                setMostrarTabla(!mostrarTabla);
              }}
            >
              {textoBoton}
            </Boton>
          </ContenedorBotonCentrado>
        </div>
        {mostrarTabla ? (
          <TablaVentas listaVentas={ventas} />
        ) : (
          <GestionVentas />
        )}
      </div>
    );
  };

  const TablaVentas = ({ listaVentas }) => {
    useEffect(() => {
      console.log('este es el listado de ventas en el componente de tabla', listaVentas);
    }, [listaVentas]);
    return (
      <div className="mainContainerTable">
        <h2 className="tituloGestionVentas">Todas las ventas</h2>
        <Table>
          <TableHead>
            <tr>
              <TableData>Nombre del cliente</TableData>
              <TableData>Documento del cliente</TableData>
              <TableData>Id compra</TableData>
            </tr>
          </TableHead>
          <tbody>
            {listaVentas.map((listas, key) => {
              return (
                <tr key={key}>
                  <TableDataGrey>{listas.nombreCliente}</TableDataGrey>
                  <TableDataGrey><a href="./gestionUsuarios">{listas.documento}</a></TableDataGrey>
                  <TableDataGrey>{listas.idVenta}</TableDataGrey>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };
  
  const GestionVentas = () => {
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [estadoProducto, cambiarEstadoProducto] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const foodOptions = [
        {value: 'comida-perros-adultos', label: "Comida perros adultos"},
        {value: 'comida-perros-cachorros', label: "Comida perros cachorros"},
        {value: 'comida-perros-pelo-delgado', label: "Comida perros pelo delgado"}

    ]
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            idVendedor.valido === 'true' &&
            fecha.valido === 'true' && 
            estadoProducto.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
                cambiarIdVendedor({campo: '', valido:''});
                cambiarFecha({campo: '', valido:''});
                cambiarEstadoProducto({campo: '', valido:''});
                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }
    return (
        <main>
            <h2 className="tituloGestionVentas">Infomación de venta</h2>
            <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm}>
                <Input 
                    user = "Nombre"
                    placeholdercont = "Nombre cliente"
                    tipo = "text"
                    lenyenda = "El nombre solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "nombre"
                    estado = {nombre}
                    cambiarEstado = {cambiarNombre}
                 />
                 <Input 
                    user = "Apellido"
                    placeholdercont = "Apellido cliente"
                    tipo = "text"
                    lenyenda = "El apellido solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "apellido"
                    estado = {apellido}
                    cambiarEstado = {cambiarApellido}
                 />
                 <Input 
                    user = "Documento"
                    placeholdercont = "Documento cliente"
                    tipo = "number"
                    lenyenda = "El Documento solo admite numeros"
                    expresionRegular = {Expresiones.telefono}
                    name = "documento"
                    estado = {documento}
                    cambiarEstado = {cambiarDocumento}
                 />
                 <Input
                    estado={fecha}
                    cambiarEstado={cambiarFecha}
                    tipo="date"
                    user="Fecha"
                    name="fecha"
                    lenyenda= "Indique una fecha"
                    expresionRegular={Expresiones.fechas}

                />
                 <Input 
                    user = "Id-vendedor"
                    placeholdercont = "Id-vendedor"
                    tipo = "number"
                    lenyenda = "El Id solo admite numeros"
                    expresionRegular = {Expresiones.telefono}
                    name = "idVendedor"
                    estado = {idVendedor}
                    cambiarEstado = {cambiarIdVendedor}
                 />
                 <div>
                    <Select
                        options={foodOptions}
                        placeholder = "Seleccione el producto"
                        isSearchable                     
                    />
                     <button>+</button>
                 </div>
                 <Input 
                    user = "estadoProducto"
                    placeholdercont = "estadoProducto"
                    tipo = "number"
                    lenyenda = "Solo ingrese numeros para asignar una cantidad al producto"
                    expresionRegular = {Expresiones.telefono}
                    name = "estadoProducto"
                    estado = {estadoProducto}
                    cambiarEstado = {cambiarEstadoProducto}
                 />
                 {formularioValido === false  && <AlertaError/>}
                <BotonCentrado 
                    nombreBoton = "Finalizar venta"
                    mensajeBoton = "Venta registrada exitosamente"
                    formularioValido = {formularioValido}
                />
            </Formulario>
            
        </main>
    )
}

export default Lista;