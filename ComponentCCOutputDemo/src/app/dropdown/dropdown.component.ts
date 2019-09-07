import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  placeHolder : string = '-:Select Item:-';

  @Input()
  name : string = 'select';

  @Input()
  dataList : Lookup[] = [];

  @Input()
  selectedItem : Lookup;

  @Output()
  getSelectedItem = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {
    this.getSelectedItem.emit(this.selectedItem);
  }

  emitSelectedItem(): void {
    this.getSelectedItem.emit(this.selectedItem);
  }
}
