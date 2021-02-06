import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app"
import { Observable} from 'rxjs';
import { first } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User>;

  constructor(public afAuth:AngularFireAuth,private router:Router,private route: ActivatedRoute,private userService:UserService) { 
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

  get appUser$() : Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid).valueChanges();

        return Observable.of(null);
      });    
  }


}
