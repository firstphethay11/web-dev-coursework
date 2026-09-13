import mongoose from "mongoose";

// 1️ สร้าง Schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // ต้องระบุค่า
    },
    color: {
      type: String,
      default: 'NaN', // ค่า default ถ้าไม่ระบุ
    },
    price: {
      type: Number,
      default: 0, // ค่า default ถ้าไม่ระบุ
    },
  },
  {
    timestamps: true, // สร้าง createdAt และ updatedAt อัตโนมัติ
  }
);

// แปลง Schema เป็น Model
// "products" คือชื่อ collection ใน MongoDB
const ProductModel = mongoose.model("products", ProductSchema);

// Export Model
export default ProductModel;
