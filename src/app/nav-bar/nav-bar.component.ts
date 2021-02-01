import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import *  as firebase from "firebase"
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:firebase.default.User;
  constructor(public auth:AuthService) { }

  async ngOnInit(): Promise<void> {
    try{
     console.log('Navbar')
     const user = await this.auth.getCurrentUser();
     console.log(user)
    }catch (error){
      console.log(error)
    }
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
