import { Component, OnInit } from '@angular/core';
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

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
