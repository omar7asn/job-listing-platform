// Utility for logging errors and information
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
  
  module.exports = logger;
  