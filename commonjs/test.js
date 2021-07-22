// module.exports = _module.exports;
// 通过测试 require.main === module 来确定文件是被直接运行。
console.log(require.main === module);
// 通过查看 require.main.filename 就可以得到当前应用的入口点。
console.log(require.main.filename);

// 模块在第一次加载后被缓存。 这意味着（类似其他缓存）每次调用 require('foo') 都会返回完全相同的对象（如果解析为相同的文件）。
// const cache = require("./cache");
// console.log("cache1", cache);
// cache.name = "othercache";
// cache.age = 28;
// cache.arr.push(1);
// console.log("cache2", cache);
// const cache3 = require("./cache");
// console.log("cache3", cache3);
// 如果找不到确切的文件名，Node.js 将尝试加载所需的文件名，并添加扩展名：.js、.json，最后是 .node。

// .js 文件被解释为 JavaScript 文本文件，而 .json 文件被解析为 JSON 文本文件。 .node 文件被解释为加载了 process.dlopen() 的编译插件模块。

// 如果目录中不存在 package.json 文件，或者 "main" 条目丢失或无法解析，则 Node.js 将尝试从该目录中加载 index.js 或 index.node 文件。 例如，如果前面的示例中没有 package.json 文件，则 require('./some-library') 将尝试加载：
/**
 * 通过这样做，Node.js 实现了以下几点：

它将顶层变量（用 var、const 或 let 定义）保持在模块而不是全局对象的范围内。
它有助于提供一些实际特定于模块的全局变量，例如：
module 和 exports 对象，实现者可以用来从模块中导出值。
便利变量 __filename 和 __dirname，包含模块的绝对文件名和目录路径。
 */

// __dirname 当前模块的目录名
// __filename 当前模块的文件名

function _require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // 模块代码在这里。 在本例中，定义一个函数。
    function someFunc() {}
    // exports = someFunc;
    // 此时，exports 不再是 module.exports 的快捷方式，这个模块仍然会导出一个空的默认对象。
    // exports.a = 1;
    exports = {};
    module.exports = someFunc;
    // 此时，模块现在将导出 someFunc，而不是默认对象。
  })(module, module.exports);
  return module.exports;
}

const m = _require();
console.log(m);

// cjs分两种导出情况 如果是exports.xxx 导出的就是当时的内容的浅拷贝
// 如果是module.exports 则是当时对象的浅拷贝
// 如果两种方式均有，则exports.xxx 导出的内容无效

console.log(module.paths);
