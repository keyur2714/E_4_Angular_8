import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  @Input() 
  title : string = '';

  @Input()
  dataList : any[] = [];

  @Input()
  headerList : string[] = [];

  @Input()
  columnList : string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
