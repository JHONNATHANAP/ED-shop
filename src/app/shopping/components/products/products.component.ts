import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  filteredProducts:Product[]=[];
  category:string;
  cart:any;

  constructor(productService: ProductService,route:ActivatedRoute,private shoppingCartService: ShoppingCartService) {
   
    this.shoppingCartService.getCart()
      .subscribe(cart=>this.cart=cart)

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
