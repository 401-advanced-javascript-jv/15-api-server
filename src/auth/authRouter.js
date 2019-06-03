'use strict';

const express = require('express');
const authRouter = express.Router();

const auth = require('./auth.js');
const oauth = require('./middleware/oauth.js');

const authkey = require ('./middleware/authkey.js');
const signup = require('./middleware/signup.js');
const signin = require('./middleware/signin.js');

authRouter.post('/signup', signup);
authRouter.post('/signin', auth(), signin);
authRouter.post('/key', auth(), authkey);
authRouter.get('/oauth', oauth);

module.exports = authRouter;
