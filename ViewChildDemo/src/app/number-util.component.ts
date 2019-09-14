import { Component, Input } from '@angular/core';

@Component({
    selector : 'app-number-util',
    template : `<h1><ng-content></ng-content>{{result}}</h1>`,
    styles : ['']
})
export class NumberUtilComponent {

    @Input()
    result : string = '';

    constructor(){
        console.log("Number Util Component Object Created...!");
    }

    add(num1 : number , num2 : number) : number {
        return num1 + num2;
    }

    sub(num1 : number , num2 : number) : number {
        return num1 - num2;
    }

    div(num1 : number , num2 : number) : number {
        if(num2 !== 0)
            return num1 / num2;
        return 0;
    }

    mul(num1 : number , num2 : number) : number {
        return num1 * num2;
    }
}