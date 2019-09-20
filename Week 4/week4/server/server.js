var express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');

var http = require('http').Server(app);
var app = express();
app.use(cors());
app.use(bodyparser.json());

require('./routes/auth.js')(app);
class User {
  constructor(username, birthdate, age, email, password) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

app.listen(3000, () => {
console.log("node server is listening on port 3000");
});