import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginBtn() {
    this.router.navigate(['login']);
  }

  accountBtn() {
    this.router.navigate(['account']);
  }

  profileBtn() {
    this.router.navigate(['profile']);
  }

  homeBtn() {
    this.router.navigate(['/']);
  }

  logoutBtn() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
