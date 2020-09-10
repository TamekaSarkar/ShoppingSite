import { Injectable } from '@angular/core';
import { of, Subject, throwError, EMPTY } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators'
import {User }  from './user'
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

interface UserDto {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private user$ = new Subject<User>();
  private apiUrl = '/api/auth/';
  constructor(private httpclient:HttpClient, private tokenstorage:TokenStorageService) { }
  login(email:string,password:string){
    const logincredentials = {email,password};
    return this.httpclient.post<UserDto>(`${this.apiUrl}login`,logincredentials).pipe
    (
      switchMap(({ user, token}) => {
        this.setUser(user);
        //this.tokenstorage.setToken(token);
       console.log(`user found`,user);
        return of(user);
      }),
      catchError(e => {
        console.log('login details could not verified!!Please try again',e);
        return throwError('login details could not verified!!Please try again');

      })

    );

  }
  logout(){
    //remove user from subject
    //remove token from local storage
    this.tokenstorage.removeToken();
    this.setUser(null);
    console.log('user logout successfully');
  }
  get user(){
   return  this.user$.asObservable();
  }

  register(userToSave:any){
   return this.httpclient.post<any>(`${this.apiUrl}register`,userToSave).pipe(
     switchMap(({user,token})=>{
       this.setUser(user);
       this.tokenstorage.setToken(token);
       console.log(`user registered success`,user);
       return of(user);
     }),
     catchError(e => {
        console.log('server error occured', e);
        return throwError('Registration failed');
     })
   )

  }

  findMe() {
    const token = this.tokenstorage.getToken();
    if (!token) {
      return EMPTY;
    }

    return this.httpclient.get<any>(`${this.apiUrl}findme`).pipe(
      switchMap(({ user }) => {
        this.setUser(user);
        console.log(`user found`, user);
        return of(user);
      }),
      catchError(e => {
        console.log(
          `Your login details could not be verified. Please try again`,
          e
        );
        return throwError(
          `Your login details could not be verified. Please try again`
        );
      })
    );
  }
  private setUser(user){
    this.user$.next(user);
  }
}
