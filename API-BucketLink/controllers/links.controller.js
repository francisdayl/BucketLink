const db = require("../models");
const Link = db.link;
const Op = db.Sequelize.Op;



exports.findAll = (req, res) => {
   // console.log(id)
   Link.findAll({

   
      
    })
    .then(data => {
      if (data) {
     //   console.log(data.dataValues)
        res.send(data );
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
  Link.findAll({

    where: {
      fk_id_Usuario: req.params.fk_id_Usuario
     }
     
   })
   .then(data => {
     if (data) {
    //   console.log(data.dataValues)
       res.send(data  );
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