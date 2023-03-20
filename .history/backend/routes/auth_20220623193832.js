const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');



//Create a user using :POST "/api/auth". Doesn't require Auth
router.get('/',(req,[
    body('name').isEmail(),

],res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.json(req.body);
})

module.exports=router