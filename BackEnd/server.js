import Express from "express";
import { MongoClient, ObjectId } from 'mongodb';
import Cors from 'cors'; 

const stringConexion = "mongodb+srv://Valentina:12231998Vf@proyectoprotic.ips3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let baseDeDatos;

const app = Express();

app.use(Express.json());
app.use(Cors());

app.get('/usuario',(req,res)=>{
    console.log('alguien hizo get en la ruta /usuario');
    baseDeDatos
        .collection('usuario')
        .find()
        .limit(50)
        .toArray((err,result)=>{
            if(err){
                res.status(500).send('error consultando los usuarios');
            }else{
                res.json(result);
            }
        });
    });

app.post('/usuario/nuevo',(req,res)=>{
    const datosUsuario = req.body;
    console.log('llaves:', Object.keys(datosUsuario));
    try{
        if(
            Object.keys(datosUsuario).includes("nombre") &&
            Object.keys(datosUsuario).includes("apellido") &&
            Object.keys(datosUsuario).includes("documento") &&
            Object.keys(datosUsuario).includes("Rol") &&
            Object.keys(datosUsuario).includes("Estado") 
        ){
            //implementar codigo para crear usuario en BD
            baseDeDatos.collection('usuario').insertOne(datosUsuario,(err,result)=>{
                if(err){
                    console.error(err);
                    res.sendStatus(500);
                }else{
                    console.log(result);
                    res.sendStatus(200);
                }
            })
        }else{
            res.sendStatus(500);
        }
    } catch{
        res.sendStatus(500);
    }
});

app.patch('/usuario/editar', (req, res) => {
    const edicion = req.body;
    console.log(edicion);
    const filtroUsuario = { _id: new ObjectId(edicion.id) };
    delete edicion.id;
    const operacion = {
      $set: edicion,
    };
    baseDeDatos
      .collection('usuario')
      .findOneAndUpdate(
        filtroUsuario,
        operacion,
        { upsert: true, returnOriginal: true },
        (err, result) => {
          if (err) {
            console.error('error actualizando el vehiculo: ', err);
            res.sendStatus(500);
          } else {
            console.log('actualizado con exito');
            res.sendStatus(200);
          }
        }
      );
  });

app.delete('/usuario/eliminar',(req,res)=>{
    const filtroUsuario= { _id: new ObjectId(req.body.id) };
    baseDeDatos.collection('usuario').deleteOne(filtroUsuario, (err,result)=>{
        if(err){
            console.error(err);
            res.sendStatus(500);
        }else{
            res.sendStatus(200);
        }
    })
});

const main = () => {
    client.connect((err, db) => {
      if (err) {
        console.error('Error conectando a la base de datos');
        return 'error';
      }
      baseDeDatos = db.db('usuarios');
      console.log('baseDeDatos exitosa');
      return app.listen(5000, () => {
        console.log('escuchando puerto 5000');
      });
    });
  };

main();