import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminAuthGuardService } from 'app/admin/services/admin-auth-guard.service';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [    
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent
  ], 
  providers:[
    AuthService,   
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
  ]
})
export class SharedModule { }
