import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  itemEntryForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.createItemEntryForm();
  }

  createItemEntryForm() : void {
    this.itemEntryForm = new FormGroup(
      {
        code : new FormControl('',Validators.required),
        desc : new FormControl('',[Validators.required,Validators.minLength(10)]),
        price : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')])
      }
    )
  }

  save() : void {
    console.log(this.itemEntryForm);
    console.log(this.itemEntryForm.value);
  }
}
