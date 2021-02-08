import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import *  as firebase from "firebase"
import { AppUser } from '../../../shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AngularFireObject } from '@angular/fire/database';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:firebase.default.User;
  appUser:AppUser;
  cart$:Observable<ShoppingCart>
  constructor(public auth:AuthService, private shoppingCartService: ShoppingCartService) { 

    this.cart$= this.shoppingCartService.getCart();
 
  }

  async ngOnInit(): Promise<void> {
    this.auth.appUser$.subscribe(appUser=>this.appUser=appUser)
   }
   OnLogout(){
 
     try 
     {    
       this.auth.logout();
     }
     catch (error)
     {
       console.log(error)
     }  
 
   };

}
