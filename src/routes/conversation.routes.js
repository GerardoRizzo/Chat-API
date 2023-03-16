const { Router } = require('express');
const { createPersonalConversation, createGroupConversation, deleteConversation, getConversations, getConversationsWithMessages } = require('../controllers/conversation.controller')

const router = Router();

router.post('api/v1/conversations', createPersonalConversation);
router.post('/api/v1/conversations', createGroupConversation);
router.delete('/api/v1/conversations/:id', deleteConversation);
router.get("/api/v1/conversations", getConversations);
router.get("/api/v1/conversations/:conversationId/message", getConversationsWithMessages);

module.exports = router;