var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
const clientes = require("../controllers/clientes.controller");
const usuarios = require("../controllers/usuarios.controller");
const links = require("../controllers/links.controller");
const usuariosModel = require("../models/usuario");





router.get('/clientes', clientes.findAll);
router.get('/clientes/:id_Cliente', clientes.findId);
router.get('/clientes/perfil/:user',clientes.findUser)

router.get('/usuarios', usuarios.findAll);
router.get('/usuarios/:id_Usuario', usuarios.findId);


router.get('/links', links.findAll);
router.get('/links/:fk_id_Usuario', links.findId);

router.post('/validate',(req, res,next)=>{
   const {username,password}=req.body;

      
   console.log(username, password)
  
      models.usuario.findAll({
    
        where: {
          username: username
         }
         
       })
       .then(data => {
        //  res.send(data[0].password)
        // console.log(data[0])

       //console.log(data.usuario)

         if (data[0].password == password) {
            res.status(200).send(data  );
         } else {
             res.status(404).send({
             message: `Wrong Credentialas`
           });
         }
       })
       .catch(err => {
          res.status(500).send({
           message: "Error retrieving Cliente with id=" 
         });
       });
     

 
});



/*GET NOTICIA PER TIPO_iD */
/*
router.get('/noticias/:idNoticia', noticias.findAll);

/*GET Autores*//*
router.get('/autores', (req, res, next) => {
   models.autores.findAll({ 
    
    })
    .then(autores => {
       res.send(autores)
    })
    .catch(error => res.status(400).send(error))
 });

/* GET Autores by ID. *//*
router.get('/autores/:idAutor', autores.findAll);

/* GET tipo_noticias *//*
router.get('/tipo_noticias', (req,res,next)=>{
   models.tipo_noticias.findAll({ 
    
   })
   .then(autores => {
      res.send(autores)
   })
   .catch(error => res.status(400).send(error))
});

/* GET tipo_noticias ID *//*
router.get('/tipo_noticias/:idTipo_Noticias', tipo_noticias.findAll);

/* GET BigTable *//*
router.get('/bigtable', (req,res,next)=>{
   models.bigtable.findAll({ 
    
   })
   .then(bigtable => {
      res.send(bigtable)
   })
   .catch(error => res.status(400).send(error))

});
*/
module.exports = router;
