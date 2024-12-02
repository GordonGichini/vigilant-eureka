const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Portfolio = sequelize.define('Portfolio', {
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
    validate: { isUrl: true },
  },
  githubUrl: {
    type: DataTypes.STRING,
    validate: { isUrl: true },
  },
  xUrl: {
    type: DataTypes.STRING,
    validate: { isUrl: true },
  },
  cvUrl: {
    type: DataTypes.STRING, // Will store the Cloudinary URL
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING, // Will store the Cloudinary URL
    allowNull: true,
  },
  musicUrl: {
    type: DataTypes.STRING, // Will store the Cloudinary URL
    allowNull: true,
  },
});

// Define relationship
Portfolio.belongsTo(User, { foreignKey: 'userId' });

module.exports = Portfolio;
