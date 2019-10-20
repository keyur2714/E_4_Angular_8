import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course-list/course.service';
import { Course } from '../course-list/course.model';
import { MatDialog } from '@angular/material/dialog';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.css']
})
export class CourseMaterialComponent implements OnInit {

  displayedColumns: string[] = ['id', 'courseCode', 'courseName', 'fees', 'action'];
  
  courseList : Course[] = [];
  deleteId : number = 0;

  dataSource : MatTableDataSource<Course> = new MatTableDataSource();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private courseService : CourseService,private activatedRoute : ActivatedRoute, private router : Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.getCourseList();    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCourseList() : void {
    this.courseService.getCourseList().subscribe(
      (data : Course[])=>{
        this.courseList = data;
        this.dataSource.data = this.courseList;
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetail(courseId : number) : void {
    //alert(courseId);
    let course = new Course();
    course.id = courseId;
    course.courseName = 'Test';
    course.courseCode = 'TestCode';
    course.fees = 11111;
    const dialogRef = this.dialog.open(CourseDetailComponent, {
      width: '750px',
      height: '300px',
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


