import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario, Etiqueta, ContCarrito, Carrito, Label, LabelVenta} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';
import Selects from 'components/Selects';
import {Table, TableHead, TableData, TableDataGrey, Boton, ContenedorBotonCentrado} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';


const ActualizarVentas = () => {
    const [nombre, cambiarNombre] = useState({campo:'', valido: null});
    const [apellido, cambiarApellido] = useState({campo:'', valido: null});
    const [documento, cambiarDocumento] = useState({campo:'', valido: null});
    const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
    const [fecha, cambiarFecha] = useState({campo:'', valido: null});
    const [tipoProducto, cambiarTipoProducto] = useState({campo:'', valido: null});
    const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [listaProdutos, cambiarListaProducto] = useState([]);

    const productoOpciones = [
      {value:'comida cachorros', label: 'Comida cachorros'},
      {value:'comida adultos', label: 'Comida adultos'},
      {value:'comida seca', label: 'Comida seca'},
      {value:'comida humeda', label: 'Comida humeda'},
      {value:'comida razasGrandes', label: 'Comida razas grandes'}
    ];
    const agregarProducto = ()=>{
        cambiarListaProducto([...listaProdutos, tipoProducto]);
        console.log(tipoProducto);
    }
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
                    placeholdercont = "Valentina"
                    tipo = "text"
                    lenyenda = "El nombre solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "nombre"
                    estado = {nombre}
                    cambiarEstado = {cambiarNombre}
                 />
                 <Input 
                    user = "Apellido"
                    placeholdercont = "Forero"
                    tipo = "text"
                    lenyenda = "El apellido solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "apellido"
                    estado = {apellido}
                    cambiarEstado = {cambiarApellido}
                 />
                 <Input 
                    user = "Documento"
                    placeholdercont = "1053867832"
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
                    placeholdercont = "12345678"
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
                {formularioValido === false  && <AlertaError/>}
                <BotonCentrado 
                    nombreBoton = "Actualizar venta"
                    mensajeBoton = "Venta actualizada exitosamente"
                    formularioValido = {formularioValido}
                />
            </Formulario>
            
        </main>
    )
}
export default ActualizarVentas
