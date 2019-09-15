import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyStyleDirective } from './my-style.directive';
import { MyIfDirective } from './my-if.directive';
import { MyForDirective } from './my-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyStyleDirective,
    MyIfDirective,
    MyForDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
