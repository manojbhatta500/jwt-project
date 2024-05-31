const mongoose = require('mongoose');

var url = "mongodb://localhost:27017/jwt";
mongoose.connect(url);


const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to local database');
});


db.on('disconnected',()=>{
    console.log('disconnected to local database');
})

db.on('error',(error)=>{
    console.log('disconnected to local database reason :',error);
});


module.exports = db;