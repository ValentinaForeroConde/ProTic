import axios from 'axios';

const getToken= ()=>{
    return `Bearer ${localStorage.getItem('token')}`;
}

const API_URL = "http://localhost:5000/usuario"

export const getUserData = async () => {
    try{
        const response  = await axios({
            url: `${API_URL}/self`,
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

export const listUsuarios = async () => {
    try{
        const response  = await axios({
            url: `${API_URL}`,
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

export const registerUser = async (newUser) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data:{
                nombre: newUser.nombre,
                apellido: newUser.apellido,
                documento: newUser.documento,
                Rol: newUser.Rol,
                Estado: newUser.Estado
            },
        })
        return response;
    } catch(e){
        console.log(e);
    }
};


export const getUsuario = async (usuarioId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${usuarioId}`,
            method:'GET',
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

export const deleteUser = async (usuarioId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${usuarioId}`,
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data: { id: usuarioId},
        })
        return response;
    } catch(e){
        console.log(e);
    }
};

export const updateUser = async (usuarioId, updateUser) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${usuarioId}`,
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization:getToken()
            },
            data:{
                nombre: updateUser.nombre,
                apellido: updateUser.apellido,
                documento: updateUser.documento,
                Rol: updateUser.Rol,
                Estado: updateUser.Estado
            },
        })
        return response;
    } catch(e){
        console.log(e);
    }
};