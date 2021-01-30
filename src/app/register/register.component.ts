import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../auth/services/auth.service';

@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc:AuthService) { }
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });

  ngOnInit(): void {
  }
  OnRegister(){
    const {email,password}=this.registerForm.value;
    this.authSvc.register(email,password);

  };

}
