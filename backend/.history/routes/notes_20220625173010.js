const express=require('express');
const router=express.Router();
const User=require('../models/User');


router.get('/fetchallnotes',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

module.exports=router