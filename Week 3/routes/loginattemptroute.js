module.exports = function (app) {
    
    app.post('/login/attempt', (req, res) => {

        var searchUsers = (email, pwd, users) => {
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].pwd == pwd) {
                    return users[i];
                }
            }
        }

        let users = [
            {email: "a@abc.com", pwd: "test"},
            {email: "b@abc.com",pwd: "test1"},
            {email: "c@abc.com",pwd: "test2"},
        ];
        
        if(!req.body)
        {
            return res.sendStatus(400);
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
};