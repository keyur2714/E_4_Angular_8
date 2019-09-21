import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course.model';
import { Student } from './student.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  student : Student = new Student();

  constructor() { }

  courseList : Course[] = [];

  ngOnInit() {
    let course1 = new Course();
    course1.id = 1;
    course1.courseName = "Angular";
    course1.fees = 13800;
    course1.trainerName = "Keyur";

    let course2 = new Course();
    course2.id = 2;
    course2.courseName = "BigData";
    course2.fees = 15800;
    course2.trainerName = "Vaibhav";

    let course3 = new Course();
    course3.id = 3;
    course3.courseName = "Python";
    course3.fees = 10800;
    course3.trainerName = "Jatin";

    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);

  }

  save(frm : NgForm) : void{
    console.log(frm);
    console.log(frm.value);
    if(frm.valid){
      this.student = frm.value;
    }    
  }

}
