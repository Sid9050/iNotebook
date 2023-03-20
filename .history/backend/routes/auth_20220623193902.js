const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');



//Create a user using :POST "/api/auth". Doesn't require Auth
router.get('/',(req,[
    body('password').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.json(req.body);
})

module.exports=router