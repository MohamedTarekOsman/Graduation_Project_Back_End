const User = require("../models/UserModel");
const asyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const bcrypt =require("bcryptjs");

const signUp=asyncHandler(async(req,res,next)=>{
    //create a new user
    const user=await User.create(req.body)

    //generate Token
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE_TIME,
    });


    res.status(201).json({data:user,token});
})

const logIn=asyncHandler(async(req,res,next)=>{
    //check if user already exists in database
    const user=await User.findOne({username:req.body.username})
    if(!user||!(await bcrypt.compare(req.body.password,user.password))){
       res.status(401).json({error:"username or passsowrd not correct"});
    }

     //generate Token
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE_TIME,
    });

    res.status(201).json({data:user,token});
})

module.exports ={
    signUp,
    logIn
}