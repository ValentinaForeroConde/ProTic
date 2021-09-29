import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario, Etiqueta, ContCarrito, Carrito} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';
import Selects from 'components/Selects';
import {Table, TableHead, TableData, TableDataGrey, Boton, ContenedorBotonCentrado} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const ventasBackend = [
    {
        nombreCliente: 'Valentina',
        ApellidoCliente: 'Forero',
        documento: 102325246,
        fecha: '2021/09/28',
        idVenta: 123456,
        idVendedor: 1053867832,
        cantidadProducto: 1,
        idProducto: 12342
    },
    {
        nombreCliente: 'Carlos',
        ApellidoCliente: 'Espinosa',
        documento: 124256311,
        fecha: '2021/09/28',
        idVenta: 123467,
        idVendedor: 1053867832,
        cantidadProducto: 1,
        idProducto: 12342
    },
    {
        nombreCliente: 'Camila',
        ApellidoCliente: 'Dossman',
        documento: 124554675,
        fecha: '2021/09/28',
        idVenta: 1234512,
        idVendedor: 1053867832,
        cantidadProducto: 1,
        idProducto: 12342
    },
    
  ];

  const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVehiculos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Venta');
  
    useEffect(() => {
      //obtener lista de vehículos desde el backend
      setVehiculos(ventasBackend);
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
            {listaVentas.map((ventas, key) => {
              return (
                <tr key={key}>
                  <TableDataGrey>{ventas.nombreCliente}</TableDataGrey>
                  <TableDataGrey><a href="./gestionUsuarios">{ventas.documento}</a></TableDataGrey>
                  <TableDataGrey>{ventas.idVenta}</TableDataGrey>
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
    const [tipoProducto, cambiarTipoProducto] = useState({campo:'', valido: null});
    const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const productoOpciones = [
      {value:'comida-cachorros', label: 'Comida cachorros'},
      {value:'comida-adultos', label: 'Comida adultos'},
      {value:'comida-seca', label: 'Comida seca'},
      {value:'comida-humeda', label: 'Comida humeda'},
      {value:'comida-razasGrandes', label: 'Comida razas grandes'}
    ];

    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            idVendedor.valido === 'true' &&
            fecha.valido === 'true' &&
            tipoProducto.valido === 'true' && 
            cantidadProducto.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
                cambiarIdVendedor({campo: '', valido:''});
                cambiarFecha({campo: '', valido:''});
                cambiarTipoProducto({campo: '', valido:''})
                cambiarCantidadProducto({campo: '', valido:''});
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
                 <Etiqueta>Información de compra: </Etiqueta>
                  <Selects
                    user = "Producto"
                    placeholdercont = "Seleccione el producto"
                    tipo = "text"
                    lenyenda = "Seleccione un producto"
                    expresionRegular = {Expresiones.nombre}
                    name = "tipoProducto"
                    estado = {tipoProducto}
                    cambiarEstado = {cambiarTipoProducto}
                    opciones = {productoOpciones}
                  />
                  <ContCarrito>
                    <Input 
                      user = "cantidad"
                      placeholdercont = "cantidad producto"
                      tipo = "number"
                      lenyenda = "Solo ingrese numeros para asignar una cantidad al producto"
                      expresionRegular = {Expresiones.cantidad}
                      name = "cantidadProducto"
                      estado = {cantidadProducto}
                      cambiarEstado = {cambiarCantidadProducto}
                    />
                    <Carrito><FontAwesomeIcon icon={faCartPlus}/></Carrito>
                  </ContCarrito>
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

export default Ventas;