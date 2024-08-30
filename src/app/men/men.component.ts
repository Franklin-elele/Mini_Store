import { Component, OnInit } from '@angular/core';
import { products } from '../models/tasks';
import { MenService } from '../services/men.service';
import { SearchService } from '../services/search.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent implements OnInit{
  menShoe:products[] = []
  searchTerm :string = '';
  allProducts: products[] = []; 

  constructor(private menService:MenService, private searchService:SearchService ){}
 
  ngOnInit(): void {
   this.getProducts()
   
   this.searchService.currentSearchTerm.subscribe(term => {
    this.searchWork(term)
   })
  }

  getProducts(){
    this.menService.getProducts().subscribe((data:products[])=>{
      this.menShoe = data;
      this.allProducts = data;
    });
  }

  searchWork(term : string){
    if (!term.trim()){
      this.menShoe = this.allProducts
    }
    else{
      this.menShoe = this.allProducts.filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.name.toLowerCase().includes(term.toLowerCase())||
        item.price.toString().includes(term.toLowerCase())||
        item.category.toLowerCase().includes(term)
      )
    }  
  }
}


// this.menService.getProducts().subscribe((data: products[]) => {
//   this.menShoe = data;
// });