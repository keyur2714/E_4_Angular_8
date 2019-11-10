import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  constructor(){
    console.log("Welcome Pipe Object Created...!");
  }

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let newValue = 'Welcome ' + value; 
    return newValue;
  }

}
