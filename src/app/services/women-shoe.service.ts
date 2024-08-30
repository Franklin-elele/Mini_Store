import { Injectable } from '@angular/core';
import { products } from '../models/tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WomenShoeService {
  private items:products[]=[
    {
      id: 1,
      name: 'Kara Block Heel Sandals',
      price: 200,
      image: '../../assets/images/item-32.jpg',
      description: ' Stylish and comfortable block heel sandals, perfect for casual or formal occasions. The block heel provides stability, making them easy to wear for extended periods.',
      brand: 'Kara,Heels',
      category: 'Women’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 4,
      name: 'Glitter White Pointed-toe pumps',
      price: 200,
      image: '../../assets/images/item-31.jpg',
      description: ' Elegant and glamorous pumps featuring a pointed toe and glitter finish. Ideal for special occasions, these pumps add a touch of sparkle to any outfit.',
      brand: 'Heels',
      category: 'Women’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 5,
      name: 'Red Stiletto Heels',
      price: 150,
      image: '../../assets/images/item-5.jpg',
      description: 'Elegant and bold, red stiletto heels are a statement shoe designed to elongate the legs and add a pop of color to any outfit. Perfect for formal events or nights out, these heels combine sophistication with a touch of glamour.',
      brand: 'Heels',
      category: 'Women’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 6,
      name: 'Nike Air Max Dia',
      price: 200,
      image: '../../assets/images/product5.0.jpg',
      description: ' A women"s sneaker that combines sleek aesthetics with the comfort of Air Max cushioning. The Air Max Dia is known for its minimalist design and elevated height, providing both style and comfort.',
      brand: 'Nike',
      category: 'Women’s Footwear',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 7,
      name: 'Adiddas YEEZY',
      price: 200,
      image: '../../assets/images/item-29.0.jpg',
      description: ' A premium line of sneakers known for their innovative design and cultural impact. Collaboratively designed by Kanye West, YEEZY sneakers are highly sought after for their unique aesthetic and comfort.',
      brand: 'Adidas',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 8,
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
      id: 9,
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
      id: 10,
      name: 'New Balance 9060',
      price: 200,
      image: '../../assets/images/item-37.0.jpeg',
      description: 'The New Balance 9060 is a modern sneaker that blends retro and futuristic design elements. Known for its comfort and innovative construction, this shoe features a chunky sole, breathable materials, and the signature New Balance cushioning, making it a popular choice for both casual wear and athletic performance.',
      brand: 'New Balance',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 11,
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
    {
      id: 12,
      name: 'Puma Suede XL',
      price: 200,
      image: '../../assets/images/item-41.jpeg',
      description: ': An iconic sneaker known for its timeless design and soft suede upper. The Puma Suede XL offers a classic look with a comfortable fit, making it a staple in casual and streetwear fashion.',
      brand: 'Puma',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      subtotal: 0,
      quantity: 0,
      comment: '',
      size: ''
    },
    {
      id: 13,
      name: 'Puma RS-X',
      price: 200,
      image: '../../assets/images/item-27.1.jpg',
      description: 'A retro-inspired sneaker from Puma’s RS series, known for its chunky design and bold colorways. The RS-X combines vintage style with modern comfort, making it a popular choice in contemporary streetwear.',
      brand: 'Puma  ',
      category: 'Men’s Footwear,Unisex',
      discount: '',
      delivery: '',
      quantity: 0,
      subtotal: 0,
      comment: '',
      size: ''
    },
    {
      id: 14,
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
    
    
  ]

  constructor() { }
  getproducts():Observable<products[]>{
    return of(this.items)
  }
}
