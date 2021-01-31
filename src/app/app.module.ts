import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminProductsComponent,
    NavBarComponent,
    ProductsComponent,
    LoginComponent,
    OrderSuccessComponent,
    CheckOutComponent,
    ShoppingCartComponent,
    HomeComponent,
    MyOrdersComponent,
    RegisterComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'register',component: RegisterComponent},
      {path:'products',component: ProductsComponent},
      {path:'shopping-cart',component: ShoppingCartComponent},
      {path:'check-out',component: CheckOutComponent},
      {path:'order-success',component: OrderSuccessComponent},
      {path:'my/orders',component: MyOrdersComponent},
      {path:'login',component: LoginComponent},
      {path:'admin/products',component: AdminProductsComponent},
      {path:'admin/orders',component: AdminOrdersComponent}      
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
