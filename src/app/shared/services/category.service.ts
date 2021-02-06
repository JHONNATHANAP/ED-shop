import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/operators/map';
import 'rxjs/add/operator/take'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  getCategories(){
    return this.db.list('/categories',ref => ref.orderByChild('idchofer')).snapshotChanges()
    .pipe(map(items => {         // <== new way of chaining
      return items.map(a => {
        var data = a.payload.val();
        const key = a.payload.key;
        data['$key']=key;
        return data;           // or {key, ...data} in case data is Obj
      });
    }));
  }
}
