import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/users/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  login(user:any){
    return new Promise((resolve)=>{
      //window.localStorage.setItem('token', 'my-token');
      user = {
        id: 1,
        email: 'teste@teste.com',
        password: 'teste',
        firstName: 'teste',
        lastName: 'teste',
      //  role: 'User',
        token:'testeteste'
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
        
    });
  }
  logout() {
    return new Promise((resolve)=>{
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    })
    // remove user from local storage to log user out
    
  }
}
