import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../course-list/course.model';
import { CourseService } from '../course-list/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {

  courseForm : FormGroup;
  message : string = '';
  editId : number = 0;
  isLoading : boolean = true;

  constructor(private formBuilder : FormBuilder,private courseService : CourseService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap) =>{
        this.editId = parseInt(paramMap.get('id'));        
      }
    )
    this.createCourseForm();    
  }

  createCourseForm() : void{
    let course = new Course();        
    if(isNaN(this.editId) === false && this.editId !== 0 ){
      this.courseService.getCourseById(this.editId).subscribe(
        (c : Course) =>{
          course = c;
          this.createEditForm(course);          
        }        
      )             
    }else{
      this.editId = 0;
      this.courseForm = this.formBuilder.group(
        course
      ) 
      this.isLoading = false;
    }       
  }

  createEditForm(course : Course) : void {
    this.courseForm = this.formBuilder.group(
      course
    )
    this.isLoading = false;
  }

  update() : void {
    if(this.courseForm.valid) {
      let course = new Course();
      course = this.courseForm.value;
      this.courseService.updateCourse(course).subscribe(
        (data : Course)=>{
          if(data !== null && data !== undefined){
            this.message = 'Course Updated Successfully with id : '+course.id;
          }          
        },
        (error)=>{

        }
      )
    }
  }

  save() : void {
    if(this.courseForm.valid) {
      let course = new Course();
      course = this.courseForm.value;
      this.courseService.saveCourse(course).subscribe(
        (data : Course)=>{
          if(data !== null && data !== undefined){
            this.message = 'Course Saved Successfully with id : '+course.id;
          }          
        },
        (error)=>{

        }
      )
    }   
  }
}
