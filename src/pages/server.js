const API_URL = "https://jsonplaceholder.typicode.com/users "

export const listUsuarios = async () =>{
    return await fetch(API_URL);
};

export const getUsuario = async (usuarioId) =>{
    return await fetch(`${API_URL}${usuarioId}`);
};

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

export const deleteUser = async (usuarioId) =>{
    return await fetch(`${API_URL}${usuarioId}`, {
        method:'DELETE',
    });
};

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