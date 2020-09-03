import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface User{
email:string,
fullname:string,
password:string
}

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
  get user(){
   return  this.user$.asObservable();
  }

  register(user:any){
    this.user$.next(user);
    return of(user);

  }
}
