require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const user = require('./routes/user');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Database Connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Sync Models
sequelize.sync({ force: false }).then(() => console.log('Models synchronized'));

// Routes
app.use('/api', user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
