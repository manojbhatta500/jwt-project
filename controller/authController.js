const users = require('../model/user');



const handleError = (err)=>{
    console.log(err.message,err.code);
}

module.exports.signup_get = (req,res)=>{
    res.render('signup');
}


module.exports.login_get = (req,res)=>{
    res.render('login');
}


module.exports.signup_post = async(req,res)=>{
    const { email , password} = req.body;
    try{
        const user = await users.create({email,password});
        res.status(200).json(user);   
    }catch(e){
        handleError(e);
        // console.log(e);
        // res.status(400).json({
        //     status: e
        // });
    }
}


module.exports.login_post = (req,res)=>{
    console.log(req.body);
    const { email , password} = req.body;
    res.send('signup post');
}