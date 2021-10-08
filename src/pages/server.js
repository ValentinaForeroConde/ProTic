const API_URL = "https://jsonplaceholder.typicode.com/users "

export const listUsuarios = async () =>{
    return await fetch(API_URL);
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