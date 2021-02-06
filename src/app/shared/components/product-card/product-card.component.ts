import { Component, Input, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent   {
  @Input('product') product: Product;
  @Input('show-actions') showActions=true;

  constructor(private cartService: ShoppingCartService) { }
  addToCart(product:Product){
    this.cartService.addToCart(product)
  }



}
