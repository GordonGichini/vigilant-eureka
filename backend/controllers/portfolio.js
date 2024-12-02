const portfolio = require('../services/portfolioService');


const createPortfolio = async (req, res) => {
  try {
    const userId = req.user.id; // From JWT middleware
    const portfolio = await portfolio.createPortfolio(userId, req.body, req.files);

    res.status(201).json({ message: 'Portfolio created successfully', portfolio });
  } catch (error) {
    res.status(500).json({ message: 'Error creating portfolio', error: error.message });
  }
};

const getPortfolioById = async (req, res) => {
    try {
      const { id } = req.params;
      const portfolio = await portfolioService.getPortfolioById(id);
      return res.status(200).json(portfolio);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      return res.status(404).json({ error: error.message });
    }
  };

module.exports = { createPortfolio, getPortfolioById };
