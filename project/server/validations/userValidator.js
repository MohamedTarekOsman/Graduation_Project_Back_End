const Joi = require('joi');

const isId = (value, helpers) => {
    if (typeof(value)!=='string'||value.length!==24) {
        return helpers.error('Invalid id format'); 
    }
    return value;
};
const createUserValidator=(req, res, next)=> {
    const schema = Joi.object({
        username:Joi.string().min(3).max(32).required().messages({
            'string.base': 'name must be a string.',
            'string.min': 'name must be at least 2 characters long.',
            'string.max': 'name cannot exceed 32 characters.',
            'any.required': 'name is required.',
            }),
        password:Joi.string().required().min(8).messages({
            'string.min': 'password  must be at least 8 characters long.',
            'any.required': 'password is required.',
        }),
    })
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    }
    const result = schema.validate(req.body, options)
    if (result.error) {
        return res.status(400).json(result.error.details)
    } else {
        next()
    }
}
const getUserValidator = (req, res, next) => {
    const id = req.params.id;
    const schema = Joi.object({
        id: Joi.string().custom(isId, 'custom validation').required(),
    });
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };
    const result = schema.validate({ id }, options);
    if (result.error) {
        return res.status(400).json(result.error.details);
    } else {
        next();
    }
};
const updateUserValidator = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().custom(isId, 'custom validation').required(),
        username:Joi.string().min(3).max(32).messages({
            'string.base': 'name must be a string.',
            'string.min': 'name must be at least 2 characters long.',
            'string.max': 'name cannot exceed 32 characters.',
            }),
        password:Joi.string().email().messages({
            'email.base': 'invalid email format',
            }),
    });
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };
    const validationInput = { id: req.params.id, ...req.body };
    const result = schema.validate(validationInput, options);
    if (result.error) {
        return res.status(400).json(result.error.details);
    } else {
        next();
    }
};
const deleteUserValidator = (req, res, next) => {
    const id = req.params.id;
    const schema = Joi.object({
        id: Joi.string().custom(isId, 'custom validation').required(),
    });
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };
    const result = schema.validate({ id }, options);
    if (result.error) {
        return res.status(400).json(result.error.details);
    } else {
        next();
    }
};
module.exports={
    createUserValidator,
    getUserValidator,
    updateUserValidator,
    deleteUserValidator
}