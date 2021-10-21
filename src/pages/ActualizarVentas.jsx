import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario, Etiqueta, ContCarrito, Carrito, LabelVenta, RadioButton, ContentRButton} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';
import {Table, TableHead, TableData, ContenedorEstado, ContenedorCardTabla, ContenidoResponsive, InfoCard, ActualizarCard} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faArrowLeft, faTruckLoading, faTimes, faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as api from './ApiVentas';
import * as apiProductos from 'Api';
import Selects from 'components/Selects';
import Swal from 'sweetalert2';

const ActualizarVentas = () => {
  //params es lo que recibe del history.push de ventas, en el boton de editar
  const params = useParams();
  const history = useHistory();
  //Estado inicial que se debe recibir de la BD (es vacio para poder crear venta)
  const initialState = {_id:'', nombre:'', apellido:'', documento:'', fecha:'', idVendedor:'', cantidadProducto:'', listaCanasta:[], producto:'', valor:'', estadoBoton:''};
  //lo que se trae o envia al backend
  const [usuarios, setUsuarios] = useState(initialState);
  //listar los productos que se compran en crear o editar venta
  const [listaCanasta, setListaCanasta] = useState([]);
  //constantes para hacer validaciones del formulario
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

  //funcion que trae la informacion del back, si existe(params)
  const getVenta = async(idVenta)=>{
    try{
      const res = await api.getVenta(idVenta);
      setUsuarios(res.data);
      setListaCanasta(res.data.listaCanasta);
    }catch(error){
      console.log(error);
    }
  };
  //se activa si existe un params.id
  useEffect(() => {
    if(params.id){
      getVenta(params.id);
      cambiarNombre({valido:'true'});
      cambiarApellido({valido:'true'});
      cambiarDocumento({valido:'true'});
      cambiarIdVendedor({valido:'true'});
      cambiarFecha({valido:'true'});
    }
    // eslint-disable-next-line
  }, []);

  //lo que permite enviar la informacion del formulario
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
              //permite crear una venta (POST) se envia a la BD
              res = await api.registerVenta(usuarios);
              console.log(res);
              showAlert("Creado con exito");
              if(res === 'OK'){
                setUsuarios(initialState);
              }
            }else{
              //permite editar si existe un params.id (PATCH)
              await api.updateVenta(params.id, usuarios);
              showAlert("Actualizado con exito");
            }
            history.push("/ventas");
          }catch(error){
            console.log(error);
          }
        }else{
          cambiarFormularioValido(false);
        }
  };

  //constantes get y set para productos del backend
  const [productos, setProductos] = useState([]);

  //permite traer productos del backend
  const listProductos = async()=>{
    try{
      const res = await apiProductos.listProduct();
      setProductos(res.data)

    }catch(error){
      console.log(error)
    }
  };

  //se activa la primera vez para que se llame la funcion (evita el asincronismo)
  useEffect(()=>{
    listProductos();
  },[]);

  //mapea los productos que se traen del backend para obtener el id, nombre y valor
  const productoOpciones = productos.map((productos)=>{
    return {value: productos._id, label: productos.nombre, valor:productos.valor}
  });

  //funcion que se activa con el boton de agregar producto, permite enviar la informacion del producto y la cantidad a una lista(tabla)
  const agregarProducto = () =>{
    var item = {
      'cantidad':usuarios.cantidadProducto,
      'producto': usuarios.producto,
      'valor': usuarios.producto.valor
      };
      setListaCanasta([...listaCanasta, item]);
  }

  //se activa cuando se haga set de listaCanasta para evitar asincronismo
  useEffect(() => {
    cambiarCantidadProducto({...cantidadProducto,campo:'' ,valido:''});
    setProducto({...producto,campo:'', valido:''});
    setUsuarios({...usuarios, cantidadProducto:'', producto:"", listaCanasta:listaCanasta});
    // eslint-disable-next-line
},[listaCanasta])

  //cada que cambie usuarios se activa y evita asincronismo
  useEffect(() => {
  },[usuarios]);

  //funcion para eliminar producto de la tabla, el i es la key que permite identificarlo
  const deleteItem =(i)=>{
    var index = i;
    listaCanasta.splice(index, 1);
    setListaCanasta([...listaCanasta]);
  };

  //funcion que permite sumar el valor de los productos
  useEffect(()=>{
    var suma=0;
    for (let i of listaCanasta){
     suma =(suma + (i.producto.valor * i.cantidad));
    }
    setMulti(parseInt(suma));
    // eslint-disable-next-line
  },[listaCanasta]);

    //permite cambiar el estado de la venta
  const cambioRadioButton=e=>{
    setEstadoRadioButton(e.target.value);
  };

    //permite setear el estado del boton en usuarios
  useEffect(()=>{
    setUsuarios({...usuarios, estadoBoton:estadoRadioButton});
    // eslint-disable-next-line
  },[estadoRadioButton]);

  //evita el asincronismo
  useEffect(()=>{
    console.log(usuarios.estadoBoton);
  },[usuarios.estadoBoton]);

    //modal para decir que al crear o evitar venta fue exitosa
  const showAlert =(comentario)=>{
    Swal.fire({
        icon: 'success',
        title: (comentario),
        showConfirmButton: false,
        timer: 1500
    })
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
                    <TableData key={i + 'td1'}>{listado.producto.label}</TableData>
                    <TableData key={i + 'td2'}>{listado.cantidad}</TableData>
                    <TableData key={i + 'td3'}>{'$ ' + listado.producto.valor}</TableData>
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
          <ContenedorCardTabla>
            {listaCanasta.map((listado, i)=>{
              return (
                <ContenidoResponsive key = {i}>
                  <InfoCard>
                    <span>{listado.producto.label}{" : "}{listado.cantidad}</span>
                    <span>{'$ ' + listado.producto.valor}</span>
                  </InfoCard>
                  <ActualizarCard >
                      <button type="button" className="iconSide trash" onClick={()=>deleteItem(i)}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                      </button>
                  </ActualizarCard>
                </ContenidoResponsive>
          );
        })} 
        </ContenedorCardTabla>
        <Etiqueta>Total: $ {multi}</Etiqueta>
          {params.id?(
            <ContenedorEstado>
              <Etiqueta>Estado de la venta: </Etiqueta>
              <RadioButton>
                <ContentRButton> 
                  <input 
                    type="radio" 
                    value="En proceso" 
                    name="estadoBoton" 
                    checked={usuarios.estadoBoton === 'En proceso' ? true:false}
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
                    checked={usuarios.estadoBoton === 'Cancelado' ? true:false}
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
                    checked={usuarios.estadoBoton === 'Entregado' ? true:false} 
                    onChange={cambioRadioButton}
                  />
                  <span>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span> Entregado </span>
                </ContentRButton>
              </RadioButton>
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
