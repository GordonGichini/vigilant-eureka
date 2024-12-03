require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const user = require('./routes/user');
const portfolio = require('./routes/portfolio');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


// Test Database Connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Sync Models
sequelize.sync({ force: true }).then(() => console.log('Db synchronized'));

// Routes
app.use('/api/user', user);
app.use('/api/portfolio', portfolio);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
