'use strict';

const google = require('../oauth-providers/google.js');

module.exports = (req, res, next) => {
  google
    .authorize(req)
    .then((token) => {
      res.status(200).send(token);
    })
    .catch(next);
};
