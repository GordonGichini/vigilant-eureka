const Portfolio = require('../models/Portfolio');
const { Portfolio, User } = require('../models');
const cloudinary = require('../config/cloudinary');

const uploadFileToCloudinary = async (file, folder) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder,
      resource_type: file.mimetype.startsWith('audio') ? 'video' : 'image',
    });
    return result.secure_url;
  } catch (error) {
    throw new Error('File upload failed: ' + error.message);
  }
};

const createPortfolio = async (userId, portfolioData, files) => {
  const { name, title, linkedInUrl, githubUrl, xUrl } = portfolioData;

  // Upload files to Cloudinary
  const cv = files.cv ? await uploadFileToCloudinary(files.cv[0], 'portfolios/cv') : null;
  const image = files.image ? await uploadFileToCloudinary(files.image[0], 'portfolios/images') : null;
  const music = files.music ? await uploadFileToCloudinary(files.music[0], 'portfolios/music') : null;

  // Create Portfolio record
  const portfolio = await Portfolio.create({
    name,
    title,
    linkedInUrl,
    githubUrl,
    xUrl,
    cv,
    image,
    music,
    userId,
  });

  return portfolio;
};

// Fetch a portfolio by ID
const getPortfolioById = async (id) => {
    // Fetch the portfolio along with associated user
    const portfolio = await Portfolio.findOne({
      where: { id },
      include: {
        model: User,
        attributes: ['email'], // Fetch relevant user details
      },
    });
  
    if (!portfolio) {
      throw new Error('Portfolio not found');
    }
  
    return portfolio;
  };

module.exports = {
  createPortfolio,
  getPortfolioById
};
