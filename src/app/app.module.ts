import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { CoreModule } from './core/core.module';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
    AdminModule,
    CoreModule,
    SharedModule,
    ShoppingModule,
    BrowserModule,  
    AppRoutingModule,
    NgbModalModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component: ProductsComponent},
      {path:'register',component: RegisterComponent},
      {path:'login',component: LoginComponent},
    ]),
    NgbModule
  ],
  providers: [
    AuthGuardService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
