import axios from 'axios';

const API_URL = "http://localhost:5000/usuario"

const getToken = ()=>{
    return `bearer ${localStorage.getItem('token')}`
}
console.log(getToken())


export const listUsuarios = async () => {
    
    return await axios.get("http://localhost:5000/usuario",`headers: {
        Authorization:${getToken}}`);

  };



// export const listUsuarios = async () =>{
//     return await fetch(API_URL);
// };
/*, `headers:{
        Authorization: ${getToken}}`*/ 
export const registerUser = async (newUser) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            headers:{
                Authorization: {getToken}},
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