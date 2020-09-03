import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import {User }  from './user'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private user$ = new Subject<User>();

  constructor() { }
  login(email:string,password:string){
    const logincredentials = {email,password};
    return of (logincredentials);

  }
  logout(){
    //remove user from subject
    this.setUser(null);
    console.log('user logout successfully');
  }
  get user(){
   return  this.user$.asObservable();
  }

  register(user:any){
    this.setUser(user);
    console.log(`registered user success`,user);
    return of(user);

  }
  private setUser(user){
    this.user$.next(user);
  }
}
