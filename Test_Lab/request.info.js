const logger = function (req,res,next) {
    console.log(`Method: ${req.method} Url: ${req.url} Date: ${new Date()}`)
    next()

    
}
export default logger