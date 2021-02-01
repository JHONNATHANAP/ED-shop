import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app"
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User>;
  constructor(public afAuth:AngularFireAuth,private router:Router,private route: ActivatedRoute) { 
    this.user$= afAuth.authState;
  }

  async login(email:string,password:string){
    try
    {
      const result= await this.afAuth.signInWithEmailAndPassword(email,password).then();
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
      let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/'
      localStorage.setItem('returnUrl',returnUrl)
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
      this.router.navigate(['/login']);
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
