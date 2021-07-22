var name = "jack";
var age = 18;
var a = {
  c: 1,
};
let name2 = "kk";
// var obj = { name, age }

// export default { name, age }
setTimeout(function () {
  name = "ben";
  // a = 2;
  // a.c = 2;
  a = { b: 2 };
  name2 = "jj";
}, 1000);

// 这里的 `{ name, hello }` 不是一个对象字面量，
// 它只是语法上的规则而已
export { name, age };
export { name2 };
export default a;
// export name // 错误的用法

// export 'foo' // 同样错误的用法
