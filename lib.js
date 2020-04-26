// const db = require("./db");
// const mail = require("./mail");

// Testing numbers
module.exports.absolute = number => (number >= 0 ? number : -number);

// Testing strings
module.exports.greet = name => 'Welcome ' + name;

// Testing arrays
module.exports.getCurrencies = () => ['USD', 'INR', 'EUR'];

// Testing objects
module.exports.getProduct = productId => ({ id: productId, price: 10, name: 'soap' });
