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

    getCourseById(id : number): Observable<Course> {
        return this.httpClient.get<Course>(this.appUrl+"/"+id);
    }

    saveCourse(course : Course) : Observable<Course> {
        return this.httpClient.post<Course>(this.appUrl,course);
    }

    updateCourse(course : Course) : Observable<Course> {
        return this.httpClient.put<Course>(this.appUrl+"/"+course.id,course);
    }

    deleteCourse(id : number) : Observable<any> {
        return this.httpClient.delete(this.appUrl+"/"+id);
    }
}