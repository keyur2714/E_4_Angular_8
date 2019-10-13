import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  {path : 'course' , component : CourseListComponent, canActivate : [AuthGuard]},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'courseMaterial' , component : CourseMaterialComponent},
  {path : 'addCourse' , component : AddEditCourseComponent},
  {path : 'editCourse/:id' , component : AddEditCourseComponent},
  {path : 'deleteCourse/:id' , component : CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
