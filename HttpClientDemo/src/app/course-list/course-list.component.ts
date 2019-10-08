import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  //providers : [CourseService]
})
export class CourseListComponent implements OnInit {

  courseList : Course[] = [];
  deleteId : number = 0;

  constructor(private courseService : CourseService,private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.deleteId = param.id;
        if(isNaN(this.deleteId) === false && this.deleteId !== 0){
          this.deleteCourse(this.deleteId);
        }        
      }
    )
    this.getCourseList();
  }

  getCourseList() : void {
    this.courseService.getCourseList().subscribe(
      (data : Course[])=>{
        this.courseList = data;
      }
    )
  }

  deleteCourse(deleteId : number) : void{
    let confirmMsg = confirm("Are you sure want to delete course with id : "+deleteId+" ?");
    if(confirmMsg){
     this.courseService.deleteCourse(deleteId).subscribe(
       (data)=>{
         alert("Course with id "+deleteId+" Dleted Successfully.");         
       }
     )      
    }
    this.router.navigate(['/course']);
  }

}
