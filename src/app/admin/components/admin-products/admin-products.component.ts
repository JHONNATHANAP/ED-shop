import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products:Product[];
  filteredProducts:any[];
  subscription:Subscription;
  subscription2:Subscription;

  constructor(private productServide: ProductService) {
   
    this.subscription = this.productServide.getAll()
      .subscribe((a: Product[]) => this.filteredProducts = this.products=a)
   }
   filter(query:string){
    this.filteredProducts=(query)?
      this.products.filter(p=> p.title.toLowerCase().includes(query.toLowerCase())):
      this.products;
   }

  ngOnInit(): void {
    this.productServide.getAll()
  }

}
