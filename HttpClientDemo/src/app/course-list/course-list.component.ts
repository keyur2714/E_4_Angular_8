import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers : [CourseService]
})
export class CourseListComponent implements OnInit {

  courseList : Course[] = [];

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() : void {
    this.courseService.getCourseList().subscribe(
      (data : Course[])=>{
        this.courseList = data;
      }
    )
  }

}
