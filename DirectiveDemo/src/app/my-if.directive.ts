import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef:  ViewContainerRef) { 
    console.log("MyIf Directive Created...");
  }

  @Input() set appMyIf(condition : boolean){
    console.log(condition);

    if(condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }
  
}
