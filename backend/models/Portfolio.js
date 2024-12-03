const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Portfolio = sequelize.define('Portfolio', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linkedInUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { isUrl: true },
  },
  githubUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { isUrl: true },
  },
  xUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { isUrl: true },
  },
  cvPath: {
    type: DataTypes.STRING, // Will store the local file path
    allowNull: true,
  },
  imagePath: {
    type: DataTypes.STRING, // Will store the local file path
    allowNull: true,
  },
  musicPath: {
    type: DataTypes.STRING, // Will store the local file path
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = Portfolio;
