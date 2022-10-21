import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../products/interfacep';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // We declared empty variables that will change their value when we call the functions.
  items: IProducts[] = [];
  total: number = 0;
  newTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // as soon as the page is loaded, we request to get all the information that was pushed to the array so we can do a loop in the html file and display the information.
    this.items = this.cartService.getItems();
    // We call the function "getTotal" and "getDiscount" so we can display the value in the html file
    this.total = this.cartService.getTotal();
    this.newTotal = this.cartService.getDiscount();
  }
}
