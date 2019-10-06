import { Observable } from 'rxjs';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    appUrl : string = 'http://localhost:3000/course';

    constructor(private httpClient : HttpClient){}

    getCourseList(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.appUrl);
    }
}