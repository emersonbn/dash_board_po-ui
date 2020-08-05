import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//import { PoDialogService, PoI18nService } from '@po-ui/ng-components';
import { PoPageLoginModule, PoPageLogin } from '@po-ui/ng-templates';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Router } from '@angular/router';
//import { Users } from '../models/users/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  //private user : Users;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData: PoPageLogin){
    console.log('onSubmit>'+formData);
    try{
      console.log('onSubmit>Try');
      const result =  this.authenticationService.login(formData);
      this.router.navigate(['/']);
    } catch(error){
      console.error(error);
    }
  };

}
