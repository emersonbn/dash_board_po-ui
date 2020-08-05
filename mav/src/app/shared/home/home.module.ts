import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

//import { AccountingHomeComponent } from './pages/home/accounting.home.component';
//import { Painel1Component } from './pages/painel1/painel1.component';
import { AccountingRoutingModule } from '../../modules/accounting/accounting.routing';
import { HomeRoutingModule } from './home.routing';




@NgModule({
    imports:[
        CommonModule,
  //      PoModule,
        PoTemplatesModule,
        //HomeRoutingModule,
    ],
    exports:[],
    declarations:[
    ],

    providers:[],
})

export class HomeModule { }