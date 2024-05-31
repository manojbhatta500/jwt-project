const express = require('express');
const db = require('./db');
const authRoutes = require('./routes/authRoutes');



const app = express();


app.use(express.static('public'));

app.use(express.json());



app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('home.ejs');
});


app.get('/smoothies',(req,res)=>{
    res.render('smoothies.ejs');
});


app.use(authRoutes);







const port = 8080;

app.listen(port,()=>{
    console.log('server is running in the port number',port);
});



// now i can use json input in the login and signup



// i have been using try catch all my life even in javascript i have useed try catch 
//  now i have seen then and catch which acts as try catch 
// explain try catch 