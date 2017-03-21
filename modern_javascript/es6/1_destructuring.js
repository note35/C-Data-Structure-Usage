////////////////
// destructuring
////////////////


//支援物件1
var foo = { bar: 1, baz: 2 };
//舊寫法
var bar = foo.bar;
var baz = foo.baz;
//新寫法
var { bar, baz } = foo;

//支援物件2
var foo = 1;
//舊寫法
var obj = { bar: 2, foo: 1 };
//新寫法
var obj = { bar: 2, foo };

//支援物件3
var foo = "foo";
var bar = "bar";
//直接傳入一個物件，不用寫額外的物件宣告
some.method({ foo, bar });


//支援陣列
var foo = ["bar", "baz"];
//舊寫法
var bar = foo[0]
var baz = foo[1]
//新寫法
var [ bar, baz ] = foo;


//不常用的寫法
var foo = "foo";
//舊寫法
var bar = {};
bar["baz"+foo] = "bazfoo"
//新寫法
var bar = { ["baz"+foo]: "bazfoo" }


//好處這麼寫的好處是，假如今天foo的名稱很長，只需要寫一次不用重複寫
var { xxx, yyy, zzz } = aVeryLongLongLongLongLongName


//實用案例：多重promises併發
Promise.all([promise1, promise2]).then(function([result1, result2]){
    //直接解構callback array成兩個變數，可以直接使用result1，result2  
})


//實用案例：參數傳遞
function calcBmi(height, weight, max, callback) {
    var bmi = weight / Math.pow(height, 2);
    if (bmi > max) {
        ...
    }
    if (callback) {
        callback(bmi);
    }   
}
//假如我們要呼叫calcBmi，以往的做法四個參數得按照順序添加
calcBmi(height, weight, 25, function() {})
//不然就是把整個參數改寫成opts
opts = {
    height: height,
    weight: weight,
    max: 25,
    callback: function() {}
}
//現在不需要這麼寫，只需要改寫function成
function calcBmi({height, weight, max, callback}) { ... }
//甚至可以加上預設值
function calcBmi({height, weight, max: 25, callback}) { ... }
//或者是給alias
function calcBmi({height: h, weight: w, max: 25, callback}) { ... }
//這時候如果要呼叫calcBmi，就會變成不用考慮順序，寫不用每個參數都給
calcBmi({weight, height, callback: function() {}})
