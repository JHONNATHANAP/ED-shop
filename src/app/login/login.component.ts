import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthService) { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });


  ngOnInit(): void {
  }
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
