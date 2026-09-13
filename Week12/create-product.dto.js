import Joi from 'joi'
// สร้าง Joi schema
export const CreateProductDto = Joi.object({
name: Joi.string().required(), //ฟิลด์ name เป็น string และต้องส่งมา
color: Joi.string().optional().default('NaN'), // ฟิลด์ color เป็น string และไม่บังคับส่งมา, มีค่าเริ่มต้นเป็น 'NaN' ถ้าไม่ระบุ
price: Joi.number().optional().default(0) // ฟิลด์ price เป็น number, ไม่บังคับส่งมา และมีค่าเริ่มต้นเป็น 0 ถ้าไม่ระบุ
})