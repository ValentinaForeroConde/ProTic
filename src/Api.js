import axios from 'axios';

const getToken= ()=>{
    return `Bearer ${localStorage.getItem('token')}`;
}

const API_URL = "https://enigmatic-meadow-61941.herokuapp.com/producto"

export const listProduct = async () => {
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

export const registerProducts = async (newProduct) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data:{
                nombre: newProduct.nombre,
                descripcion: newProduct.descripcion,
                valor: newProduct.valor,
                Estado: newProduct.Estado
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const getProduct = async (productId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${productId}`,
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const deleteProduct = async (productId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${productId}`,
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data: { id: productId},
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const updateProduct = async (productId, updateProduct) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${productId}`,
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data:{
                nombre: updateProduct.nombre,
                descripcion: updateProduct.descripcion,
                valor: updateProduct.valor,
                Estado: updateProduct.Estado
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
};