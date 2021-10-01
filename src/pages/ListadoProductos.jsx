import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonesProductos from 'components/BotonesProductos';import AlertaError from 'components/AlertaError'
import Select from 'react-select';
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado} from 'elements/Listas';

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

  const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVehiculos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nueva Venta');
  
    useEffect(() => {
      //obtener lista de vehículos desde el backend
      setVehiculos(productosBackend);
    }, []);
  
    useEffect(() => {
      if (mostrarTabla) {
        setTextoBoton('Agregar producto');
      } else {
        setTextoBoton('Mostrar productos');
      }
    }, [mostrarTabla]);
    return (
      <div>
        <div>
          <h2>
            Página de administración de productos
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
          <TablaVentas listaProductos={ventas} />
        ) : (
          <GestionProductos />
        )}
      </div>
    );
  };

  const TablaVentas = ({ listaProductos }) => {
    useEffect(() => {
      console.log('este es el listado de ventas en el componente de tabla', listaProductos);
    }, [listaProductos]);
    return (
      <div className="mainContainerTable">
        <h2 className="tituloGestionVentas">Todas las productos</h2>
        <Table>
          <TableHead>
            <tr>
              <TableData>Nombre del cliente</TableData>
              <TableData>Documento del cliente</TableData>
              <TableData>Id compra</TableData>
            </tr>
          </TableHead>
          <tbody>
            {listaProductos.map((ventas, key) => {
              return (
                <tr key={key}>
                  <TableData>{ventas.nombreProducto}</TableData>
                  <TableData>{ventas.estado}</TableData>
                  <TableData>{ventas.idProducto}</TableData>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };
  
  const GestionProductos = () => {
    
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [descripcion, cambiarDescripcion] = useState({campo:'', valido: null});
    const [valor, cambiarvalor] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const productoOpciones = [
      {value:'comida cachorros', label: 'Comida cachorros'},
      {value:'comida adultos', label: 'Comida adultos'},
      {value:'comida seca', label: 'Comida seca'},
      {value:'comida humeda', label: 'Comida humeda'},
      {value:'comida razasGrandes', label: 'Comida razas grandes'}
    ];
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            descripcion.valido === 'true' &&
            valor.valido === 'true' &&
            idVendedor.valido === 'true' &&
            fecha.valido === 'true' && 
            cantidadProducto.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarDescripcion({campo: '', valido:''});
                cambiarvalor({campo: '', valido:''});
                cambiarIdVendedor({campo: '', valido:''});
                cambiarFecha({campo: '', valido:''});
                cambiarCantidadProducto({campo: '', valido:''});
                // hacer envios a apis base de datos
            }else{
                cambiarFormularioValido(false);
            }
        }
    return (
        <main>
            <h2 className="tituloGestionVentas">Registro de productos</h2>
            <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm}>
                <Input 
                    user = "Nombre"
                    placeholdercont = "Nombre producto"
                    tipo = "text"
                    lenyenda = "El nombre solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "nombre"
                    estado = {nombre}
                    cambiarEstado = {cambiarNombre}
                    />
                    <Input 
                    user = "Descripcion"
                    placeholdercont = "Descripción producto"
                    tipo = "text"
                    lenyenda = "El descripción solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "descripcion"
                    estado = {descripcion}
                    cambiarEstado = {cambiarDescripcion}
                    />
                    <Input 
                    user = "valor"
                    placeholdercont = "valor producto"
                    tipo = "number"
                    lenyenda = "El valor solo admite números"
                    expresionRegular = {Expresiones.valores}
                    name = "valor"
                    estado = {valor}
                    cambiarEstado = {cambiarvalor}
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
                    user = "Id-Producto"
                    placeholdercont = "Id-Producto"
                    tipo = "number"
                    lenyenda = "El Id solo admite números"
                    expresionRegular = {Expresiones.telefono}
                    name = "idVendedor"
                    estado = {idVendedor}
                    cambiarEstado = {cambiarIdVendedor}
                    />
                    <div>
                    <Select
                        options={productoOpciones}
                        placeholder = "Seleccione el producto"
                        isSearchable                     
                    />
                    
                    </div>
                    <Input 
                    user = "Cantidad Producto"
                    placeholdercont = "Cantidad Producto"
                    tipo = "number"
                    lenyenda = "Solo ingrese números para asignar una cantidad al producto"
                    expresionRegular = {Expresiones.cantidades}
                    name = "cantidadProducto"
                    estado = {cantidadProducto}
                    cambiarEstado = {cambiarCantidadProducto}
                    max = {3}
                    />
                    {formularioValido === false  && <AlertaError/>}
                
                <BotonesProductos 
                    nombreBoton = "Agregar"
                    mensajeBoton = "Producto agregado exitosamente"
                    formularioValido = {formularioValido}
                />
                </Formulario>
        </main>
    )
};

export default Ventas;