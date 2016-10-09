define([
    "doh/runner"
], function(doh) {

    // Simple style: sync
	doh.register("test001_simple_sync", function(doh) {
        doh.assertTrue(true),
        doh.assertFalse(false)
    });

    // Simple style: async
	doh.register("test002_simple_async", function(doh) {
        var deferred = new doh.Deferred();

        setTimeout(deferred.getTestCallback(function() {
            doh.assertFalse(false)
        }), 100);

        return deferred;
    });

    // Group style
    doh.register("test003_group", [
    {
        name: "test003_group: 001",
        pass: 1,
        runTest: function(){
            doh.f(false)
        }
    },{
        name: "test003_group: 002",
        pass: 1,
        runTest: function(){
            doh.t(true)
        }
    },{
        name: "test003_group: 003 - with setUp and tearDown",
        pass: 10,
        setUp: function(){
            this.a = "Hello ",
            this.b = "World!";
        },
        runTest: function(){
            doh.is("Hello World!", this.a+this.b);
            doh.isNot(this.a, this.b);
        },
        timeout: 500
    }]);

    // Wrapped style
    var wrapped = [];
    function setUp() {}
    function tearDown() {}
    tests = {
        "test004_wrapped: 001": function() { },
        "test004_wrapped: 002": function() { }
    }

    for(var name in tests){
        wrapped.push({
            name: name,
            setUp: setUp,
            tearDown: tearDown,
            runTest: tests[name]
        })
    }
	doh.register("test004_wrapped", wrapped);
});
