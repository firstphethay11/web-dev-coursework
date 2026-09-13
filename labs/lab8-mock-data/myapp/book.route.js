import express from "express";
import {getBooks} from "./book.controller.js";
import {getBookById} from "./book.controller.js";
import {createBook} from "./book.controller.js";
import {updateBook} from "./book.controller.js";
import {deleteBook} from "./book.controller.js";

const router = express.Router();

router.get("/api/book", getBooks);
router.get("/book/:id", getBookById);
router.post("/book", createBook);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
