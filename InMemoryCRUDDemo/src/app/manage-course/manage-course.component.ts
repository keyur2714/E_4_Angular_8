import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {

  newCourse : Course = new Course();
  courseList : Course[] = [];
  message : string = '';
  isUpdate : boolean = false;  

  constructor() { }

  ngOnInit() {
    let course1 = new Course(10,'Angular',13000,'keyur');
    let course2 = new Course(20,'Java',12000,'denish');
    let course3 = new Course(30,'Business',15000,'vinit');
    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);
  }

  add() : void {
    this.courseList.push(this.newCourse);
    this.message = 'Course Added Successfully.';
  }

  edit(id : number) : void{        
    this.newCourse  = this.courseList.find(course => course.id === id);    
    this.isUpdate = true;
  }

  update() : void {
    let updateIdx  = this.courseList.indexOf(this.newCourse);
    this.courseList[updateIdx] = this.newCourse;
    this.message = 'Course Updated Successfully.';
    this.isUpdate = false;
    this.newCourse = new Course();
  }

  delete(id : number) : void{
    let confirmMsg = confirm("Are you sure want to delete ?");
    if(confirmMsg) {
      let course  = this.courseList.find(course => course.id === id);    
      let deleteIdx  = this.courseList.indexOf(course);
      this.courseList.splice(deleteIdx , 1);
      this.message = 'Course Deleted Successfully.';
    }
  }
}
