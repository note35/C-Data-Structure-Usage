//////////
// scoping
//////////

var a = 1;

//以前的block scoping只適用於function
function() { b = 2; }
console.log(b); //undefined


//舊寫法：如果用if或者for，那結果是不同的
if(True){ var b = 2; }
console.log(b); //2

//實際上，上面這段code的解析如下
var b;
if(True){ b = 2; }
console.log(b); //2

//新寫法：let，鎖定變數的scope範圍
//原則：沒有任何一個block內的變數應該要能被外面使用
if(True){ let b = 2; }
console.log(b); //undefined

//新寫法：const，同C，不該變動的變數都應該是const
const a = 1; //意味著a不應該被改動
a = 2; //這不是合法的做法

//新寫法：const，同C，本身不可變動，但物件下的內容可變動
const a = { b: 1 };
a.b = 2; //這是合法的做法

//新寫法：const，const也具備let的特性
if(True){ const b = 2; }
console.log(b); //undefined
