import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/operators/map';
import 'rxjs/add/operator/take'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }
  getAll(){
    return this.db.list('/products')
      .snapshotChanges()
      .pipe(map(items => {         // <== new way of chaining
        return items.map(a => {
          var data = a.payload.val();
          const key = a.payload.key;
          data['$key']=key;
          return data;           // or {key, ...data} in case data is Obj
        });
      }));
  }

  get(productId){   
    return this.db.object('/products/'+productId).valueChanges().take(1);
  }
  update(productId,product){
    return this.db.object('/products/'+productId).update(product);
  }
  delete(productId){
    console.log(productId)
    return this.db.object('/products/'+productId).remove();
  }
}