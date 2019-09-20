class User {
    constructor(username, birthdate, age, email, password) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}

var Jeff = new User("Jeff", "13-Oct", 23,"jeff@test.com", "test");
var Sam = new User("Sam", "12-Jan", 22, "sam@test.com", "tester");
var Dan = new User("Dan", "26-Jun", 20, "dan@test.com", "test2");

var userList = [];
userList.push(Jeff);
userList.push(Sam);
userList.push(Dan);

module.exports = function (app) {
  app.post('/api/auth', (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    var email = req.body.email;
    var password = req.body.password;
    
    userList.filter(function (user) {
      if (user.email == email && user.password == password) {
          var userRes = {
            username: user.username,
            birthdate: user.birthdate,
            age: user.age,
            email: user.email,
            valid: true
          }
          res.send(userRes);
      }
    });
  });
};