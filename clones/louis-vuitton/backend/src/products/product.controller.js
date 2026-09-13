import productService from './product.service.js';

const productController = {
    addProduct: async (req, res) => {
        try {
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json({ success: true, data: newProduct });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    showAllProducts: async (req, res) => {
        try {
            const products = await productService.getAllProducts();
            res.json({ success: true, data: products });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    showProductById: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await productService.getProductById(id);
            if (!product) return res.status(404).json({ success: false, message: "Product not found" });
            res.json({ success: true, data: product });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await productService.deleteProduct(id);
            if (!deleted) return res.status(404).json({ success: false, message: "Product not found" });
            res.json({ success: true, message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const updated = await productService.updateProduct(id, req.body);
            if (!updated) return res.status(404).json({ success: false, message: "Product not found or no change" });
            res.json({ success: true, data: updated });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
};

export default productController;
