const asyncHandler=require('express-async-handler')
const Agenda = require('../models/AgendaModel')

const createAgenda=asyncHandler(async(req, res)=>{
        const agenda=await Agenda.create(req.body)
        res.status(200).json({data: agenda})
    })

const getAllAgendas=asyncHandler(async(req, res)=>{
    const agenda=await Agenda.find({})
    res.status(200).json({data: agenda})
})

const getAgenda=asyncHandler(async(req, res)=>{
    const agenda=await Agenda.findById(req.params.id)
    res.status(200).json({data: agenda})
})

const updateAgenda=asyncHandler(async(req, res)=>{
    const agenda=await Agenda.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json({data: agenda})
})

const deleteAgenda=asyncHandler(async(req, res)=>{
    const agenda=await Agenda.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Agenda deleted successfully"})
})

module.exports ={
    createAgenda,
    getAllAgendas,
    getAgenda,
    updateAgenda,
    deleteAgenda
}