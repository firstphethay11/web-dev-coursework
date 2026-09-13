const RequestMiddleware = function (req, res, next) {
    console.info(` Method:${req.method} | URL: ${req.originalUrl} | [${new Date()}]   `)
    next()
}

export default RequestMiddleware