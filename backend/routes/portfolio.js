const express = require('express');
const upload = require('../config/multerConfig'); // Updated multer config
const { createPortfolio, getPortfolioById } = require('../controllers/portfolio');
const authenticateToken = require('../middlewares/authenticateToken'); // JWT middleware

const router = express.Router();

router.post(
  '/create',
  authenticateToken,
  upload.fields([
    { name: 'cv', maxCount: 1 },
    { name: 'image', maxCount: 1 },
    { name: 'music', maxCount: 1 },
  ]),
  createPortfolio
);

router.get('/portfolio/:id', authenticateToken, getPortfolioById);

module.exports = router;
