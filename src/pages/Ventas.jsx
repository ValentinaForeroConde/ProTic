import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Select from 'react-select';

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
        setTextoBoton('Crear Nueva Venta');
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
          <button
            onClick={() => {
              setMostrarTabla(!mostrarTabla);
            }}
          >
            {textoBoton}
          </button>
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
      <div>
        <h2>Todos las ventas</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del cliente</th>
              <th>Documento del cliente</th>
              <th>Id compra</th>
            </tr>
          </thead>
          <tbody>
            {listaVentas.map((ventas) => {
              return (
                <tr>
                  <td>{ventas.nombreCliente}</td>
                  <a href="./gestionUsuarios"><td>{ventas.documento}</td></a>
                  <td>{ventas.idVenta}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  const GestionVentas = () => {
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
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
            cantidadProducto.valido === 'true' 
            ){
                cambiarFormularioValido(true);
                cambiarNombre({campo: '', valido:''});
                cambiarApellido({campo: '', valido:''});
                cambiarDocumento({campo: '', valido:''});
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
                    user = "cantidadProducto"
                    placeholdercont = "cantidadProducto"
                    tipo = "number"
                    lenyenda = "Solo ingrese numeros para asignar una cantidad al producto"
                    expresionRegular = {Expresiones.telefono}
                    name = "cantidadProducto"
                    estado = {cantidadProducto}
                    cambiarEstado = {cambiarCantidadProducto}
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

export default Ventas;