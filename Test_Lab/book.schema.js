import mongoose from "mongoose";
// 1. สร้าง Schema
const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        default: 'NaN'
    },
    author: {
        type: String,
        default: 'First'
    }
}, { timestamps: true })

// 2. แปลง Schema เป็น Model
const bookModel = mongoose.model("products", bookSchema);
//products คือชื่อ collection

export default bookModel;