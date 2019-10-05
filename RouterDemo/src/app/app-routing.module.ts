import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CourseDetailComponent } from './admin/course-detail/course-detail.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},
  {
    path : 'admin' , component : AdminComponent,
    children : [
      {path : 'manage-course' , component : CourseListComponent},
      {path : 'course-detail/:id' , component : CourseDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
