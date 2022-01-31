const db = require("../models");
//const noticias = require("../models/noticias");
const Cliente = db.clientes;
const Noticia = db.noticias;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

     
    
      // Create a Tutorial
      const cliente = {
        nombre: req.body.name,
        apellido: req.body.lastname,
        fechaNacimiento: req.body.date,
        estado: req.body.estado
      };
     
      // Save Tutorial in the database
      Cliente.create(cliente)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });

   
};



// Find all Noticias with an id
exports.findAll = (req, res) => {
  const id = req.params.idNoticia;
 
  Noticia.findAll({
    where:{
      id_tipo : id
    }
  })
  .then(data => {
    if (data) {
    
      res.send(data );
    } else {
      res.status(404).send({
        message: `Cannot find Cliente with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Cliente with id=" + id
    });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

  const id = req.query.id
  const clienteDatos = req.body
  const cliente = {
    nombre: req.body.name,
    apellido: req.body.lastname,
    fechaNacimiento: req.body.date,
    estado: req.body.estado
  };
 
  Cliente.update(cliente, {
    where: { id: id }
  })
    .then(num => {
      
      if (num == 1) {
        res.send({
          message: "Cliente was updated successfully.", clienteDatos 
        });
      } else {
        res.send({ 
          message: `Cannot update Cliente with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({

        message: "Error updating Tutorial with id=" + id , clienteDatos , err
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => { 
  const id = req.query.id 
  
  Cliente.destroy( {
    where: { id: id } 
  })
    .then(num => {
      
      if (num == 1) {
        res.send({
          message: "Cliente was Destroyed successfully. "  , id
        });
      } else {
        res.send({ 
          message: `Cannot update Cliente with id=${id}. Maybe Cliente was not found or req.body is empty!`
        });
      }
    }).catch(err=>{
      res.status(500).send({

        message: "Error Deleting Tutorial with id=" + id  , err
      });
    })
};