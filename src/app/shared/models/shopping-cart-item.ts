import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './product';

export interface ShoppingCartItem {
    product:Product;
    quantity:number;
}