import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  user:User
  userSubscription:Subscription
  constructor(private router:Router,private authservice:AuthService){
    this.userSubscription=this.authservice.user.subscribe(user=>{
      (this.user=user);
    })
  }
  logout(){
    this.authservice.logout();
    this.router.navigate(['/']);
  }
  ngOnDestroy():void{
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }

  }
}
