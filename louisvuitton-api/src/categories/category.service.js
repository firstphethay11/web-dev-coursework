import pool from '../mysql.db.js';

const categoryService = {
    getAllCategories: async () => {
        const [rows] = await pool.query("SELECT * FROM categories");
        return rows;
    },

    getCategoryById: async (id) => {
        const [rows] = await pool.query("SELECT * FROM categories WHERE category_id = ?", [id]);
        return rows[0] || null;
    },

    createCategory: async (payload) => {
        const [result] = await pool.query("INSERT INTO categories SET ?", [payload]);
        return { id: result.insertId, ...payload };
    },

    updateCategory: async (id, payload) => {
        const [result] = await pool.query("UPDATE categories SET ? WHERE category_id = ?", [payload, id]);
        if (result.affectedRows === 0) return null;
        const updated = await categoryService.getCategoryById(id);
        return updated;
    },

    deleteCategory: async (id) => {
        const [result] = await pool.query("DELETE FROM categories WHERE category_id = ?", [id]);
        return result.affectedRows > 0;
    }
};

export default categoryService;
