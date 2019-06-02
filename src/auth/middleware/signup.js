'use strict';

const User = require('../models/users-model.js');

module.exports = (req, res, next) => {
  let user = new User(req.body);
  user
    .save()
    .then((user) => {
      return user.populate('capabilities').execPopulate();
    })
    .then((user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
};
