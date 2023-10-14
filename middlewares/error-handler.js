const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    if(err){
        const extractedErrors = {}

        extractedErrors.array().map(err => {
            if(!extractedErrors[err.path]){
                extractedErrors[err.path] = [];
            }
            extractedErrors[err.path].push(err.msg);
        })

        return res.status(400).json({
            status: "failed",
            message: "Validation Error",
            error: error.array()
        })
    }

next()
}

module.exports = errorHandlerMiddleware