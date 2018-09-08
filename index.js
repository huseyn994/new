var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res){
    res.json({"foo": "bar"});
})

app.listen(1000);
