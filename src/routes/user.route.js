const { Router } = require('express');
const { createUserValidator } = require('../validators/users.validator');

const { createUser, UpdateUser, getAllUsers } = require('../controllers/user.controllers');


const router = Router();

router.post('/api/v1/users', createUserValidator, createUser);
router.put('/api/v1/users/:id', UpdateUser);
router.get('/api/v1/users', getAllUsers);

module.exports = router;