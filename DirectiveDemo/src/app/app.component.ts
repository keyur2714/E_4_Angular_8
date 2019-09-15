import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MyStyleDirective } from './my-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DirectiveDemo';

  @ViewChild(MyStyleDirective,{static : true})
  myStyleDirective : MyStyleDirective;

  @ViewChild("p1",{static : true})
  p1 : ElementRef;

  @ViewChild("h1",{static : true})
  h1 : ElementRef;

  age : number = 18;

  ngOnInit(){
    this.myStyleDirective.border = '5px solid green';
  }

  changeStyle(color : string) : void{
    this.myStyleDirective.changeStyle(color,'45px',this.h1);
  }
  
}
