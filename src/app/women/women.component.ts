import { Component, OnInit } from '@angular/core';
import { products } from '../models/tasks';
import { WomenShoeService } from '../services/women-shoe.service';
import { SearchService } from '../services/search.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  womenShoe: products[] = [];
  searchTerm: string = '';
  allProduct: products[] = [];
  selectShoeSize: string | undefined;  
  sizes: string[] = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'];

  constructor(
    private womenService: WomenShoeService,
    private searchService: SearchService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.searchService.currentSearchTerm.subscribe(term => {
      this.searchWork(term);
    });
  }

  getProducts(): void {
    this.womenService.getproducts().subscribe((data: products[]) => {
      this.womenShoe = data;
      this.allProduct = data;
    });
  }

  searchWork(term: string): void {
    if (!term.trim()) {
      this.womenShoe = this.allProduct;
    } else {
      this.womenShoe = this.allProduct.filter(item =>
        item.name?.toLowerCase().includes(term.toLowerCase()) ||
        item.price?.toString().includes(term) ||
        item.category?.toLowerCase().includes(term.toLowerCase())
      );
    }
  }

  onSizeSelected(size: string): void {
    this.selectShoeSize = size;  
  }

 

  
}
