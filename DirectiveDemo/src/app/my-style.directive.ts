import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  @Input()
  color : string = 'red';

  @Input()
  fontSize : string = '25px';

  border : string = '1px solid orange';

  constructor(private elementRef : ElementRef) {
    console.log("MyStyle Directive Object Created...!");
    console.log("Element is : "+this.elementRef.nativeElement);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.style.border = this.border;
  }

  changeStyle(color : string,fontSize : string,elementRef: ElementRef): void {
    elementRef.nativeElement.style.color = color;
  }
}
