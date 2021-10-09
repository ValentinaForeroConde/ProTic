import { getDB } from '../../db/db.js';
import {ObjectId} from 'mongodb';

const queryAllProductos = async (callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('producto').find().limit(50).toArray(callback);
};

const consultarproducto = async (id, callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('producto').findOne({_id: new ObjectId(id)}, callback);
}

const crearproducto = async (datosproducto, callback) =>{
    const baseDeDatos = getDB();    
    if(
        Object.keys(datosproducto).includes("nombre") &&
        Object.keys(datosproducto).includes("descripcion") &&
        Object.keys(datosproducto).includes("valor") &&
        Object.keys(datosproducto).includes("Estado") 
    ){
     //implementar codigo para crear producto en BD
        await baseDeDatos.collection('producto').insertOne(datosproducto, callback)
    }else{
        return "error";
        }
}

const editarproducto = async (id, edicion, callback)=>{
    const filtroproducto = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('producto')
      .findOneAndUpdate(filtroproducto, operacion, { upsert: true, returnOriginal: true }, callback)     
};

const eliminarproducto = async (id, callback) => {
    const filtroproducto= { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('producto').deleteOne(filtroproducto, callback)
}


export {queryAllProductos, crearproducto, editarproducto, eliminarproducto, consultarproducto};