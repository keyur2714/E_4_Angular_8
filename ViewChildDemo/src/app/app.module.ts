import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericOperationComponent } from './numeric-operation/numeric-operation.component';
import { NumberUtilComponent } from './number-util.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericOperationComponent,
    NumberUtilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
