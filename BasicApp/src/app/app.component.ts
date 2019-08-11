import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicApp';
  revString : string = ''; // instanse variable

  reverse(str: string):void {
    //let result:number = 11;
    //result = result + parseInt(str);
    //alert(result);
    //alert("Say Hello...!" + str);
    let revStr = str.split("").reverse().join("");
    this.revString = revStr;
  }
}
