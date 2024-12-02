const express = require('express');
const multer = require('multer');
const { createPortfolio } = require('../controllers/portfolio');
const authenticateToken = require('../middlewares/authenticateToken'); // JWT middleware

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post(
  '/portfolio',
  authenticateToken,
  upload.fields([
    { name: 'cv', maxCount: 1 },
    { name: 'image', maxCount: 1 },
    { name: 'music', maxCount: 1 },
  ]),
  createPortfolio
);

module.exports = router;
