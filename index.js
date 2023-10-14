const express = require("express");

const {body, validationResult} = require("express-validator")

const registerValidator = require('./middlewares/register-validator')
const loginValidator = require('./middlewares/login-validator')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: "success",
        message: "Selamat datang di API belajar validation"
    })
})

app.post('/auth/register',
    registerValidator,
    (req, res) => {
        // const validateResult = validationResult(req);
        // if (!validateResult.isEmpty()) {
        //     return res.status(400).json({
        //         status: "failed",
        //         message: "Validation Error",
        //         error: validateResult.array()
        //     })
        // }
    
        validationResult(req).throw()

const body = req.body;
return res.status(200).json({
    status: "success",
    message: "Berhasil Register",
    data: body
    }) 
})

app.post ('/auth/login',
loginValidator,
(req, res) => {
//     const validateResult = validationResult(req);
//     if(!validateResult.isEmpty()){
//       return res.status(400).json({
//         status: "failed",
//         message: "Validation Error",
//         error: validateResult.array()
//       })  
//     }

validationResult(req).throw()

    const body = req.body;
    return res.status(200).json({
        status: "success",
        message: "Berhasil login",
        data: body
    }) 
})

app.use(errorHandlerMiddleware)

app.listen(2000, ()=> {
    console.log(`app start at http://localhost:2000`)
})