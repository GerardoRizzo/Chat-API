const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const createUserValidator = [
    check('username', 'Username error')
        .exists().withMessage('Username field required')
        .notEmpty().withMessage('Username field required')
        .isString().withMessage('Username field has to be a string')
        .isLength({ min: 5, max: 30}).withMessage('Username need more than 5 characters and less than 30'),
    check('email', 'Email error')
        .exists().withMessage('Username field required')
        .notEmpty().withMessage('Email field required')
        .isString().withMessage('Email field has to be a string')
        .isLength({ min: 7, max: 30}).withMessage('Email need more than 7 characters and less than 30')
        .isEmail().withMessage('Not the correct format'),
    check('password', 'Password error')
        .exists()
        .notEmpty()
        .isString()
        .isLength({ min: 7}).withMessage('Password need at least 7 characters'),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = createUserValidator
