const Conversations = require('./conversation.model');
const Messages = require('./message.model');
const Types = require('./type.model');
const Users = require('./user.model');

const initModels = () => {
    Users.hasMany(Conversations, { foreignKey: 'title' });
    Conversations.belongsTo(Users, { foreignKey: 'title' });

    Users.hasMany(Messages, { foreignKey: 'content' });
    Messages.belongsTo(Users, { foreignKey: 'content' });

    Conversations.hasMany(Messages, { foreignKey: 'content' });
    Messages.belongsTo(Conversations, { foreignKey: 'content' });

    Conversations.hasMany(Users, { foreignKey: 'username' });
    Users.belongsTo(Conversations, { foreignKey: 'username' });

    Types.hasMany(Conversations, { foreignKey: 'type_id' });
    Conversations.belongsTo(Types, { foreignKey: 'type_id' });
}

module.exports = initModels;