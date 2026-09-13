import mongoose from "mongoose";
// 1. สร้าง Schema
const customSchema = new mongoose.Schema({
    customerID: {
        type: Number,
         default: 'NaN'
    },
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0, 
        max: 120 
    },

     phone: {
        type: Number,
        default: 'NaN'
    }
}, { timestamps: true })

// 2. แปลง Schema เป็น Model
const customModel = mongoose.model("products", customSchema);
//products คือชื่อ collection

export default customModel;