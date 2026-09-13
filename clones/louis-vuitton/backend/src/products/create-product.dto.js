import Joi from 'joi';

const createProductDto = Joi.object({
    name: Joi.string().max(100).required(),
    // .required() หมายถึงห้ามเว้นว่าง

    description: Joi.string().optional().allow(''),
    // .optional() หมายถึงจะส่งมาหรือไม่ก็ได้ .allow('') คืออนุญาตให้เป็นค่าว่างได้

    price: Joi.number().positive().required(),
    // .positive() หมายถึงต้องเป็นตัวเลขบวกเท่านั้น

    stock: Joi.number().integer().min(0).required(),
    // .integer() หมายถึงต้องเป็นเลขจำนวนเต็ม .min(0) คือห้ามติดลบ

    image_url: Joi.string().max(255).optional().allow(''),

    category_id: Joi.number().integer().positive().optional()
});

export default createProductDto;