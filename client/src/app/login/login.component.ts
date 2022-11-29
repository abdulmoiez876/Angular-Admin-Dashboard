import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verifyFromDatabase() {
    if(this.email.replace(/\s/g,'').length === 0 || this.password.replace(/\s/g,'').length === 0) {
      alert('Enter valid email and password');
    }
    else {
       
    }
  }

  redirectToDashboard() {

  }

}
