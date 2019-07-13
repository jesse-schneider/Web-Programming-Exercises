const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
var app = express();

var http = require('http').Server(app);
require('./routes/loginroute.js')(app, path);
require('./routes/accountroute.js')(app, path);

app.use(express.static(__dirname+'/www'));
app.use(bodyparser.json());

let users = [
    {email: "g@griffith.com", pwd: "test"},
    {email: "g@griffith.com",pwd: "test1"},
    {email: "g@griffith.com",pwd: "test2"},
];


app.post('/login/attempt', (req, res) => {
    if(!req.body)
    {
        return resizeBy.sendStatus(400);
    }
    var user = {};
    user.email = req.body.email;
    user.password = req.body.password;
    if(searchUsers(req.body.email, req.body.pwd, users) != undefined) {
        user.valid = true;
        var status = { "ok": true };
    } else {
        user.valid = false;
        var status = { "ok": false, errors: {} };
    }
    
    res.send(status);
});

let server = http.listen(3000, () => {
let host = server.address().address;
let port = server.address().port;
console.log("My First Node Server!");
console.log("Server listening on "+ host + " port: " + port);
});


var searchUsers = (email, pwd, users) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].pwd == pwd) {
            return users[i];
        }
    }
}