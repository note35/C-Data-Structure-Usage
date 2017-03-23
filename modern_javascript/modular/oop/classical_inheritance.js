// 基本建立物件與函式的方法
var Person = function(name) {
    this.name = name;
};

Person.prototype.sayName = function() {
    console.log("my name is " + this.name);
}

Person.prototype.shoutName = function() {
    console.log("my name is " + this.name + " !!!!!!!!");
}

var john = new Person("john");
john.sayName();
var will = new Person("will");
will.shoutName();

/* ------------ */

// 繼承函式
function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}

// 子物件與函式的寫法（繼承父物件）
var Musician = function(name, instrument) {
    Musician.super_.call(this, name);
    this.instrument = instrument;
}
inherits(Musician, Person);

Musician.prototype.playInstrument = function() {
    console.log("I can play " + this.instrument);
}

var kelly = new Musician("kelly", "piano");
kelly.sayName();
kelly.playInstrument();

/* ------------ */

// 覆蓋掉父物件的函式
Musician.prototype.sayName = function() {
    console.log(("my name is " + this.name).split("").reverse().join(""));
}

kelly.sayName();

// 移除掉子物件覆蓋的函式
delete Musician.prototype.sayName

kelly.sayName();
