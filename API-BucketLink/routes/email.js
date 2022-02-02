const router = require('express').Router();
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'serverbucketlinkdawm@gmail.com',
    pass: 'serverprueba'
  }
});

router.post('/email',(req, res)=>{
    const {nombre,apellido,fechaNacimiento,ciudad,pais,correoElectronico,detalle}=req.body;

    var mailOptions = {
      from: correoElectronico,
      to: 'serverbucketlinkDAWM@gmail.com',
      subject: nombre  + ' ' + apellido + ' ' + fechaNacimiento+' '+ ciudad + ' ' + pais ,
      text: detalle 
    };

    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
      res.json({'respuesta':'enviado con exito'});
});
router.get('/' , (req, res)=>{
//res.json({'respuesta':'hola'});
});


module.exports = router;