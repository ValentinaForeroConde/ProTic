import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario, Etiqueta, ContCarrito, Carrito, Label, LabelVenta, RadioButton, ContentRButton} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';
import Selects from 'components/Selects';
import {Table, TableHead, TableData,} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faArrowLeft, faTruckLoading, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as api from 'Api.js';

const ActualizarVentas = () => {

  const params = useParams();
  const history = useHistory();
  const initialState = {_id:'', nombre:'', apellido:'', documento:'', fecha:'',idVenta:'', idVendedor:'', cantidad:'', idProducto:''};
  const [usuarios, setUsuarios] = useState(initialState);
  const [nombre, cambiarNombre] = useState({campo:'', valido: null});
  const [apellido, cambiarApellido] = useState({campo:'', valido: null});
  const [documento, cambiarDocumento] = useState({campo:'', valido: null});
  const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
  const [fecha, cambiarFecha] = useState({campo:'', valido: null});
  const [tipoProducto, cambiarTipoProducto] = useState({campo:'', valido: null});
  const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [listaProdutos, cambiarListaProducto] = useState([]);  

  const getVenta = async(idVenta)=>{
    try{
      const res = await api.getVenta(idVenta);
      setUsuarios(res.data);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(() => {
    if(params.id){
      getVenta(params.id);
      cambiarNombre({valido:'true'});
      cambiarApellido({valido:'true'});
      cambiarDocumento({valido:'true'});
      cambiarIdVendedor({valido:'true'});
      cambiarFecha({valido:'true'});
      cambiarTipoProducto({valido:'true'})
      cambiarCantidadProducto({valido:'true'});
    }
  }, []);

  const onSubmitForm = async(e) =>{
        e.preventDefault();
        if(
          nombre.valido === 'true' &&
          apellido.valido === 'true' &&
          documento.valido === 'true' &&
          idVendedor.valido === 'true' &&
          fecha.valido === 'true' &&
          tipoProducto.valido === 'true' && 
          cantidadProducto.valido === 'true' 
        ){
          cambiarFormularioValido(true);
          try{
            let res;
            if(!params.id){
              res = await api.registerVenta(usuarios);
              console.log(res);
              if(res === 'OK'){
                setUsuarios(initialState);
              }
            }else{
              await api.updateVenta(params.id, usuarios);
            }
            history.push("/ventas");
          }catch(error){
            console.log(error);
          }
        }else{
          cambiarFormularioValido(false);
        }
  };

  //traer del backend de productos?
  const tipoProducto = [
    {value:'', label:''},
    {value:'', label:''},
    {value:'', label:''}
  ]
                
  return (
      <main>
        <button className="botonVolver">
          <Link to='/ventas'>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </Link>
        </button>
        <h2 className="tituloGestionVentas">Registro de venta</h2>
        <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm} action="">
          <Input 
            user = "Nombre"
            placeholdercont = "Nombre"
            tipo = "text"
            lenyenda = "El nombre solo admite letras"
            expresionRegular = {Expresiones.nombre}
            name = "nombre"
            estado = {nombre}
            cambiarEstado = {cambiarNombre}
          />
          <Input 
            user = "Apellido"
            placeholdercont = "Apellido"
            tipo = "text"
            lenyenda = "El apellido solo admite letras"
            expresionRegular = {Expresiones.nombre}
            name = "apellido"
            estado = {apellido}
            cambiarEstado = {cambiarApellido}
           />
            <Input 
              user = "Documento"
              placeholdercont = "Número del documento"
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
              placeholdercont = "Indíque su Id"
              tipo = "number"
              lenyenda = "El Id solo admite numeros"
              expresionRegular = {Expresiones.telefono}
              name = "idVendedor"
              estado = {idVendedor}
              cambiarEstado = {cambiarIdVendedor}
            />
            <LabelVenta> Id-Venta: 123098 </LabelVenta>
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
              opciones = {tipoProducto}
              DefVal = {tipoProducto[usuarios.tipoProducto]}
              usuarios = {usuarios}
              setUsuarios = {setUsuarios}
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
              <Carrito type="button" onClick={()=>{agregarProducto();}}><FontAwesomeIcon icon={faCartPlus}/></Carrito>
            </ContCarrito>
            <Table>
              <TableHead>
                <tr>
                  <TableData>Producto</TableData>
                  <TableData>Cantidad</TableData>
                </tr>
              </TableHead>
              <tbody>
                {listaProdutos.map((tipoProducto) => {
                  return (
                  <tr >
                    <TableData>{tipoProducto.campo.value}</TableData>
                    <TableData>2</TableData>                            
                  </tr>
                  );
                })}
              </tbody>
            </Table>
            <Label>Total: $$$</Label>
            <Etiqueta>Estado de la venta: </Etiqueta>
            <RadioButton>
              <ContentRButton>
                <input type="radio" value="En proceso" name="estado"/>
                <span>
                  <FontAwesomeIcon icon={faTruckLoading}/>
                </span>
                <span> En proceso </span>
              </ContentRButton>
              <ContentRButton>
                <input type="radio" value="Cancelado" name="estado"/>
                <span>
                  <FontAwesomeIcon icon={faTimes}/>
                </span>
                <span> Cancelado </span>
              </ContentRButton>
              <ContentRButton>
                <input type="radio" value="Entregado" name="estado"/>
                <span>
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span> Entregado </span>
              </ContentRButton>
            </RadioButton>
            
            {formularioValido === false  && <AlertaError/>}
            {params.id?(
              <BotonCentrado 
                nombreBoton = "Actualizar"
                mensajeBoton = "Venta actualizada exitosamente"
                formularioValido = {formularioValido}
              />
            ):(
              <BotonCentrado 
                nombreBoton = "Crear"
                mensajeBoton = "Venta creada exitosamente"
                formularioValido = {formularioValido}
              />
            )}  
        </Formulario>
            
      </main>
    )
};

export default ActualizarVentas;
