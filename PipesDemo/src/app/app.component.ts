import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';
  name : string = 'Hello Radhe Krishna...!';
  bDate : Date = new Date(1986,11,27);
  numObservable = interval(1000);
  //num : number =0 ;
  emp = {
    name : "keyur",
    city : "pune"
  };

  accountNumber : string = '9974615270';

  ngOnInit() {
    // this.numObservable.subscribe(
    //   (data)=>{
    //     this.num = data;
    //   }
    // )
  }

  add(num1 : number , num2 : number) : number {
    return num1 + num2;
  }
}
