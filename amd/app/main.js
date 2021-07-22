define(function (require) {
  console.log("main执行了");
  // Load any app-specific modules
  // with a relative require call,
  // like:
  if (false) {
    var messages = require("./messages");
  }
  // console.log("message", message);

  // Load library/vendor modules using
  // full IDs, like:
  var print = require("print");

  // print(messages.getHello());
  print("Hello World");
});

// define(["print", "./messages"], function (print, messages) {
//   // Load any app-specific modules
//   // with a relative require call,
//   // like:
//   var messages = require("./messages");

//   // Load library/vendor modules using
//   // full IDs, like:
//   var print = require("print");

//   print(messages.getHello());
// });
