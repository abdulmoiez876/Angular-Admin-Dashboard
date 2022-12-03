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
  message: String = '';
  messageStatus: Boolean = false;

  constructor(private http: HttpClient) { }

  async getLatestStudentRecords() {
    await this.http.get<[Student]>('http://localhost:8000/getStudentsData').subscribe(studentsData => {
      console.log('getting Students');
      
      this.students = studentsData;
    })
  }

  async ngOnInit(): Promise<void> {
    await this.getLatestStudentRecords();
  }

  async deleteStudent(deleteId: Number) {
    await (this.http.delete<{message: String}>(`http://localhost:8000/deleteStudent/${deleteId}`).subscribe(async response => {
      await this.getLatestStudentRecords();
      this.message = response.message;
      this.messageStatus = false;

      setTimeout(() => {
        this.message = ''
      }, 2000)
    }));
  }
}
