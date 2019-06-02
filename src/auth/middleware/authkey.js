'use strict';

module.exports = (req, res, next) => {
  let key = req.user.generateKey();
  res.status(200).send(key);
};
