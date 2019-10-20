import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './course-list/course.service';
import { CourseRoutingModule } from './course-routing.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations : [
        CourseListComponent,    
        AddEditCourseComponent,
        CourseMaterialComponent,
        CourseDetailComponent
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        CourseRoutingModule,
        SharedModule
    ],
    entryComponents : [
        CourseDetailComponent
    ],
    providers : [
        CourseService,
        AuthGuard
    ]
})
export class CourseModule {
    constructor(){
        console.log("Course Module Loaded...");
    }
}