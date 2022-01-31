const router = require('express').Router();
const Noticia = require('../models/Noticia');
const mongoose = require('mongoose');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//POST: CREAR
router.post('/Noticia', async (req, res) => {
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let _id = new mongoose.Types.ObjectId;
    let idPersona = req.body.idPersona;
    let errors = [];
    if (!titulo) {
        errors.push({ text: 'Escribir un titulo!' });
    }
    if (!descripcion) {
        errors.push({ text: 'Escribir una descripcion!' });
    } if (!idPersona) {
        errors.push({ text: 'Agregar el autor!' });
    }
    if (errors.length > 0) {
        res.send({
            errors,
            titulo,
            descripcion,
            idPersona
        });
    } else {
        let nuevaNoticia = new Noticia({ _id, titulo, descripcion, idPersona });
        await nuevaNoticia.save();
        res.json({ message: 'Noticia agregada con exito!' });
    }
});


// GET: ALL
router.get('/Noticia', async (req, res) => {
    let noticias = await (Noticia.find().lean()).sort({ fecha: 'desc' });
    res.send(noticias);
});
// GET: ID
router.get('/Noticia/:id', async (req, res) => {
    let noticia = await Noticia.findById(req.params.id).lean();
    res.send(noticia);
});

//PUT: ACTUALIZAR
router.put('/Noticia/:id', async (req, res) => {
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    await Noticia.findByIdAndUpdate(req.params.id, { titulo, descripcion });
    res.json({ message: 'Noticia Actualizada con exito' });
});

// DELETE
router.delete('/Noticia/:id', async (req, res) => {
    await Noticia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Noticia Eliminada con exito' });

});

module.exports = router;
