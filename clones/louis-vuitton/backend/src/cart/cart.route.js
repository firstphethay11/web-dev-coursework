// louisvuitton-api/src/cart/cart.route.js (เวอร์ชันสมบูรณ์)

import express from 'express';
import db from '../mysql.db.js';

// 1. สร้าง router ขึ้นมาก่อน
const router = express.Router();

// louisvuitton-api/src/cart/cart.route.js

// ... โค้ด import, post, delete ที่มีอยู่แล้ว ...

// --- เพิ่มส่วนนี้เข้าไป ---
// GET /api/cart/:sessionId
router.get('/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;

        // ใช้ JOIN เพื่อดึงข้อมูลสินค้า (ชื่อ, ราคา, รูป) มาพร้อมกันเลย
        const [items] = await db.query(
            `SELECT p.product_id, p.name, p.price, p.image_url, c.quantity 
             FROM cart_items c
             JOIN products p ON c.product_id = p.product_id
             WHERE c.session_id = ?`,
            [sessionId]
        );

        res.json({ success: true, data: items });

    } catch (error) {
        console.error('Error in /api/cart/:sessionId:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// 2. กำหนด route /add
router.post('/add', async (req, res) => {
    try {
        const { sessionId, productId } = req.body;

        if (!sessionId || !productId) {
            return res.status(400).json({ success: false, message: 'Session ID and Product ID are required' });
        }

        const [existingItems] = await db.query(
            'SELECT * FROM cart_items WHERE session_id = ? AND product_id = ?',
            [sessionId, productId]
        );

        if (existingItems.length > 0) {
            await db.query(
                'UPDATE cart_items SET quantity = quantity + 1 WHERE session_id = ? AND product_id = ?',
                [sessionId, productId]
            );
        } else {
            await db.query(
                'INSERT INTO cart_items (session_id, product_id, quantity) VALUES (?, ?, 1)',
                [sessionId, productId]
            );
        }

        res.json({ success: true, message: 'Product added to cart successfully' });

    } catch (error) {
        console.error('Error in /api/cart/add:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// louisvuitton-api/src/cart/cart.route.js

// ... โค้ด import และ router.post('/add', ...) ที่มีอยู่แล้ว ...

// --- เพิ่มส่วนนี้เข้าไป ---
// DELETE /api/cart/remove
router.delete('/remove', async (req, res) => {
    try {
        const { sessionId, productId } = req.body;

        if (!sessionId || !productId) {
            return res.status(400).json({ success: false, message: 'Session ID and Product ID are required' });
        }

        const [result] = await db.query(
            'DELETE FROM cart_items WHERE session_id = ? AND product_id = ?',
            [sessionId, productId]
        );

        if (result.affectedRows > 0) {
            res.json({ success: true, message: 'Product removed from cart' });
        } else {
            res.status(404).json({ success: false, message: 'Product not found in cart' });
        }

    } catch (error) {
        console.error('Error in /api/cart/remove:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// 3. export router ออกไปให้ไฟล์อื่นเรียกใช้ (สำคัญที่สุด)
export default router;