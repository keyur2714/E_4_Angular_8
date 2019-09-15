import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef: ViewContainerRef) { 
    console.log("MyLoop Directive Object Created...!");
  }

  @Input('appMyFor') set myLoop(counter : number){
    console.log(counter);
    for(let i=1;i<=counter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  @Input() set appMyForIndex(idx : number){
    console.log(idx);
  }

  @Input() set appMyForCounter(cnt : number){
    console.log(cnt);
  }
}
