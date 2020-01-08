const moment = require('moment');

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;

//execute any code 
// eddit req/res
// call next function
// stack of functions that execute when req made 
