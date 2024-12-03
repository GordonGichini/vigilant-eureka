const { Portfolio, User } = require('../models');


const createPortfolio = async (userId, portfolioData, files) => {
  try {
    const { name, title, linkedInUrl, githubUrl, xUrl } = portfolioData;

    // Construct local file URLs
    const cvUrl = files.cv ? `http://localhost:5000/uploads/${files.cv[0].filename}` : null;
    const imageUrl = files.image ? `http://localhost:5000/uploads/${files.image[0].filename}` : null;
    const musicUrl = files.music ? `http://localhost:5000/uploads/${files.music[0].filename}` : null;

    // Save portfolio data to the database
    const portfolio = await Portfolio.create({
      name,
      title,
      linkedInUrl,
      githubUrl,
      xUrl,
      cvUrl,
      imageUrl,
      musicUrl,
      userId,
    });

    return portfolio;
  } catch (error) {
    console.error('Error in createPortfolio:', error.message);
    throw new Error('Portfolio creation failed');
  }
};

// Fetch a portfolio by ID
const getPortfolioById = async (portfolioId) => {
  try {
    const portfolio = await Portfolio.findByPk(portfolioId);
    if (!portfolio) {
      throw new Error('Portfolio not found');
    }
    return portfolio;
  } catch (error) {
    console.error('Error in getPortfolioById:', error.message);
    throw new Error('Error fetching portfolio');
  }
};

module.exports = {
  createPortfolio,
  getPortfolioById
};
