import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from 'shared/models/product';
import 'rxjs/add/operator/take'
import 'rxjs/operators/map';
import { map } from 'rxjs/operators';
import { ItemShaopCart } from 'shared/models/item-shoop-cart';
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
  private getCart(cartId:string){
    return this.db.object('/shopping-carts/'+cartId);
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



  addToCart(product:Product){
    console.log(product)
    let cartId= this.getOrCreateCart();
    let item$$=  this.getItem(cartId, product.$key);
    let item$= this.getItem(cartId, product.$key).valueChanges()
    item$.take(1).subscribe((item:ItemShaopCart) => {
      if(item!=null) item$$.update({quantity:item.quantity+1})
      else item$$.set({product:{title: product.title,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl},quantity:1}) 
    });

  }
}
