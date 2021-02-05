import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../manage/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  filteredProducts:Product[]=[];
  category:string;

  constructor(productService: ProductService,route:ActivatedRoute) {
    productService.getAll().subscribe((product:Product[])=>{
      this.products=product;
      route.queryParamMap.subscribe(params=>{
        this.category=params.get('category');
        this.filteredProducts=(this.category)?
          this.products.filter(p => p.category === this.category):
          this.products;
      })
    })
 

    
    
   }

  ngOnInit(): void {
  }

}
