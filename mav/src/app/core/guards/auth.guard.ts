import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authenticationService: AuthenticationService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      console.log('tokenAuthGuard>');
      const currentUser = this.authenticationService.currentUserValue;
      if(currentUser){
        return true;
      }
      /*
      const token = window.localStorage.getItem('token');
      console.log('tokenAuthGuard>'+token);
      if(token){
        console.log('accesse token true');
        return true;
      }else{
        console.log('accesse token false');
        this.router.navigate(['/login']);
        return false;
      }*/
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    
  }
  
}
