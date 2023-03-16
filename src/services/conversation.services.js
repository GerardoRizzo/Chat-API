const Conversation = require('../models/conversation.model');

class ConversationServices {
    static async create(newPersonalConversation) {
        try {
            const result = await Conversation.create(newPersonalConversation)
        } catch (error) {
            throw error;
        }
    }

    static async create(newGroupConversation) {
        try {
            const result = await Conversation.create(newGroupConversation)
        } catch (error) {
            throw error;
        }
    }    

    static async delete (id) {
        try {
            const result = Conversation.destroy({
                where: {id}
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
          const result = await Conversation.findAll({
            attributes: { exclude: ["typeId"] },
            include: [
              {
                model: Conversation,
                as: "title",
                attributes: ["title"],
              },
            ],
          });
          return result;
        } catch (error) {
          throw error;
        }
    }

    static async conversationWithMessages(conversationId) {
        try {
          const result = await Conversation.findByPk(conversationId, {
            attributes: { exclude: ["type_id"] },
            include: [
              {
                model: Conversation,
                as: "title",
                attributes: ["tile"],
              },
            ],
          });
          return result;
        } catch (error) {
          throw error;
        }
    }

}

module.exports = ConversationServices;