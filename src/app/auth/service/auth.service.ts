import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }
  async login(email:string,password:string){
    try
    {
      const result= await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;
    }
    catch(error)
    {
      console.log(error)
    }
  }
  async loginGoogle(){
    try
    {
      return  this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
       
    }
    catch(error)
    {
      console.log(error)
    }
  }
  async register(email:string,password:string){
    try
    {
      const result= await this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    }
    catch(error)
    {
      console.log(error)
    }
    
  }
  async logout(){
    try
    {
      await this.afAuth.signOut();
    }
    catch(error)
    {
      console.log(error)
    }
   

  }
  async getCurrentUser(){
    return  this.afAuth.authState.pipe(first()).toPromise();
  }

}
