var a = 100;
global.a = 200;

console.log(a) // 100
console.log(global.a) // 200

console.log(__filename) // '/Users/luwei/Documents/学习/node_learning/nodeJs基础（秒味课堂）/module/1.js'