const mongoose = require('mongoose');
//usar MongoDB Atlas
mongoose.connect('mongodb://localhost/BucketLink', {
    useCreateIndex: true,
    useNewUrlParser:  true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})

var db = mongoose.connection

db.on('error', function(err){
  console.log('connection error', err)
})


db.once('open', function(){
  console.log('Connection to DB successful')
})
