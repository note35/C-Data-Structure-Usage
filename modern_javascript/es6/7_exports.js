//////////
// exports
//////////

// module宣告
//舊寫法：
module.exports.foo = function() { ... }
module.exports.bar = function() { ... }

//新寫法：
export default function() { ... }
export function foo() { ... }
export var bar = ...;
//或者整個寫在一起
export default { ... }


// module使用
//舊寫法：
var someModule = require("someModule");
foo = someModule.foo
bar = someModule.bar

//新寫法：import
import someModule from "someModule";
//新寫法：import + destructuring
import { foo, bar } from "someModule";
//新寫法：import + destructuring + alias
import { foo as foolish, bar } from "someModule"
