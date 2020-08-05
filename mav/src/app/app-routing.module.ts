import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';



const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accounting',
    loadChildren: () => import('./modules/accounting/accounting.module').then(m => m.AccountingModule), //outlet:'home'
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
