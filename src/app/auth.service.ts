import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators'
import {User }  from './user'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private user$ = new Subject<User>();
  private apiUrl = '/api/auth/';
  constructor(private httpclient:HttpClient) { }
  login(email:string,password:string){
    const logincredentials = {email,password};
    return this.httpclient.post<User>(`${this.apiUrl}login`,logincredentials).pipe
    (
      switchMap(foundUser => {
        this.setUser(foundUser);
      // this.tokenstorage.setToken(token);
       console.log(`user found`,foundUser);
        return of(foundUser);
      }),
      catchError(e => {
        console.log('login details could not verified!!Please try again',e);
        return throwError('login details could not verified!!Please try again');

      })

    );

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
   return this.httpclient.post(`${this.apiUrl}register`,user).pipe(
     switchMap(savedUser=>{
       this.setUser(savedUser);
       console.log(`user registered success`,savedUser);
       return of(savedUser);
     }),
     catchError(e => {
        console.log('server error occured', e);
        return throwError('Registration failed');
     })
   )

  }
  private setUser(user){
    this.user$.next(user);
  }
}
