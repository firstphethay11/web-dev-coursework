import bookService from "./service.js"
const bookController = {
    createbook: async (req, res) => {
        const { id, title, author } = req.body
        const newbook = await bookService.create({ id, title, author })
        res.status(201).json({
            success: true,
            data: newbook
        })
    }
}

export default bookController