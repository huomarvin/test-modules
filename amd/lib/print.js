define(function () {
  console.log("print执行了");
  return function print(msg) {
    console.log(msg);
  };
});
