var express = require('express');
var app     = express();
var path    = require('path');

app.use('/', express.static(__dirname + "/"));
app.use('/html', express.static(__dirname + "/html"));
app.use('/assets', express.static(__dirname + "/assets"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(4000, function () {
    console.log("Listening on port 4000");
});