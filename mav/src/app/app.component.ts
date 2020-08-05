import { Component } from '@angular/core';

import { MenuService } from './shared/services/menu.service';
import { PoMenuItem, PoNavbarItem } from '@po-ui/ng-components';
//import { PoModule, PoMenuHeaderTemplateDirective } from '@po-ui/ng-components';
//import { PoTemplatesModule , } from '@po-ui/ng-templates';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './core/authentication/authentication.service';
import { User } from './shared/models/users/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mav';
  currentUser: User;
  
  constructor(private MenuService: MenuService, private router: Router, private route: ActivatedRoute,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    console.log('currentUser:'+this.currentUser);
    /*
    this.currentUser = {
      id: 1,
      email: 'teste@teste.com',
      password: 'teste',
      firstName: 'teste',
      lastName: 'teste',
      //role: 'User',
      token:'testeteste'
    };
    */
  }
  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Contabilidade', action:this.navegateRoute.bind(this),/*link:'accounting',*/ icon: 'po-icon-chart-columns', shortLabel: 'Contab...',
    subItems: [
      { label: 'Painel1',  link:'/accounting/painel1' },
      { label: 'Painel2',  link:'/accounting/painel2' }
    ] },
    { label: 'Perfil', link: '/login', icon: 'po-icon po-icon-user', shortLabel: 'perfil',
      subItems:[
        { label: 'Logoff', action:this.logout.bind(this)}
      ]
   },
    //{ label: 'Paniel2', link: '/home', icon: 'po-icon-chart-area', shortLabel: 'Painel2' },
  ]
  itemsNavBar: Array<PoNavbarItem> =[
    {label:'Perfil',link:'/'},
    {label:'Admin',link:'/'},
  ]
  
  navegateRoute(is){
    if(is.link == 'accounting'){
      this.router.navigate(['/accounting'],{ relativeTo: this.route });
    }else{
      this.router.navigate(['../painel1'],{ relativeTo: this.route });
    }
    return true
  }
  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login'],{ relativeTo: this.route });
    return true
  }

}

