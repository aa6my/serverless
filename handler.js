'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Hello ?',
      input: event,
    }),
  };

  callback(null, response);
};



module.exports.world = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'This is my world!',
      input: event,
    }),
  };

  callback(null, response);
};
