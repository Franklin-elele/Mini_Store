import { Component, OnInit } from '@angular/core';
import { products } from '../models/tasks';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: number = 1;

  products: products[] = [];
  

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: products[]) => {
      this.products = data;
    });
  }

  onSelectedProduct(product: products): void {
    console.log('Selected product:', product);
  }

  
}
