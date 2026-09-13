import Joi from 'joi';

const createCategoryDto = Joi.object({
    name: Joi.string().max(100).required()
});

export default createCategoryDto;
