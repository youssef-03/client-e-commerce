import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products:Product[] = [
    {
      id:0,
      name: "Blue Denim Jacket",
      description: "Perfect for any season, crafted from premium denim.",
      image: "assets/images/denim_jacket.png",
      price: 50
    },
    {
      id:1,
      name:"Black watch",
      description:"This is a classic product made from good materials",
      image:"assets/images/watch.png",
      price:10
    },
    {
      id:2,
      name: "Red Canvas Sneakers",
      description: "Bright and comfortable, ideal for daily wear.",
      image: "assets/images/red_sneakers.png",
      price: 35
    },
    {
      id:3,
      name: "Leather Tote Bag",
      description: "Spacious and stylish, made from genuine leather.",
      image: "assets/images/tote_bag.png",
      price: 80
    },
    {
      id:4,
      name: "Gold Hoop Earrings",
      description: "Elegant and chic, perfect for any occasion.",
      image: "assets/images/hoop_earrings.png",
      price: 20
    },
    {
      id:5,
      name: "Silk Scarf",
      description: "Luxurious and versatile, adds a pop of color to any outfit.",
      image: "assets/images/silk_scarf.png",
      price: 25
    },
    {
      id:6,
      name: "Blue Denim Jacket",
      description: "Perfect for any season, crafted from premium denim.",
      image: "assets/images/denim_jacket.png",
      price: 50
    },
    {
      id:7,
      name:"Black watch",
      description:"This is a classic product made from good materials",
      image:"assets/images/watch.png",
      price:10
    },
    {
      id:8,
      name: "Red Canvas Sneakers",
      description: "Bright and comfortable, ideal for daily wear.",
      image: "assets/images/red_sneakers.png",
      price: 35
    },
    {
      id:9,
      name: "Leather Tote Bag",
      description: "Spacious and stylish, made from genuine leather.",
      image: "assets/images/tote_bag.png",
      price: 80
    },
    {
      id:10,
      name: "Gold Hoop Earrings",
      description: "Elegant and chic, perfect for any occasion.",
      image: "assets/images/hoop_earrings.png",
      price: 20
    },
    {
      id:11,
      name: "Silk Scarf",
      description: "Luxurious and versatile, adds a pop of color to any outfit.",
      image: "assets/images/silk_scarf.png",
      price: 25
    },

    ]; 

  getProducts(){
    return this.products; 
  }
  getProductById(id:number):Product|undefined{
    for(let product of this.products){
      if(product.id === id){
        return product;
      }
    }
    return undefined;
  }
}
