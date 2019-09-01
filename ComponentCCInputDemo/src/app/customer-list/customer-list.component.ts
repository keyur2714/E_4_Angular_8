import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList : Customer[] = [];
  headerList : string [] = ["Id","Name","Contact No","Email"];
  columnList : string[] = ["id","name","mobileNo","email"];

  constructor() { }

  ngOnInit() {
    let customer1 = new Customer(1,"keyur","7387029671","keyurjava27@gmail.com","Pimple Saudagar,Pune");
    let customer2 = new Customer(2,"denish","7387029721","denishjava26@gmail.com","Malad,Mumbai");
    let customer3 = new Customer(3,"vinit","7387029321","vinit2cute@gmail.com","Adajan,Surat");

    this.customerList.push(customer1);
    this.customerList.push(customer2);
    this.customerList.push(customer3);
  }

}
