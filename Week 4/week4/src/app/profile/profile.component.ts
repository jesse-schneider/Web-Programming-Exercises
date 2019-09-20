import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = "";
  birthdate = "";
  email = "";
  loggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("Authenticated_user") == null)
    {
      return this.router.navigateByUrl("login");
    }
    console.log(sessionStorage.getItem("Authenticated_user"));
    let storage = JSON.parse(sessionStorage.getItem("Authenticated_user"));
    this.username = storage.username;
    this.birthdate = storage.birthdate;
    this.email = storage.email;

  }

  saveSessionData() {
    let newData = {
      username: this.username,
      birthdate: this.birthdate,
      email: this.email
    };
    let newDataStr = JSON.stringify(newData);

    sessionStorage.setItem("Authenticated_user", newDataStr);
  }

}
