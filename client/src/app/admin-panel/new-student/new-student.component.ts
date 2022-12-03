import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  firstName: String = '';
  lastName: String = '';
  currentSemester: Number = 0;
  batch: Number = 2020;
  degree: String = '';
  message: String = '';
  messageStatus: Boolean = false;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    if((localStorage.getItem('isAuthenticated')) == 'false') {
      this.route.navigate(['login']);
    }
  }

  async addNewStudent() {
    await this.http.post<{message: String}>('http://localhost:8000/addStudent', {
      firstName: this.firstName,
      lastName: this.lastName,
      currentSemester: this.currentSemester,
      batch: this.batch,
      degree: this.degree,
    }).subscribe(response => {
      this.message = response.message;
      this.messageStatus = true;

      this.firstName = '';
      this.lastName = '';
      this.currentSemester = 0;
      this.batch = 2020;
      this.degree = '';
      setTimeout(() => {
        this.message = '';
        this.messageStatus = false;
      }, 2000);
    })
  }

}
