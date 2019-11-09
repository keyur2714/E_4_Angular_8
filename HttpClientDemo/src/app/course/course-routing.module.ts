import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
const routes : Routes = [
    // {path : 'home' , component : NavbarComponent , canActivate : [AuthGuard],
    // canActivateChild: [AuthGuard],
    {
    path : '' , component : NavbarComponent,
    children : [
      {path : 'course' , component : CourseListComponent},
      {path : 'dashboard' , component : DashboardComponent},
      {path : 'courseMaterial' , component : CourseMaterialComponent},
      {path : 'addCourse' , component : AddEditCourseComponent},
      {path : 'editCourse/:id' , component : AddEditCourseComponent},
      {path : 'deleteCourse/:id' , component : CourseListComponent}
    ]  
  },  
];
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
       RouterModule 
    ]
})
export class CourseRoutingModule{
    constructor(){
      console.log("Course Routing Module Loaded...");
    }
}