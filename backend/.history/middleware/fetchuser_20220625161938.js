var jwt = require('jsonwebtoken');

const fetchuser=(req,res,next)=>{
    //Get the user from jwt token and add id to req object
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send()
    }
}