const MessageServices = require('../services/message.services')

const createMessage = async (req, res, next) => {
    try {
        const newMessage = req.body;
        const post = await MessageServices.create(newMessage);
        res.status(201).json(post);
    } catch (error) {
        next(error)
    }
};

const deleteMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        await MessageServices.delete(id);
        res.status(204).send();
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createMessage,
    deleteMessage
}