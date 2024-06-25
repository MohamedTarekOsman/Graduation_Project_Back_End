const asyncHandler=require('express-async-handler')
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');
const createUser=asyncHandler(async(req, res)=>{
        const user=await User.create(req.body)
        res.status(200).json({data: user})
    })

const getAllUsers=asyncHandler(async(req, res)=>{
    const user=await User.find({})
    res.status(200).json({data: user})
})

const getUser=asyncHandler(async(req, res)=>{
    const user=await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({error:"User not found"})
    }
    res.status(200).json({data: user})
})

const updateUser=asyncHandler(async(req, res)=>{
    const user=await User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        role: req.body.role,
        password: await bcrypt.hash(req.body.password,8),
    },{
        new:true,
    })
    if(!user){
        return res.status(404).json({error:"User not found"})
    }
    res.status(200).json({data: user})
})

const deleteUser=asyncHandler(async(req, res)=>{
    const user=await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).json({error:"User not found"})
    }
    res.status(200).json({message: "User deleted successfully"})
})

module.exports ={
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}