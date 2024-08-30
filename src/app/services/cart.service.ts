import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { products } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: products[] = [];
  private cartSubject = new BehaviorSubject<products[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {
    // Check if localStorage is available and load cart items
    if (this.isLocalStorageAvailable()) {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        this.cartItems = JSON.parse(savedCartItems);  // Load the cart from local storage
        this.cartSubject.next(this.cartItems);        // Update the observable with the loaded cart items
      }
    }
  }

  addToCart(product: products): void {
    this.cartItems.push(product);  // Add the new product to the cart
    this.updateCart();             // Save the cart and update the observable
  }

  removeFromCart(product: products): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);  // Remove the product from the cart
    this.updateCart();                                                       // Save the cart and update the observable
  }

  clearCart(): void {
    this.cartItems = [];  // Clear the cart
    this.updateCart();    // Save the empty cart and update the observable
  }

  getCartItems(): products[] {
    return this.cartItems;
  }

  private updateCart(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); // Save the updated cart to local storage
    }
    this.cartSubject.next(this.cartItems); // Update the observable with the new cart items
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'testValue');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
