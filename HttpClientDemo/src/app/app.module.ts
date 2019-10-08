import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseService } from './course-list/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StudentListComponent,
    ItemListComponent,
    AddEditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
