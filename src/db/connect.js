const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sasDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('Connection is successful');
}).catch((err) =>{
    console.log(err);
})