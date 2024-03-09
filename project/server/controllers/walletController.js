const asyncHandler=require('express-async-handler')
const Wallet = require('../models/WalletModel')

const createWallet=asyncHandler(async(req, res)=>{
        const wallet=await Wallet.create(req.body)
        res.status(200).json({data: wallet})
    })

const getAllWallets=asyncHandler(async(req, res)=>{
    const wallet=await Wallet.find({})
    res.status(200).json({data: wallet})
})

const getWallet=asyncHandler(async(req, res)=>{
    const wallet=await Wallet.findById(req.params.id)
    res.status(200).json({data: wallet})
})

const updateWallet=asyncHandler(async(req, res)=>{
    const wallet=await Wallet.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: wallet})
})

const deleteWallet=asyncHandler(async(req, res)=>{
    const wallet=await Wallet.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Wallet deleted successfully"})
})

module.exports ={
    createWallet,
    getAllWallets,
    getWallet,
    updateWallet,
    deleteWallet
}