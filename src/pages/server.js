import axios from 'axios';

const API_URL = "http://localhost:5000/usuario"

export const listUsuarios = async () => {
    return await axios.get( "http://localhost:5000/usuario");

  };

// export const listUsuarios = async () =>{
//     return await fetch(API_URL);
// };

export const registerUser = async (newUser) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/nuevo`,
            method:'POST',
            data:{
                nombre: newUser.nombre,
                apellido: newUser.apellido,
                documento: newUser.documento,
                Rol: newUser.Rol,
                Estado: newUser.Estado},
        })
        return response

    } catch(e){
        console.log(e)
    }
}
/*
export const registerUser = async (newUser) =>{
    return await fetch(API_URL, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            "name":String(newUser.name).trim(),
            "username":String(newUser.username).trim(),
            "email":String(newUser.email).trim(),
        })
    });
};
*/

export const getUsuario = async (usuarioId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}${usuarioId}`,
            method:'GET',
           
        })
        return response

    } catch(e){
        console.log(e)
    }
}

// export const getUsuario = async (usuarioId) =>{
//     return await fetch(`${API_URL}${usuarioId}`);
// };

export const deleteUser = async (usuarioId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/eliminar`,
            method:'DELETE',
            data: { id: usuarioId},
        })
        return response

    } catch(e){
        console.log(e)
    }
}
/*
export const deleteUser = async (usuarioId) =>{
    return await fetch(`${API_URL}${usuarioId}`, {
        method:'DELETE',
    });
};
*/
export const updateUser = async (usuarioId, updateUser) =>{
    return await fetch(`${API_URL}${usuarioId}`, {
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            "name":String(updateUser.name).trim(),
            "username":String(updateUser.username).trim(),
            "email":String(updateUser.email).trim(),
        })
    });
};