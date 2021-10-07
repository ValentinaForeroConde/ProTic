import Express from "express";

const app = Express()

app.use(Express.json());

app.get('/usuario',(req,res)=>{
    console.log('mensaje');
    const usuarios = [
        {nombre: 'valentina', apellido:'forero', id:'123'}, 
        {nombre: 'maria', apellido:'forero', id:'234'}
    ];
    res.send(usuarios);
})

app.post('/usuario/nuevo',(req,res)=>{
    
    const datosUsuario = req.body;
    console.log('llaves:', Object.keys(datosUsuario));
    try{
        if(
            Object.keys(datosUsuario).includes("name") &&
            Object.keys(datosUsuario).includes("lastname") &&
            Object.keys(datosUsuario).includes("id") 
        ){
            //implementar codigo para crear usuario en BD
            res.sendStatus(200);
        }else{
            res.sendStatus(500);
        }
    } catch{
        res.sendStatus(500);
    }
});

app.listen(5000, ()=>{
    console.log('ultimo ');
})