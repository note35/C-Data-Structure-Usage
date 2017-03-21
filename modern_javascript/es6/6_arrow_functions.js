//////////////////
// arrow_functions
//////////////////

//舊寫法
var foo = function(a, b){
    return a + b;
}
//新寫法
var foo = (a, b) => {
    return a + b;
}


//舊寫法
some.method(function(a, b){
    return a + b;
});

//新寫法
some.method((a, b) => { return a + b; })
//清潔寫法：只有一行return的函式可以拔掉{;}跟return
some.method((a, b) => a + b)
//清潔寫法：如果參數只有一個，不用括號
some.method(a => a + 1)

//範例
[0, 1, 2].map(val => val++) //[1, 2, 3]


//舊寫法
//baz是非同步的函式，closure是正確的
var foo = {
    bar: "xxx";
    baz: function(){
        console.log(this.bar);
    }
}
foo.baz(); //"xxx"

//baz是同步的函示，需要用bind才能使用this.bar
var foo = {
    bar: "xxx";
    baz: function(){
        setTimeout(function() {
            console.log(this.bar);
        }.bind(this), 100);
    }
}

//新寫法：使用=>會自動bind closure
var foo = {
    bar: "xxx";
    baz: function(){
        setTimeout(() => {
            console.log(this.bar);
        }, 100);
    }
}


//使用jQuery的this要特別注意，因為jQuery的this可能會因為用=>而誤用
$("foo").with().jQuery(function() {
    $(this)
})
$("foo").with().jQuery(() => {
    $(this)
})
