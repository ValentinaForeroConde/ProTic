import Express from "express";
import Cors from 'cors'; 
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasUsuario from './views/usuarios/rutas.js';

dotenv.config({path: './.env'});

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(rutasUsuario);

const main = () => {
    return app.listen(process.env.PORT, () => {
        console.log('escuchando puerto ${process.env.PORT}');
    });
};

conectarBD(main);
