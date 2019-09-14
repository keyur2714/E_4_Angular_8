import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NumberUtilComponent } from '../number-util.component';

@Component({
  selector: 'app-numeric-operation',
  templateUrl: './numeric-operation.component.html',
  styleUrls: ['./numeric-operation.component.css']
})
export class NumericOperationComponent implements OnInit {

  @ViewChild("num1",{static : true})
  number1 : ElementRef;
  @ViewChild("num2",{static : true})
  number2 : ElementRef;

  @ViewChild("result",{static : true})
  result : ElementRef;

  @ViewChild(NumberUtilComponent, {static : false})
  numberUtilComponent : NumberUtilComponent;

  res : string = '';

  constructor() { }

  ngOnInit() {
  }

  add(): void {
    console.log(this.number1);
    console.log(this.number1.nativeElement);
    console.log(this.number1.nativeElement.value);
    console.log(this.number2);
    console.log(this.number2.nativeElement);
    console.log(this.number2.nativeElement.value);
    let num1 = parseInt(this.number1.nativeElement.value);
    let num2 = parseInt(this.number2.nativeElement.value);
    let res = this.numberUtilComponent.add(num1,num2);
    this.res = ""+res;
    this.result.nativeElement.innerHTML="Result Is : "+res;
    this.number1.nativeElement.value = '';
    this.number2.nativeElement.value = '';
  }

  sub(): void {
    let num1 = parseInt(this.number1.nativeElement.value);
    let num2 = parseInt(this.number2.nativeElement.value);
    let res = this.numberUtilComponent.sub(num1,num2);
    this.result.nativeElement.innerHTML="Result Is : "+res;
    this.number1.nativeElement.value = '';
    this.number2.nativeElement.value = '';
  }

  div(): void {
    let num1 = parseInt(this.number1.nativeElement.value);
    let num2 = parseInt(this.number2.nativeElement.value);
    let res = this.numberUtilComponent.div(num1,num2);;
    this.result.nativeElement.innerHTML="Result Is : "+res;
    this.number1.nativeElement.value = '';
    this.number2.nativeElement.value = '';              
  }

  mul(): void {
    let num1 = parseInt(this.number1.nativeElement.value);
    let num2 = parseInt(this.number2.nativeElement.value);
    let res = this.numberUtilComponent.mul(num1,num2);
    this.result.nativeElement.innerHTML="Result Is : "+res;
    this.number1.nativeElement.value = '';
    this.number2.nativeElement.value = '';
  }

}
