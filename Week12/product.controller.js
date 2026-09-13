import ProductService from "./product.service.js";

const ProductController = {
  // สร้างสินค้าใหม่
  createProduct: async (req, res) => {
    const { name, color, price } = req.body;

    // เรียกใช้ service เพื่อสร้างสินค้า
    const create = await ProductService.create({ name, color, price });

    // ส่งผลลัพธ์กลับ
    res.status(201).json({
      success: true,
      data: create,
    });
  },
    getProduct : async (req,res)=>{
    const products = await ProductService.getAll()
    res.status(200).json({
    success:true,
    data: products
    })
    },

    getProductById : async (req,res)=>{
    const {id} = req.params
    const products = await ProductService.getOneByID(id)
    res.status(200).json({
    success:true,
    data: products
    })
    }

    ,
    updateProduct : async (req,res)=>{
    const {id} = req.params
    const {name,color,price} = req.body
    const updated = await ProductService.updateOneById(id,{name,color,price})
    res.status(200).json({
    success:true,
    data: updated
    })
    },

    deleteProduct: async (req, res) => {
  const { id } = req.params;

  try {
    // เรียกใช้ service เพื่อลบ product ตาม id
    const result = await ProductService.deleteOneById(id);

    if (result.deletedCount === 0) {
      // กรณีไม่พบ product
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // ลบสำเร็จ
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });

  } catch (error) {
    // กรณีเกิดข้อผิดพลาด
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

    
    
    
};

export default ProductController;
