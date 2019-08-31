import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InBuiltDirectiveDemo';

  selectedProduct : Product = new Product();
  productList : Product[] = [
    {
           id: 11,
           code: 'FAN',
           name : 'Orient Fan',
           unitPrice : 1000
    }
  ];
  // productList = [
  //   {
  //     id: 11,
  //     code: 'FAN',
  //     name : 'Orient Fan',
  //     unitPrice : 1000
  //   },
  //   {
  //     id: 12,
  //     code: 'TV',
  //     name : 'Sony TV',
  //     unitPrice : 11000
  //   },
  //   {
  //     id: 13,
  //     code: 'AC',
  //     name : 'Hitachi AC',
  //     unitPrice : 15000
  //   }
  // ];


  constructor(){
    console.log("Always First. when object get created...!");
  }

  ngOnInit(){
    console.log("Always Second. After Constructor...!");
    let product1 = new Product();
    product1.id = 12,
    product1.code = 'TV';
    product1.name = 'Sony TV';
    product1.unitPrice = 11200;

    let product2 = new Product();
    product2.id = 13,
    product2.code = 'AC';
    product2.name = 'Hitachi AC';
    product2.unitPrice = 33200;

    this.productList.push(product1);
    this.productList.push(product2);

  }

  setSelectedProduct(product):void{
    console.log(product);
    this.selectedProduct = product;
  }
}
