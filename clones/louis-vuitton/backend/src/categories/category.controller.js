import categoryService from './category.service.js';

const categoryController = {
    getAll: async (req, res) => {
        try {
            const categories = await categoryService.getAllCategories();
            res.json({ success: true, data: categories });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const category = await categoryService.getCategoryById(id);
            if (!category) return res.status(404).json({ success: false, message: "Category not found" });
            res.json({ success: true, data: category });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const newCategory = await categoryService.createCategory(req.body);
            res.status(201).json({ success: true, data: newCategory });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const updated = await categoryService.updateCategory(id, req.body);
            if (!updated) return res.status(404).json({ success: false, message: "Category not found or no change" });
            res.json({ success: true, data: updated });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await categoryService.deleteCategory(id);
            if (!deleted) return res.status(404).json({ success: false, message: "Category not found" });
            res.json({ success: true, message: "Category deleted successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
};

export default categoryController;
