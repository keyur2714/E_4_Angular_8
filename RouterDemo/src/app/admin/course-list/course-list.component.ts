import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList : Course[] = [
    new Course(1,'ANG','Angular',13800),
    new Course(2,'CJAVA','Core Java',8800),
    new Course(3,'BIDATA','Hadoop',15800)
  ];

  constructor() { }

  ngOnInit() {
  }

}
