const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
  cv: {
    type: DataTypes.STRING, // Will store the Cloudinary URL
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING, // Will store the Cloudinary URL
    allowNull: true,
  },
  music: {
    type: DataTypes.STRING, // Will store the Cloudinary URL
    allowNull: true,
  },
});


module.exports = Portfolio;
