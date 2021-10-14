import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario, Etiqueta, ContCarrito, Carrito, Label, LabelVenta, RadioButton, ContentRButton} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';
import {Table, TableHead, TableData, ContenedorEstado} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faArrowLeft, faTruckLoading, faTimes, faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as api from './ApiVentas';
import * as apiProductos from 'Api';
import { GrupoInput } from 'elements/Formularios';
import Selects from 'components/Selects';

const ActualizarVentas = () => {

  const params = useParams();
  const history = useHistory();
  const initialState = {_id:'', nombre:'', apellido:'', documento:'', fecha:'', idVendedor:'', cantidadProducto:'', listaCanasta:'', producto:'', valor:'', estadoBoton:''};
  const [usuarios, setUsuarios] = useState(initialState);
  const [canasta, setCanasta]=useState({item:'', cantidad:''});
  const [listaCanasta, setListaCanasta] = useState([]);
  
  
      
  const [nombre, cambiarNombre] = useState({campo:'', valido: null});
  const [apellido, cambiarApellido] = useState({campo:'', valido: null});
  const [documento, cambiarDocumento] = useState({campo:'', valido: null});
  const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
  const [fecha, cambiarFecha] = useState({campo:'', valido: null});
  const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [producto, setProducto] = useState({campo:'', valido: null});
  const [multi, setMulti] = useState([]);
  const [estadoRadioButton, setEstadoRadioButton] = useState('En proceso');

  
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
          fecha.valido === 'true'
        ){
          cambiarFormularioValido(true);
          console.log(usuarios);
          try{
            let res;
            if(!params.id){
              console.log(usuarios);

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

  const [productos, setProductos] = useState([]);

  const listProductos = async()=>{
    try{
      const res = await apiProductos.listProduct();
      setProductos(res.data)

    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    listProductos();
  },[]);

  const productoOpciones = productos.map((producto)=>{
    return {value: producto._id, label: producto.nombre, valor:producto.valor}
  });
  
  const agregarProducto = ()=>{
    setListaCanasta([...listaCanasta, canasta]);
    setUsuarios({...usuarios, listaCanasta:listaCanasta})
  };

  useEffect(()=>{
    setCanasta({...canasta, item:usuarios.producto, cantidad:usuarios.cantidadProducto});
    // eslint-disable-next-line
  },[producto, cantidadProducto]);

  useEffect(() => {
    setUsuarios({...usuarios, cantidadProducto:'', producto:{"value":"","label":""}})
    cambiarCantidadProducto({valido:''});
    setProducto({valido:''})
  },[listaCanasta]);
  
  const deleteItem =(i)=>{
    var index = i;
    listaCanasta.splice(index, 1);
    setListaCanasta([...listaCanasta]);
  };

  useEffect(()=>{
    for (let i of listaCanasta){
      setMulti(parseInt(multi + (i.item.valor * i.cantidad)));
      console.log(multi);
    }
  },[listaCanasta]);

  const cambioRadioButton=e=>{
    setEstadoRadioButton(e.target.value);
    setUsuarios({...usuarios, estadoBoton:estadoRadioButton});
    console.log(estadoRadioButton);
  }

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
            DefVal = {usuarios.nombre}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
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
            DefVal = {usuarios.apellido}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
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
            DefVal = {usuarios.documento}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          <Input
            estado={fecha}
            cambiarEstado={cambiarFecha}
            tipo="date"
            user="Fecha"
            name="fecha"
            lenyenda= "Indique una fecha"
            expresionRegular={Expresiones.fechas}
            DefVal = {usuarios.fecha}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
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
            DefVal = {usuarios.idVendedor}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          {params.id?(
            <LabelVenta> 
              Id-Venta: {usuarios._id} 
            </LabelVenta>
          ):(
            null
          )}  
          <Etiqueta>Información de compra: </Etiqueta>
          <Selects
            user = "Producto"
            placeholdercont = "Seleccione el producto"
            tipo = "text"
            lenyenda = "Seleccione un producto"
            expresionRegular = {Expresiones.nombre}
            name = "producto"
            estado = {producto}
            cambiarEstado = {setProducto}
            opciones = {productoOpciones}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
            DefVal = {usuarios.producto}
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
              DefVal = {usuarios.cantidadProducto}
              usuarios = {usuarios}
              setUsuarios = {setUsuarios}
            />
            <Carrito type="button" onClick={()=>{agregarProducto();}}>
              <FontAwesomeIcon icon={faCartPlus}/>
            </Carrito>
          </ContCarrito>
          <Table>
            <TableHead>
              <tr>
                <TableData>Producto</TableData>
                <TableData>Cantidad</TableData>
                <TableData>Precio unitario</TableData>
                <TableData>Eliminar</TableData>
              </tr>
            </TableHead>
            <tbody>
              {listaCanasta.map((listado, i) => {
                return (
                <tr key = {i} >
                  <TableData key={i + 'td1'}>{listado.item.label}</TableData>
                  <TableData key={i + 'td2'}>{listado.cantidad}</TableData>
                  <TableData key={i + 'td3'}>{'$ ' + listado.item.valor}</TableData>
                  <TableData>
                    <button type="button" className="iconSide" onClick={()=>deleteItem(i)}>
                      <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                  </TableData>                     
                </tr>
                );
              })}
            </tbody>
          </Table>
          <Label>Total: $ {multi}</Label>
          {params.id?(
            <ContenedorEstado>
              <Etiqueta>Estado de la venta: </Etiqueta>
              <RadioButton>
                <ContentRButton>
                  <input 
                    type="radio" 
                    value="En proceso" 
                    name="estadoBoton" 
                    checked={estadoRadioButton === 'En proceso' ? true:false}
                    onChange={cambioRadioButton}
                  />
                  <span>
                    <FontAwesomeIcon icon={faTruckLoading}/>
                  </span>
                  <span> En proceso </span>
                </ContentRButton>
                <ContentRButton>
                  <input 
                    type="radio" 
                    value="Cancelado" 
                    name="estadoBoton" 
                    checked={estadoRadioButton === 'Cancelado' ? true:false}
                    onChange={cambioRadioButton}
                  />
                  <span>
                    <FontAwesomeIcon icon={faTimes}/>
                  </span>
                  <span> Cancelado </span>
                </ContentRButton>
                <ContentRButton>
                  <input 
                    type="radio" 
                    value="Entregado" 
                    name="estadoBoton" 
                    checked={estadoRadioButton === 'Entregado' ? true:false}
                    onChange={cambioRadioButton}
                  />
                  <span>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span> Entregado </span>
                </ContentRButton>
              </RadioButton>
              <div className="estado-venta">
                <p> El estado de la venta es: {estadoRadioButton}</p>
              </div>
            </ContenedorEstado>
          ):(
            null
          )}  
          
          
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
