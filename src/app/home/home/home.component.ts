import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private productService:ProductService){
    
  }
  products:Product[] = [];
  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }
}
