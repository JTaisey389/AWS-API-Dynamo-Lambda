'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const FrameworkModel = require('./delete-people.schema');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;

    await FrameworkModel.delete({'id': id})
    
    return {
      statusCode: 201,
      body: JSON.stringify('Deleted from the DB')
    }
  }  catch (error){
    return {
      statusCode: 500,
      body: error.message,
    }
  }
}
