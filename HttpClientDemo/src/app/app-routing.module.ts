import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';


const routes: Routes = [
  {path : 'course' , component : CourseListComponent},
  {path : 'addCourse' , component : AddEditCourseComponent},
  {path : 'editCourse/:id' , component : AddEditCourseComponent},
  {path : 'deleteCourse/:id' , component : CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
