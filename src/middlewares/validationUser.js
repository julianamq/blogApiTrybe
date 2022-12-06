const joi = require('joi');

const validateUser = (request, response, next) => {
    const requisicao = request.body;
    const schema = joi.object({
        displayName: joi.string().min(8).required().messages({
            'string.min': '"displayName" length must be at least 8 characters long',
        }),
        email: joi.string().email().required().messages({
            'string.min': '"email" must be a valid email',
        }),
        password: joi.string().min(6).required().messages({
            'string.min': '"password" length must be at least 6 characters long',
        }),
        image: joi.string(),
    });

    const { error } = schema.validate(requisicao);
    if (error) {
       return response.status(400).json({ message: error.details[0].message });
    }
    return next();
};
    module.exports = {
        validateUser,
    };