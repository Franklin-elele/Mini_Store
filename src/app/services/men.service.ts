import { Injectable } from '@angular/core';
import { products } from '../models/tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenService {

  private items : products[] = [
    {
      id: 1,
      name: 'Nike SB Low Dunk',
      price: 100,
      image: '../../assets/images/item-13.jpg',
      description: ' A popular skateboarding shoe that offers great board feel and durability. The SB Low Dunk is known for its padded tongue and collar, along with its stylish design.',
      brand: 'Nike',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 2,
      name: 'Brooks Vapor 11',
      price: 150,
      image: '../../assets/images/item-4.jpg',
      description: 'A running shoe known for its comfort and durability. The Vapor 11 is designed to provide a smooth ride with ample cushioning, making it ideal for long-distance running.',
      brand: 'Brooks',
      category: 'Men’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 3,
      name: ' On Cloud X',
      price: 200,
      image: '../../assets/images/item-6.jpg',
      description: 'A lightweight, versatile running shoe designed for all-day performance. It features CloudTec technology for a cushioned, responsive ride, making it perfect for both training and casual wear.',
      brand: 'On Running  ',
      category: 'Men’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 4,
      name: 'Nike Lubarcharge',
      price: 200,
      image: '../../assets/images/item-12.jpg',
      description: ' A modern, performance-driven sneaker designed for training and high-intensity workouts. The Lubarcharge offers stability, support, and a bold design.',
      brand: 'Nike',
      category: 'Men’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 5,
      name: 'Nike Air Jordan',
      price: 100,
      image: '../../assets/images/item-11.jpg',
      description: 'A sleek, stylish sneaker featuring the iconic Air Max cushioning for superior comfort. Designed for everyday wear, blending casual style with athletic performance.',
      brand: 'Nike',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 6,
      name: 'Nike Air Force 1 ',
      price: 150,
      image: '../../assets/images/item-23.0.jpg',
      description: 'An iconic sneaker first released in 1982, known for its clean design and versatility. The Air Force 1 has a timeless appeal and is available in numerous colorways.',
      brand: 'Nike',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 7,
      name: 'Air More UPTEMPO',
      price: 200,
      image: '../../assets/images/item-15.jpg',
      description: 'A bold, retro basketball shoe recognized for its oversized "AIR" branding. It combines a chunky design with high-performance features for on-court dominance and off-court style.',
      brand: 'Nike',
      category: 'Men’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 8,
      name: 'VANS',
      price: 150,
      image: '../../assets/images/item-28.0.jpg',
      description: ': Classic skate shoes known for their durable construction and iconic waffle sole. VANS are a staple in streetwear fashion, popular for their versatility and timeless design.',
      brand: 'Vans',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 9,
      name: 'Air Max Noble',
      price: 200,
      image: '../../assets/images/item-44.jpeg',
      description: ' A sleek, stylish sneaker featuring the iconic Air Max cushioning for superior comfort. Designed for everyday wear, blending casual style with athletic performance.',
      brand: 'Nike',
      category: 'Men’s Footwear,',
      discount: '',
      delivery: '',
      subtotal: 0,
      quantity: 0,
      comment: '',
      size: ''
    },
    {
      id: 10,
      name: 'Oxford Mid-Heel',
      price: 200,
      image: '../../assets/images/item-39.jpeg',
      description: 'Classic Oxford shoes with a mid-heel, designed for men. These shoes combine traditional style with modern comfort, suitable for both formal and semi-formal settings.',
      brand: 'Oxford',
      category: 'Men’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 11,
      name: 'DC Shoes Court Graffik',
      price: 150,
      image: '../../assets/images/item-40.jpeg',
      description: ' A durable skate shoe known for its comfort and bold DC branding. The Court Graffik is a staple in skate culture and street fashion.',
      brand: 'DC Shoes',
      category: 'Men’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 12,
      name: 'Adidas Samba OG',
      price: 200,
      image: '../../assets/images/item-35.jpeg',
      description: 'A classic sneaker originally designed for indoor soccer, the Adidas Samba OG features a leather upper, suede overlays, and a distinctive gum sole. Its timeless design has made it a favorite in both sports and casual wear, known for its versatility and style.',
      brand: 'Adidas',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },


  ]

  constructor() { }
  getProducts():Observable<products[]>{
    return of(this.items);
  }

}
