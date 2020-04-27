const db = require('./db');
const mail = require('./mail');

// Testing numbers
module.exports.absolute = number => (number >= 0 ? number : -number);

// Testing strings
module.exports.greet = name => 'Welcome ' + name;

// Testing arrays
module.exports.getCurrencies = () => ['USD', 'INR', 'EUR'];

// Testing objects
module.exports.getProduct = productId => ({ id: productId, price: 10, name: 'soap' });

// Testing exceptions
module.exports.registerUser = username => {
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username };
};

// Mock functions - unit testing a function that talks to external dependency
module.exports.applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) order.totalPrice *= 0.9;
};

// Mock functions
module.exports.notifyCustomer = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  mail.send(customer.email, 'Your order was placed successfully.');
};
