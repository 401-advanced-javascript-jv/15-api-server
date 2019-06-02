'use strict';

const router = require('express').Router();
const auth = require('../auth/middleware.js');

router.get('/public-stuff', (request, response, _) => {
  response.status(200).send('public stuff is visible to all!');
});

router.post('/create-a-thing', auth('create'), (request, response, _) => {
  response.status(200).send('This user has the "create" capability');
});

router.put('/update', auth('update'), (request, response, _) => {
  response.status(200).send('This user has the "update" capability');
});

router.patch('/jp', auth('update'), (request, response, _) => {
  response.status(200).send('This user has the "update" capability to patch');
});

router.delete('/delete', auth('delete'), (request, response, _) => {
  response.status(200).send('This user has the "delete" capability');
});

module.exports = router;
