import Joi from 'joi';

module.exports.contactSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	message: Joi.string().required(),
}).required();
