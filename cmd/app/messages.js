define(function (require, exports, module) {
  console.log("message执行了");
  module.exports = {
    getHello: function () {
      return "Hello World";
    },
  };
});
