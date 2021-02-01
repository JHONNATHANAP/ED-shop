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

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/service/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

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
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'register',component: RegisterComponent},
      {path:'products',component: ProductsComponent},
      {path:'shopping-cart',component: ShoppingCartComponent},
      {path:'login',component: LoginComponent},

      {path:'check-out',component: CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'order-success',component: OrderSuccessComponent,canActivate:[AuthGuardService]},
      {path:'my/orders',component: MyOrdersComponent,canActivate:[AuthGuardService]},

      {path:'admin/products',component: AdminProductsComponent},
      {path:'admin/orders',component: AdminOrdersComponent}      
    ]),
    NgbModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
