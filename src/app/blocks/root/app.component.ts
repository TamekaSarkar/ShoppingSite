import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { User } from '../../core/user';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy,OnInit {
  user: Observable< User>
  userSubscription:Subscription
  constructor(private router:Router,private authservice:AuthService){
    
  }
  ngOnInit():void{
    this.user = this.authservice.user;
    this.userSubscription = this.authservice.findMe().subscribe(user => this.user = user);
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
