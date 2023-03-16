const { Router } = require('express');
const { createMessage, deleteMessage } = require('../controllers/message.controllers')

const router = Router();

router.post('api/v1/message', createMessage);
router.delete('/api/v1/message/:id', deleteMessage);

module.exports = router;