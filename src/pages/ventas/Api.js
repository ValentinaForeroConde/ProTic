import axios from 'axios';

const API_URL = "http://localhost:5000/venta"

export const listaVenta = async () => {
    return await axios.get(API_URL);

  };

export const registerVenta = async (newVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            data:{
                nombre: newVenta.nombreCliente,
                apellido: newVenta.apellidoCliente,
                documento: newVenta.documento,
                fecha: newVenta.fecha,
                idVenta: newVenta.idVenta,
                idVendedor: newVenta.idVendedor,
                cantidad: newVenta.cantidadProducto,
                Producto: newVenta.idProducto
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const getVenta = async (idVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${idVenta}`,
            method:'GET',
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const deleteVenta = async (idVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${idVenta}`,
            method:'DELETE',
            data: { id: idVenta},
        })
        return response

    } catch(e){
        console.log(e)
    }
};

export const updateVenta = async (idVenta, updateVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${idVenta}`,
            method:'PATCH',
            data:{
                nombre: updateVenta.nombreCliente,
                apellido: updateVenta.apellidoCliente,
                documento: updateVenta.documento,
                fecha: updateVenta.fecha,
                idVendedor: updateVenta.idVendedor,
                cantidad: updateVenta.cantidadProducto,
                Producto: updateVenta.idProducto
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
};