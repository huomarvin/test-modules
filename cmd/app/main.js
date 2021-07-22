define(function (require) {
  console.log("main执行了");
  var print = require("print");
  if (false) {
    var messages = require("messages");
    print(messages.getHello());
  }
  //   print("Hello world");
});
