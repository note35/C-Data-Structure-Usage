// http://stackoverflow.com/questions/39825523/restful-equivalent-of-curl-command/39826392
// curl -X POST -d @test.XML https://example.com/example

var xmlbody;

function processFile() {

    var postReq = {
        host: '127.0.0.1',
        port: 3000,
        path: "/",
        method: 'POST',
        headers: {
            'Cookie': "cookie",
            'Content-Type': 'text/xml',
            'Content-Length': Buffer.byteLength(xmlbody)
        }
    };

    var req = require("http").request(postReq, function(resp) {
        var str;
        if(resp.statusCode) {
            resp.on('data', function (chunk) {
                str +=  chunk;                  
            });
            resp.on('end', function (chunk) {                           
                console.log(chunk);
            });                   
        }
    });

    req.write(xmlbody);
    req.end(); 
}

require("fs").readFile('test.xml', function read(err, data) {
    xmlbody = data;
    processFile();
});
