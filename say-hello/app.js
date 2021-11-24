const middy = require('@middy/core');

// /customers/{customerId}
const sayHello = async (event, context) => {    
    return JSON.stringify({
        statusCode: 200,
        body: {
            message: 'Hello world'
        }
    });
};

 exports.lambdaHandler = middy(sayHello);
