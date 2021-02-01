import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import *  as firebase from "firebase"
import { AppUser } from '../models/app-user';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:firebase.default.User;
  appUser:AppUser;
  constructor(public auth:AuthService) { 
 
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
