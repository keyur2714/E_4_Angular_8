import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemEntryComponent,
    EmployeeEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
