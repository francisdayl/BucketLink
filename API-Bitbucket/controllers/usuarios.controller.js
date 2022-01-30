const db = require("../models");
const Usuarios = db.usuario;
const Op = db.Sequelize.Op;




exports.findAll = (req, res) => {
 
  Usuarios.findAll({
     
    })
    .then(data => {
      if (data) {
     
        res.send(data );
      } else {
        res.status(404).send({
          message: `Cannot find BigTable with id=.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving BigTable with id=" 
      });
    });
  };
  
    
exports.findId = (req, res) => {
  let id =req.params.id_Usuario;

  Usuarios.findAll({
    where: {
      fk_id_Cliente: id
     }
     
   })
   .then(data => {
     if (data) {
    //   console.log(data.dataValues)
       res.send(data  );
     } else {
       res.status(404).send({
         message: `Cannot find Usuario with id=${id}.`
       });
     }
   })
   .catch(err => {
     res.status(500).send({
       message: "Error retrieving Usuario with id=" + id
     });
   });
 };