//////
// oop
//////

//舊寫法
function Parent(){ ... }
Parent.prototype.foo = function() {}
Parent.prototype.bar = function() {}

//新寫法
class Parent{
    baz = "baz"; // class variable
    constructor() { ... }
    foo() { ... }
    static bar() { ... } // static method
}
var parent = new Parent();
parent.foo();
Parent.bar();

//新寫法：繼承
class Child extends Parent{
    constructor() { super() }
    baz() { ... }
}
var child = new Child();
child.baz();
