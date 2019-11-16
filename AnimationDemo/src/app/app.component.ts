import { Component, OnInit, HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple-state.animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';
import { interval, Observable } from 'rxjs';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    STATE_ANIMATION,
    ON_OFF_2_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AppComponent implements OnInit{
  title = 'AnimationDemo';
  state : string = 'start';
  tableState : string = 'on';
  names : string[] = ["keyur","denish","vinit"];
  loading : boolean = true;

  numOnservable : Observable<number>= interval(1000);

  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 
  @HostBinding('style.display')   
  display = 'block';
  @HostBinding('style.position')  
  position = 'absolute'; 
  

  toggleState() : void {
    this.state = this.state === 'start' ? 'stop' : 'start';
    this.tableState = this.tableState === 'on' ? 'off' : 'on';
  }

  ngOnInit(){
    this.numOnservable.subscribe(
      (data)=>{
        if(data >= 10){
          this.loading = false;
        }
      }
    )
  }


}
