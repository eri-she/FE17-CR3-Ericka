import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { IProducts } from '../products/interfacep';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  products: Array<IProducts> = products;

  constructor() {}

  ngOnInit(): void {}
}
