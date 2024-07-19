const logger = async (req, _, next) => {
  console.info(`${req.method}, ${req.url}`);
  next();
};

module.exports = logger;
