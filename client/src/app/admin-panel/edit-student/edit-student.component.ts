import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../shared/student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  firstName: String = '';
  lastName: String = '';
  currentSemester: Number = 0;
  batch: Number = 0;
  degree: String = '';

  message: String = '';
  messageStatus: Boolean = false;

  id!: Number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  async ngOnInit(): Promise<void> {
    if((localStorage.getItem('isAuthenticated')) == 'false') {
      this.router.navigate(['login']);
    }
    this.id = Number(this.route.snapshot.queryParamMap.get('editId'));

    await this.http.get<Student>(`http://localhost:8000/getStudentById/${this.id}`).subscribe(studentData => {
      this.firstName = studentData.firstName;
      this.lastName = studentData.lastName;
      this.currentSemester = studentData.currentSemester;
      this.batch = studentData.batch;
      this.degree = studentData.degree;
    })
  }

  async editStudentDetails() {
    await this.http.post<{message: String}>('http://localhost:8000/editStudentById', {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      currentSemester: this.currentSemester,
      batch: this.batch,
      degree: this.degree
    }).subscribe(response => {
      this.message = response.message;
      this.messageStatus = true;

      setTimeout(() => {
        this.message = '';
      }, 2000)
    })
  }

}
