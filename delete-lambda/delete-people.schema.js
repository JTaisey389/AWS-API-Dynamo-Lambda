'use strict';

const dynamoose = require('dynamoose');

const constructorSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'contact': String,
})

module.exports = dynamoose.model('people-storage', constructorSchema);