import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  isAuthenticated: boolean = false;
  authenticationStatus: String = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  verifyFromDatabase() {
    this.http.post<{userAuthenticated: boolean}>("http://localhost:8000/authenticate", {
      email: this.email,
      password: this.password
    }).subscribe(data => {
      if(data.userAuthenticated) {
        this.authenticationStatus = '';
        this.router.navigate(['/adminPanel'])
      }
      else {
        this.authenticationStatus = 'Invalid Login, Please try again!';
      }
    });
  }
}