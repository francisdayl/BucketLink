const express = require('express')
const app = express()               
require('./database');




app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(require('./routes/crudNoticia'));



const port = process.env.PORT || 8080  

app.listen(port)
console.log('API en el puerto ' + port)