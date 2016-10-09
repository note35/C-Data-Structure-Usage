var express = require('express');
var app = express();

//var bodyParser = require('body-parser')
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }));

var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

//app.post('/', xmlparser({trim: false, explicitArray: false}), function(req, res, next){
app.post('/', function(req, res) {
    console.log(req.body);
    return res.end();
});

app.listen(3000)
