import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from 'shared/models/product';
import 'rxjs/add/operator/take'
import 'rxjs/operators/map';
import { map } from 'rxjs/operators';
import { ItemShaopCart } from 'shared/models/item-shoop-cart';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  private create(){
    return this.db.list('/shopping-carts').push({
      dataCreated:new Date().getTime()
    })
  }
  public getCart():Observable<ShoppingCart>{
    let cartId= this.getOrCreateCart()
    return this.db.object('/shopping-carts/'+cartId).valueChanges()
      .map((x:ShoppingCart)=>new ShoppingCart(x.items));
  }
  private getOrCreateCart(){
    let cartId=localStorage.getItem('cartId')
    if(!cartId){
      this.create().then(result=>{
        localStorage.setItem('cartId', result.key)
        return result.key
      });
    }else{
      return cartId
    }
  }
  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }


  public removeFromCart(product:Product){
    this.updateItemQUantity(product,-1)
  }

  public addToCart(product:Product){
    this.updateItemQUantity(product,1)
  }

  private updateItemQUantity(product:Product,change:number){
    let cartId= this.getOrCreateCart();
    let item$$=  this.getItem(cartId, product.$key);
    let item$= item$$.valueChanges()
    item$.take(1).subscribe((item:ItemShaopCart) => {
        q:Number;
        item$$.update({product:{title: product.title,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl},quantity:(item? item.quantity : 0)+change}) 
    });
  }
}
