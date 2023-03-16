const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Types = db.define('types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    }
});

module.exports = Types; 