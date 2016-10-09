define([
    "doh/runner",
    "dojo/node!sinon",
    "dojo/node!child_process"
], function(doh, sinon, child_process) {

    // for sandbox only
    sinon.config = {
        useFakeTimers: false
    };

    tests = {

        "001: spies(): function called times check": function() {
            var spy = sinon.spy(myObj, "print");

            myObj.print(expected_string);

            sinon.assert.calledOnce(spy);

            spy.restore();
        },

        "011: sandbox() spies() function called times check": sinon.test(function() {
            // sinon.spy is changed into this.spy
            var spy = this.spy(myObj, 'print');

            myObj.print(expected_string);

            sinon.assert.calledOnce(spy);

            // Do not need to restore
            // spy.restore();
        }),

        "002: spies(): function called with check": function() {
            var spy = sinon.spy(myObj, "print");

            myObj.print(expected_string);

            sinon.assert.calledWith(spy, expected_string);

            spy.restore();
        },

        "003: stubs() function with specific argument": function(){
            var stub = sinon.stub(myObj, "print");

            myObj.print(expected_string);

            sinon.assert.calledWith(stub, expected_string);

            stub.restore();
        },

        "004: stubs() function threw expected excpetion": function(){
            var expectedError = new Error("Oops");
            var stub = sinon.stub(myObj, "print");
            var spy = sinon.spy();

            stub.throws(expectedError);

            // Note: DOH framework does not have ability to catch exception automatically
            try {
                myObj.print(expected_string);
            } catch(err) { 
                spy(err); 
            }

            sinon.assert.calledWith(spy, expectedError);

            stub.restore();
        },

        "005: stubs() async function with expected result": function(){
            var expectedResult = "OK!";
            var stub = sinon.stub(myAsync, "delay");
            var spy = sinon.spy();

            stub.yields(null, expectedResult);
            myAsync.delay(spy);

            sinon.assert.calledWith(spy, null, expectedResult);

            stub.restore();
        },

        "006: mocks() function call times with specific arguments": function() {
            var mock = sinon.mock(myObj);

            mock.expects('print').once().withArgs(expected_string);
            myObj.print(expected_string);

            mock.verify();
            mock.restore();
        },

        "007: assert() checking call order of functions": function(){
            var a = sinon.spy();
            var b = sinon.spy();

            a();
            b();

            sinon.assert.callOrder(a, b);
        },

        "008 () check initial status of object": function(){
            var stub = sinon.stub(myObj, "print", function(){
                doh.f(myObj.tmp);
            });

            myObj.print(expected_string);

            sinon.assert.calledOnce(stub);

            stub.restore();
        }

    }

    function setUp(){
        // Define global object
        expected_string = "some string";

        myObj = {
            tmp: false,
            print: function(s){
                //console.log("myObj.print: " + s);
            }
        };

        myAsync = {
            delay: function(callback){
                spawn = child_process.spawnSync;
                ok = spawn( "./tests/async.sh" );
                callback(ok.stdout.toString());
            }
        };
    }

    var wrapped = [];
    for(var name in tests){
        wrapped.push({
            name: name,
            setUp: setUp,
            runTest: tests[name]
        })
    }

	doh.register("SinonTest", wrapped);
});
