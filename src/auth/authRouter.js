'use strict';

const express = require('express');
const authRouter = express.Router();

const auth = require('./auth.js');
const oauth = require('./oauth/google.js');

const authkey = require ('./middleware/authkey.js');
const signup = require('./middleware/signup.js');
const signin = require('./middleware/signin.js');

authRouter.get('/oauth', oauth);
authRouter.post('/signup', signup);
authRouter.post('/signin', auth(), signin);
authRouter.post('/key', auth(), authkey);

module.exports = authRouter;
