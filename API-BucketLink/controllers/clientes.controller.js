const db = require("../models");
const Cliente = db.cliente;
const Op = db.Sequelize.Op;




exports.findAll = (req, res) => {
  
  
  Cliente.findAll({
    
    }) 
    .then(data => {
      if (data) {
        console.log(data.dataValues)
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cliente with id=.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cliente with id="
      });
    });
  };

  exports.findId = (req, res) => {
    Cliente.findAll({
  
      where: {
        id_Cliente: req.params.id_Cliente
       }
       
     })
     .then(data => {
       if (data) {
      //   console.log(data.dataValues)
         res.send(data  );
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
  