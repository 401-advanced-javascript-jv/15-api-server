'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/500.js');
const notFound = require( './middleware/404.js' );
const authRouter = require( './auth/authRouter.js' );
const apiRoutes = require('./api/v1.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/auth', authRouter);
app.use('/api/v1', apiRoutes);

// Role population available only when in dev mode
if (process.env.DEVMODE) {
  app.use(require('./auth/populate-roles.route.js'));
}

// Catchalls
app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
