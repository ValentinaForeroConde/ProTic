const API_URL = "https://jsonplaceholder.typicode.com/users "

export const listProduct = async () =>{
    return await fetch(API_URL);
};