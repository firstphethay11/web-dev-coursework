import ProductModel from "./product.schema.js";

// สร้าง service ชื่อ ProductService (เก็บฟังก์ชันที่ใช้จัดการข้อมูล product)
const ProductService = {
// ฟังก์ชัน create ส าหรับสร้างสินค้าใหม่
create: (payload) => {

// new ProductModel(payload) -> สร้าง object ใหม่จากข้อมูล payload
// .save() -> บันทึก object นี้ลงใน MongoDB
return new ProductModel(payload).save();
},
    getAll: (query = {})=>{
    return ProductModel.find(query)
},
    getOneByID : (id = {})=>{
    return ProductModel.findOne({_id:id})
},
    updateOneById : (id,payload)=>{
    return ProductModel.updateOne({_id:id},{$set:payload})
},
    deleteOneById : (id) =>{
    return ProductModel.deleteOne({_id:id})
}

}

export default ProductService;