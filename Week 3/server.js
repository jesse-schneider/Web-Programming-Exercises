const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
var app = express();

app.use(express.static(__dirname+'/www'));
app.use(bodyparser.json());

var http = require('http').Server(app);
require('./routes/loginroute.js')(app, path);
require('./routes/accountroute.js')(app, path);
require('./routes/loginattemptroute.js')(app);

let server = http.listen(3000, () => {
let host = server.address().address;
let port = server.address().port;
console.log("My First Node Server!");
console.log("Server listening on "+ host + " port: " + port);
});