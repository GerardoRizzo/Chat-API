const Messages = require('../models/message.model');

class MessageServices {
    static async create(newMessage) {
        try {
            const result = await Messages.create(newMessage)
        } catch (error) {
            throw error;
        }
    }


    static async delete (id) {
        try {
            const result = Messages.destroy({
                where: {id}
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessageServices;