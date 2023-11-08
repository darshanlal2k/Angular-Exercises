import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() message : string = '';


  name = '';
  products = [
    { id: 1, name: 'iphone 11', price: '12345', color: 'Black', available: 'available', image: '/assets/products/iphone-img-1.jpeg' },
    { id: 2, name: 'iphone 12', price: '113827', color: 'Gray', available: 'available', image: '/assets/products/iphone-img-2.jpeg' },
    { id: 3, name: 'iphone 13', price: '158029', color: 'Gold', available: ' not available', image: '/assets/products/iphone-img-3.jpeg' },
    { id: 4, name: 'iphone 14', price: '27632', color: 'Red', available: 'available', image: '/assets/products/iphone-img-4.jpeg' },
    { id: 5, name: 'iphone 15', price: '95000', color: 'Black', available: ' not available', image: '/assets/products/iphone-img-5.jpeg' },
    { id: 6, name: 'iphone 16', price: '100000', color: 'Yellow', available: 'available', image: '/assets/products/iphone-img-6.jpeg' }
  ];
}
