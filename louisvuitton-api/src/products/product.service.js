// product.service.js (ฉบับแก้ไข)

import pool from '../mysql.db.js';

const productService = {
    createProduct: async (payload) => {
        const sql = "INSERT INTO products SET ?";
        const [result] = await pool.query(sql, [payload]);
        return { id: result.insertId, ...payload };
    },

    getAllProducts: async () => {
        const [rows] = await pool.query("SELECT * FROM products");
        return rows;
    },

    getProductById: async (id) => {
        const [rows] = await pool.query("SELECT * FROM products WHERE product_id = ?", [id]);
        return rows[0] || null;
    },

    deleteProduct: async (id) => {
        const [result] = await pool.query("DELETE FROM products WHERE product_id = ?", [id]);
        return result.affectedRows > 0; // true ถ้ามีการลบสำเร็จ
    },

    // ✅ ปรับปรุงฟังก์ชันนี้ใหม่ทั้งหมด
    updateProduct: async (id, payload) => {
        const [result] = await pool.query("UPDATE products SET ? WHERE product_id = ?", [payload, id]);
        
        // ตรวจสอบว่าหา ID เจอหรือไม่ (affectedRows > 0)
        // ถ้าหาเจอ ให้ดึงข้อมูลล่าสุดกลับไปเสมอ
        if (result.affectedRows > 0) {
            const updatedProduct = await productService.getProductById(id);
            return updatedProduct;
        }
        
        // ถ้าไม่เจอ ID เลย (affectedRows === 0) ให้คืนค่า null
        return null;
    }
};

export default productService;