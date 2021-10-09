import axios from 'axios';


const API_URL = "http://localhost:5000/producto"
/*
export const listProduct = async () =>{
    return await fetch(API_URL);
};*/

export const listProduct = async () => {
    return await axios.get(API_URL);

  };

  export const registerProducts = async (newProduct) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST', 
            data:{
                nombre: newProduct.nombre,
                descripcion: newProduct.descripcion,
                valor: newProduct.valor,                
                Estado: newProduct.Estado},
        })
        return response

    } catch(e){
        console.log(e)
    }
}