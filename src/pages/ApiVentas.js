import axios from 'axios';

const getToken= ()=>{
    return `Bearer ${localStorage.getItem('token')}`;
}

const API_URL = "https://enigmatic-meadow-61941.herokuapp.com/venta"

export const listaVentas = async () => {
    try{
        const response  = await axios({
            url: API_URL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
        })
        return response;
    } catch(e){
        console.log(e);
    }
};

export const registerVenta = async (newVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data:{
                nombre: newVenta.nombre,
                apellido: newVenta.apellido,
                documento: newVenta.documento,
                fecha: newVenta.fecha,
                idVendedor: newVenta.idVendedor,
                listaCanasta: newVenta.listaCanasta,
                estadoBoton: newVenta.estadoBoton,
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
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
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
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
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
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data:{
                nombre: updateVenta.nombre,
                apellido: updateVenta.apellido,
                documento: updateVenta.documento,
                fecha: updateVenta.fecha,
                idVendedor: updateVenta.idVendedor,
                listaCanasta: updateVenta.listaCanasta,
                estadoBoton: updateVenta.estadoBoton
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
};