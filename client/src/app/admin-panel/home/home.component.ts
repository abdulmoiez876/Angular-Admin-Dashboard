import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/shared/student.model.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: Student[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<[Student]>('http://localhost:8000/getStudentsData').subscribe(studentsData => {
      this.students = studentsData;
    })
  }
}
