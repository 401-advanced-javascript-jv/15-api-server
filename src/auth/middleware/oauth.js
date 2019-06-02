'use strict';

module.exports = (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
};
