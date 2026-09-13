const requestInfoMiddleware = function (req,res,next) {
console.log(`URL: ${req.originalUrl} Method: ${req.method} Date:${new Date()}`)
  next()
}

export default requestInfoMiddleware