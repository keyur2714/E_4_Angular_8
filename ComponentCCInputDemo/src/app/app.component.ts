import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCCInputDemo';
  msg : string = 'Hello How are you?';
  messageList : string[] = [
    "Good Morning..!",
    "Good Afternoon..!",
    "Good Evening..!",
    "Radhe Krishna..!"
  ];
}
