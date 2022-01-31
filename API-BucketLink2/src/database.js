const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BucketLink', {
    useCreateIndex: true,
    useNewUrlParser:  true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(db =>{
    console.log('DB connected');
})
.catch(err =>{
    console.log(`DB error: ${err.message}`);
})

