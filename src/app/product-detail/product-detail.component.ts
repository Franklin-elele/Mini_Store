import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { products } from '../models/tasks';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() prod!: products;
  product: products | undefined;
  selectShoeSize: string | undefined;
  selectedWidth: string | undefined; // New property to store selected width
  sizes: string[] = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductsById(id).subscribe((data: products | undefined) => {
      this.product = data;
    });
  }

  selectedSize(size: string): void {
    this.selectShoeSize = size;
  }

  addToCartAndNavigate(): void {
    this.addToCart();
    this.router.navigate(['/cart']); // Navigate to the cart page after adding the product
  }

  selectWidth(width: string): void {  // New method to handle width selection
    this.selectedWidth = width;
  }

  incrementQuantity(): void {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product && this.selectShoeSize && this.selectedWidth) {  // Check if width is also selected
      const productAddToCart = {
        ...this.product,
        selectedSize: this.selectShoeSize,
        selectedWidth: this.selectedWidth,  // Add selected width to the cart
        quantity: this.quantity
      };
      this.cartService.addToCart(productAddToCart);
    } else {
      alert('Please select a shoe size and width before adding the product to the cart.');
    }
  }
}  