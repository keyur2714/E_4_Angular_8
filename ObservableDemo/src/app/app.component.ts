import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  title = 'ObservableDemo';
 
  seqNum : number = 0;
  subsription : Subscription = new Subscription();
  numberObservable : Observable<number> = interval(1000);

  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("App Component Object Created...!");
  }
  

  ngOnInit(){
    this.loggingService.logInfo("App Component Initialized...!");
    this.subsription = this.numberObservable.subscribe(
      (num : number)=>{
        this.seqNum = num;
      },
      (error)=>{
        console.log("Error "+error);
      },
      ()=>{
        console.log("Completed...");
      }
    )
  }

  stop():void{
    this.subsription.unsubscribe();
  }

}
