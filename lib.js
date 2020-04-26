// const db = require("./db");
// const mail = require("./mail");

// Testing numbers
module.exports.absolute = function (number) {
  /* 
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0; 
  */

  //First Refactoring
  /* 
  if (number >= 0) return number;

  return -number; 
  */

  //Second Refactoring
  return number >= 0 ? number : -number;
};
