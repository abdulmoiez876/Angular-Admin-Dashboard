import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verifyFromDatabase() {
    this.http.post("http://localhost:8000/authenticate", {
      email: this.email,
      password: this.password
    }).subscribe(responseData => {
      if(responseData.hasOwnProperty('isAuthenticated')) {
      }
    })
  }

  redirectToDashboard() {

  }

}
