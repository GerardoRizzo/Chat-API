const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

module.exports = Messages; 