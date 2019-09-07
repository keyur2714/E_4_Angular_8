import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Lookup } from '../dropdown/lookup.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user : User = new User();

  stateList : Lookup[] = [];

  cityList : Lookup[] = [];

  constructor() { }

  ngOnInit() {
    let state1 = new Lookup(1,'GUJ','Gujarat');
    let state2 = new Lookup(2,'MH','Maharashtra');
    let state3 = new Lookup(3,'MP','Madhya Pradesh');
    this.stateList.push(state1);
    this.stateList.push(state2);
    this.stateList.push(state3);    
  }

  save() : void {
    console.log(this.user.name+" "+this.user.state.desc+" "+this.user.city.desc);
  }

  setCityList(state : Lookup) : void{
    this.cityList.splice(0,this.cityList.length);
    this.user.state = state;    
    console.log(this.user.state.desc)  ;
    let city1;
    let city2;
    let city3;
    if(state.code == 'GUJ'){
      city1 = new Lookup(1,'SRT','Surat');
      city2 = new Lookup(2,'AMD','Ahmedabad');
      city3 = new Lookup(3,'BRD','Baroda');
    }else if(state.code == 'MH'){
      city1 = new Lookup(1,'MM','Mumbai');
      city2 = new Lookup(2,'PN','Pune');
      city3 = new Lookup(3,'Ng','Nagpur');
    }else if(state.code == 'MP'){
      city1 = new Lookup(1,'ID','Indore');
      city2 = new Lookup(2,'BP','Bhopal');
      city3 = new Lookup(3,'CH','Chindwada');
    }
    this.cityList.push(city1);
    this.cityList.push(city2);
    this.cityList.push(city3);
    
  } 

  getSelectedCity(city: Lookup) : void {
    this.user.city = city;
    console.log(this.user.city.desc);
  }
}
