import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './product';

export class ShoppingCartItem {
    $key:string;
    title:string;
    imageUrl:string;
    price:number;
    quantity:number;
  

    get totalPrice(){
        return  this.price * this.quantity
    }
}