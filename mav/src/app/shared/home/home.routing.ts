import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AccountingHomeComponent } from '../../modules/accounting/accounting.module';
import { AccountingModule} from '../../modules/accounting/accounting.module';
import { HomeComponent } from './home.component';
import { Painel1Component } from 'src/app/modules/accounting/pages/painel1/painel1.component';
import { LoginComponent } from '../login/login.component';



const homeRoutes: Routes = [
  {path:'',component:HomeComponent},
 // {path:'accounting', loadChildren: () => import('../../modules/accounting/accounting.module').then(m => m.AccountingModule), outlet:'home'},
  //{path:'login',component:LoginComponent,outlet:'home'},
  //{path: 'accounting', loadChildren: () => import('../../modules/accounting/accounting.module').then(m => m.AccountingModule), outlet:'home'},
  //{path:'home', component:HomeComponent, children:[
    //{path:'login',component:LoginComponent,outlet:'home'}
  //]},  //{path: 'accounting', loadChildren: '..', outlet:'home',},
  //{path: 'accounting', loadChildren: () => import('../../modules/accounting/accounting.module').then(m => m.AccountingModule), outlet:'home',
  //children:[
    //{path: 'painel1', component: Painel1Component, outlet:'home'},
    //{path: 'painel2', component: Painel1Component, outlet:'home'}
  //]

//}
 
  
  
   
  // {path:'**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }