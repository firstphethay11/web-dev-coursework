import Joi from 'joi'
// สร้าง Joi schema
export const CreatebookDto = Joi.object({
    id: Joi.number(),
    title: Joi.string(),
    author: Joi.string()
})