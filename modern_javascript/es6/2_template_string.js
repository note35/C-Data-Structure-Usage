//////////////////
// template string
//////////////////


var name = "kir";
var hobby = "coding";

//最基本的會這樣寫
var greet = "Hi, my name is " + name + ", my hobby is " + hobby + ".";

//或者因為要換行＋對齊
var greet = "Hi, my name is " + name + ".\n" +
            "My hobby is " + hobby + ".";

//改用高級寫法
var greet = `Hi, my name is ${name}, my hobby is ${hobby}.`;
var greet = `Hi, my name is ${name}.
My hobby is ${hobby}.`
