// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev94102.service-now.com',
  username: 'admin',
  password: 'Ctli@2020',
  serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject(callOptions,callback) {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(callOptions);
   
  connector.get(callback);
  connector.post(callback);

}
 
mainOnObject (options, function ( response,err ){
    if (err) {
      console.error(`\nError returned from request:\n${JSON.stringify(err)}`);
    }
    console.log(`\nResponse returned from request:\n${JSON.stringify(response)}`)
   
})  