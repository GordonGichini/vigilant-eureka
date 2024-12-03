const portfolioService = require('../services/portfolioService');


const createPortfolio = async (req, res) => {
    try {
      const userId = req.user.id; // Extract user ID from the token (handled by middleware)
      const portfolioData = req.body;
      const files = req.files;
  
      const portfolio = await portfolioService.createPortfolio(userId, portfolioData, files);
  
      res.status(201).json({
        message: 'Portfolio created successfully',
        portfolio,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error creating portfolio', error: error.message });
    }
  };

  const getPortfolioById = async (req, res) => {
    try {
      const portfolioId = req.params.id;
      const portfolio = await portfolioService.getPortfolioById(portfolioId);
  
      if (!portfolio) {
        return res.status(404).json({ message: 'Portfolio not found' });
      }
  
      res.status(200).json({ portfolio });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching portfolio', error: error.message });
    }
  };

module.exports = { createPortfolio, getPortfolioById };
