import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private productService:ProductService,
  ){

  }
  product:Product | undefined;
  quantitySelected = 1;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(Number.parseInt(id));
    if (this.product == undefined) {
      this.router.navigate(['/home'])
    }
  }

  increaseQuantitySelected(){
    if (this.quantitySelected > 0) {
      this.quantitySelected++;
    }
  }
  decreaseQuantitySelected(){
    if (this.quantitySelected > 1) {
      this.quantitySelected--;
    }

  }
  
}
