const User = require('./User');
const Portfolio = require('./Portfolio');

// Define associations
User.hasOne(Portfolio, {
  foreignKey: 'userId',
  onDelete: 'CASCADE', // If a user is deleted, their portfolio is also deleted
});
Portfolio.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { User, Portfolio };