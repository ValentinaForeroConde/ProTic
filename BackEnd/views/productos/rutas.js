import Express from 'express';
import { queryAllProductos, crearproducto, editarproducto, eliminarproducto, consultarproducto} from '../../controllers/productos/controller.js';

const rutasProductos = Express.Router();

const genericCallback = (res) => (err, result)=>{
    if(err){
        res.status(500).send('error consultando los productos');
    }else{
        res.json(result);
    }
};

rutasProductos.route('/producto').get((req,res)=>{
    console.log('alguien hizo get en la ruta /producto');
    queryAllProductos(genericCallback(res));
});

rutasProductos.route('/producto/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta /producto');
    consultarproducto(req.params.id, genericCallback(res));
});

rutasProductos.route('/producto').post((req,res)=>{
    crearproducto(req.body, genericCallback(res));
});

rutasProductos.route('/producto/:id').patch((req, res) => {
    editarproducto(req.params.id, req.body, genericCallback(res));
  });

rutasProductos.route('/producto/:id').delete((req,res)=>{
    eliminarproducto(req.params.id, genericCallback(res));
});

export default  rutasProductos;