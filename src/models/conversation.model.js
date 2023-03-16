const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversations = db.define('conversation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        fiel: 'type_id',
    }
});

module.exports = Conversations; 