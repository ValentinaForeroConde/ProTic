import { getDB } from '../../db/db.js';
import {ObjectId} from 'mongodb';
import jwt_decode from 'jwt-decode'

const queryAllUsuarios = async (callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').find().limit(50).toArray(callback);
};

const consultarUsuario = async (id, callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').findOne({_id: new ObjectId(id)}, callback);
}

const consultarOCrearUsuario = async(req, callback)=>{
    const token = req.headers.authorization.split('Bearer')[1];
    const user = jwt_decode(token)['http://localhost/userData'];
    console.log(user);

    // Se Consulta si el usuario existe
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').findOne({email: user.email}, async(err, response)=>{
        console.log("Response condulta bd",response);
        // Si no existe se crea
        if(response){
            callback(err, response);
        } else {
            user.auth0ID = user._id;
            delete user._id;
            user.nombre = user.given_name;
            delete user.given_name;
            user.apellido = user.family_name;
            delete user.family_name;
            user.documento = "";
            user.Rol =  {value:'0', label: 'Pendiente'};
            user.Estado = {value:'0', label: 'Pendiente'};
            await crearUsuario(user, (err, respuesta)=>
                callback(err, user));
        }
        });
};

const crearUsuario = async (datosUsuario, callback) =>{
    const baseDeDatos = getDB();
    if(
        Object.keys(datosUsuario).includes("nombre") &&
        Object.keys(datosUsuario).includes("apellido") &&
        Object.keys(datosUsuario).includes("documento") &&
        Object.keys(datosUsuario).includes("Rol") &&
        Object.keys(datosUsuario).includes("Estado")
    ){
     //implementar codigo para crear usuario en BD
        await baseDeDatos.collection('usuario').insertOne(datosUsuario, callback)
    }else{
        return "error";
        }
}

const editarUsuario = async (id, edicion, callback)=>{
    const filtroUsuario = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('usuario')
      .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback)
};

const eliminarUsuario = async (id, callback) => {
    const filtroUsuario= { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').deleteOne(filtroUsuario, callback)
}


export {queryAllUsuarios, crearUsuario, editarUsuario, eliminarUsuario, consultarUsuario, consultarOCrearUsuario};