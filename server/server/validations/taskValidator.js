const Joi = require("joi");
const Tasks = require("../models/TasksModel");

const createTaskValidator=async(req, res, next)=> {
    const schema = Joi.object({
        code:Joi.string().required().messages({
            'string.base': 'code must be a string.',
            'any.required': 'code is required.',
            }),
    })
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    }
    const result = schema.validate(req.body, options)
    const task=await Tasks.findOne({code:req.body.code})
    if(task){
        return res.status(400).json({"error":"code must be unique"})
    }
    if (result.error) {
        return res.status(400).json(result.error.details)
    } else {
        next()
    }
}

const updateTaskValidator=async(req, res, next)=> {
    const schema = Joi.object({
        code:Joi.string().messages({
            'string.base': 'code must be a string.',
            }),
    })
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    }
    const result = schema.validate(req.body, options)
    const task=await Tasks.findOne({code:req.body.code})
    if(task){
        return res.json({ error: "data must be unique" });
    }
    if (result.error) {
        return res.status(405).json(result.error.details)
    } else {
        next()
    }
}

module.exports={
    createTaskValidator,
    updateTaskValidator
}