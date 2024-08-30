import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { products } from '../models/tasks';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentStep: number = 1;
  cartItems: products[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}
   goToNextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items.map(item => ({
        ...item,
        subtotal: item.price * item.quantity
      }));
      this.total = this.cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    });
  }

  removeFromCart(product: products): void {
    this.cartService.removeFromCart(product);
  }
}
