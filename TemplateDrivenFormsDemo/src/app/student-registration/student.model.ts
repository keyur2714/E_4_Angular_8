import { Course } from './course.model';

export class Student {
    constructor(public name?:string,public mobileNo?:string,public email?:string,public course ?: Course,public gender?:string){}
}