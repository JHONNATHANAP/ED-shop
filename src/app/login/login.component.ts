import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/service/auth.service';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(public authSvc:AuthService) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });
  OnLogin(){

    try 
    {
      const {email,password}=this.loginForm.value;
      this.authSvc.login(email,password);
    }
    catch (error)
    {
      console.log(error)
    }  

  };
  async OnGooGleLogin(){
     try 
     {
       this.authSvc.loginGoogle(); 
     }
     catch (error)
     {
       console.log(error)
     }  
  };

}
