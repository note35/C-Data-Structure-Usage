// 在ES6，精益求精，又有了更新的寫法，其實概念是源自各種語言都有的generator/coroutine

// coroutine基本上是個generator，針對ajax會依序yield相應的處理

var myGen = function*() {
    var one = yield 1;
    var two = yield 2;
    console.log(one, two);
};

//以本例子來說，myGen的操作方法如下

var gen = myGen(); //初始化generator
ret1 = gen.next(); //{value:1, done: false}
ret2 = gen.next(ret1) //{value:2, done: false}
ret3 = gen.next(ret2) //{value:undefined, done: true}
//印出 1, 2
gen.next(); //errors, 沒有下一個yield了


// bluebird (Browser)
// co (NodeJS)
// q (Angular)
// 他們的promise的實作基本上如下

function smartCode(myGen) {
    var gen = myGen();
    var yieldedVal = gen.next(); //事實上，yeild是個promise
    if(yieldedVal.then) {
        yieldedVal.then(gen.next);
    }
}



// 接著看看實際例子，使用在前面的例子，將會是這個寫法

Promise.coroutine(function* () {

    var condition1 = yield $.get(url);
    ...

    var condition2 = yield $.get(url2);
    ...

})().catch(function(errs) {
    ...
})

// 並行處理的機制也仍然存在

Promise.coroutine(function* () {
    var data = yield {
        condition1: $.get(url),
        condition2: yield $.get(url2)
    };
    ...
})();

// 或者用更ES6 style的寫法，但這寫法好不好看見仁見智

Promise.coroutine(function* () {
    var [tweets, profile] = yield [$.get('tweets.json'), yield $.get('profile.json')];
    ...
})();
