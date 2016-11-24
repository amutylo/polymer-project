var express = require("../node_modules/express");
var app     = express();
var path    = require("path");

app.get('/', function (req, res) {
    var file = path.join(__dirname+'/../app/index.html');
    res.sendFile(file);
});

app.use(express.static(path.join(__dirname+'../')));

var http = require('http').Server(app);

http.listen(8888);
