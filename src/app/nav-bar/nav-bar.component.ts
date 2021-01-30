import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/services/auth.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers:[AuthService]
})
export class NavBarComponent implements OnInit {

  constructor(private authSvc:AuthService) { }

  async ngOnInit(): Promise<void> {
   try{
    console.log('Navbar')
    const user = await this.authSvc.getCurrentUser();
    console.log(user)
   }catch (error){
     console.log(error)
   }
  }
  OnLogout(){

    try 
    {    
      this.authSvc.logout();
    }
    catch (error)
    {
      console.log(error)
    }  

  };

}
