const router = require('express').Router();
const Noticia = require('../models/Noticia');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//CREATE
router.post('/Noticia', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let imagen = req.body.imagen;
    let id = req.body.id;
    let errors = [];
    if(!id){
        errors.push({text:'Debe agregar el ID'});
    }
    if(!titulo){
        errors.push({text: 'Debe escribir un titulo'});
    }
    if(!descripcion){
        errors.push({text: 'Debe escribir una descripcion'});
    }if(!imagen){
        errors.push({text:'Debe agregar la imagen'});
    }
    if(errors.length > 0 ){
        res.send({
            errors, 
            titulo, 
            descripcion,
            id,
            imagen
        });
    }else{
        let nuevaNoticia = new Noticia({id,titulo, descripcion,imagen});
        await nuevaNoticia.save();
        res.json({ message: 'Agregada con exito'});    
    }
});


// GET
router.get('/Noticia', async (req, res)=>{
    let noticias = await (Noticia.find().lean()).sort({fecha: 'desc'});
    res.send(noticias);
});
// GET BY ID
router.get('/Noticia/:id', async (req, res)=>{
    let noticia = await Noticia.findById(req.params.id).lean();
    res.send(noticia);
});

//MODIFICAR
router.put('/Noticia/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    await Noticia.findByIdAndUpdate(req.params.id, {titulo, descripcion});
    res.json({ message: 'Actualizada con exito'});
});
router.delete('/Noticia/:id', async (req, res)=>{
    await Noticia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Actualizada con exito'});

});

module.exports = router;
