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
        return res.status(401).json({error:"username or passsowrd not correct"});
    }

     //generate Token
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE_TIME,
    });

    return res.status(201).json({data:user,token});
})

//@desc     make sure user is loged in
const protect=asyncHandler(async(req,res,next)=>{
    //(1)check if token already exists
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
    }
    if(!token){
        return res.status(401).json({error:'you are not login to get access to this route'})
    }

    //(2)verify token (no change happen | expiration date)
    const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY)

    //(3)check if user exists
    const currentUser=await User.findById(decoded.userId);
    if(!currentUser){
        return res.status(401).json({error:"the user that belongs to this token doesn't exist"})
    }

    //(4)check if user change his password after token created
    if(currentUser.passwordChangedAt){
        const passChangedTimestamp=parseInt(currentUser.passwordChangedAt.getTime()/1000,10);  
    
    //password changed after token created
    if(passChangedTimestamp>decoded.iat){
        return res.status(401).json({error:"the user changed his password , please login again.."})
    }
    }

    req.user = currentUser;
    next();
})

//@desc     make sure user is authorized to access routes
const allowedTo=(...roles)=>asyncHandler(async(req,res,next)=>{
    if(!roles.includes(req.user.role)){
        return res.status(403).json({error:'you are not allowed to access this route'})
    }
    next();
})

module.exports ={
    signUp,
    logIn,
    protect,
    allowedTo
}