import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseId : number = 0;

  name : string = '';

  constructor(private activateRoute : ActivatedRoute,private location : Location) { }

  ngOnInit() {
    // this.activateRoute.params.subscribe(
    //   (param)=>{
    //     this.courseId = param.id;
    //   }
    // )
    this.activateRoute.paramMap.subscribe(
      (paramMap)=>{
        this.courseId = parseInt(paramMap.get('id'));
      }
    )

    this.activateRoute.queryParams.subscribe(
      (queryParam)=>{
        this.name = queryParam.name;
      }
    )
  }

  back() :void{
    this.location.back();
  }
}
