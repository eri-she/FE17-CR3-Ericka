import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { IProducts } from '../products/interfacep';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  products: Array<IProducts> = products;

  constructor(private cartService: CartService) {}
  addToCart(item: IProducts) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
  ngOnInit(): void {}
}
