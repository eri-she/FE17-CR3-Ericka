import { Injectable } from '@angular/core';
import { IProducts } from './products/interfacep';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProducts[] = [];
  total: number = 0;

  constructor() {}
  addToCart(product: IProducts) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotal() {
    this.total = 0;
    for (let p of this.items) {
      this.total += p.price;
    }
    return this.total;
  }
}
