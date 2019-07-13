import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  users = [
    {email: "test@test.com", password:"test"},
    { email: "test1@test.com", password: "test1" },
    { email: "test2@test.com", password: "test2" },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginAttempt() {
    if(this.searchUsers(this.email, this.password, this.users) != undefined) {
      this.router.navigate(['account']);
    } else {
      alert("Credentials incorrect!");
    }
  }

searchUsers(email, password, users) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password == password) {
      return users[i];
    }
  }
}

}
