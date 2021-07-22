define(function (require, exports, module) {
  console.log("print执行了");
  module.exports = function (msg) {
    console.log(msg);
  };
});
