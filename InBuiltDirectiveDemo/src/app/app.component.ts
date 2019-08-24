import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InBuiltDirectiveDemo';

  selectedProduct = {};
  productList = [
    {
      id: 11,
      code: 'FAN',
      name : 'Orient Fan',
      unitPrice : 1000
    },
    {
      id: 12,
      code: 'TV',
      name : 'Sony TV',
      unitPrice : 11000
    },
    {
      id: 13,
      code: 'AC',
      name : 'Hitachi AC',
      unitPrice : 15000
    }
  ];

  setSelectedProduct(product):void{
    console.log(product);
    this.selectedProduct = product;
  }
}
