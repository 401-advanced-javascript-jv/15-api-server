'use strict';

/**
 * Mongoose schema for Players Model
 * @module src/models/players/players-schema
 * @requires mongoose
 * @requires mongoose-schema-jsonschema
 */
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: {type: String,required:true},
});

module.exports = mongoose.model('categories', categories);
