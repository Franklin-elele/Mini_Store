import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

  searchTerm:string = '';

  constructor(private searchService:SearchService){}

  onSearch() {
    this.searchService.updateSearchTerm(this.searchTerm)
  }
}
