const { body } = require("express-validator")

const registerValidator = [
    body("fullname")
    .notEmpty().withMessage("nama wajib diisi"),
    body("email")
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Email tidak valid"),
    body("password")
    .notEmpty().withMessage("Password wajib diisi")
    .isLength({ min: 8 }).withMessage("Password minimal 8")
    .matches(/[\W]/).withMessage('Password harus memiliki minimal 1 simbol'),
    body("bio").optional(),
    body("dob").optional().isDate().withMessage('Invalid date format (YYYY-MM-DD)')
];

module.exports = registerValidator;