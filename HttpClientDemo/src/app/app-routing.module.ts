import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
  {path : 'home' , component : NavbarComponent , canActivate : [AuthGuard],
    canActivateChild: [AuthGuard],
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
