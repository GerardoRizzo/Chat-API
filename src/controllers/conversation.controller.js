const ConversationServices = require('../services/conversation.services')

const createPersonalConversation = async (req, res, next) => {
    try {
        const newPersonalConversation = req.body;
        const post = await ConversationServices.create(newPersonalConversation);
        res.status(201).json(post);
    } catch (error) {
        next(error)
    }
};

const createGroupConversation = async (req, res, next) => {
    try {
        const newGroupConversation = req.body;
        const post = await ConversationServices.create(newGroupConversation);
        res.status(201).json(post);
    } catch (error) {
        next(error)
    }
};

const deleteConversation = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ConversationServices.delete(id);
        res.status(204).send();
    } catch (error) {
        next(error)
    }
};

const getConversations = async (req, res, next) => {
    try {
      const conversation = await ConversationServices.getAll();
      res.json(posts);
    } catch (error) {
      next(error);
    }
};
 
const getConversationsWithMessages = async (req, res, next) => {
    try {
      const { conversationId } = req.params;
      const conversationWithMessages = await ConversationServices.conversationWithMessages(conversationId);
      res.json(conversationWithMessages);
    } catch (error) {
      next(error);
    }
};

module.exports = {
    createPersonalConversation,
    createGroupConversation,
    deleteConversation,
    getConversations,
    getConversationsWithMessages
}