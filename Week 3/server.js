const express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname+'/www'));


let server = http.listen(3000, () => {
let host = server.address().address;
let port = server.address().port;
console.log("My First Node Server!");
console.log("Server listening on "+ host + " port: " + port);
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/www/test.html');
});