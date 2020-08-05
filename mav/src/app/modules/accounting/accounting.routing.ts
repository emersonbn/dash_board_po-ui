import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingHomeComponent } from './pages/home/accounting.home.component';
import { Painel1Component } from './pages/painel1/painel1.component';


const accountingRoutes: Routes = [
  {path: '', component: AccountingHomeComponent, 
    children:[
      { 
        path: 'painel1', 
        component: Painel1Component,
      },
      {
        path: 'painel2', 
        component: Painel1Component, 
      },    
    ]
  },
  
  
    
  
  
];

@NgModule({
  imports: [RouterModule.forChild(accountingRoutes)],
  exports: [RouterModule],
  providers:[]
})
export class AccountingRoutingModule { }
