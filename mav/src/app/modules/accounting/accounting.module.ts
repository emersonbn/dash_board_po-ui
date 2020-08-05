import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { AccountingHomeComponent } from './pages/home/accounting.home.component';
import { Painel1Component } from './pages/painel1/painel1.component';
import { AccountingRoutingModule } from './accounting.routing';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { KpiComponent } from './pages/kpi/kpi.component';
import { ApirestService } from 'src/app/shared/services/apirest.service';


@NgModule({
    imports:[
        CommonModule,
        PoModule,
        PoTemplatesModule,
        ChartModule,
        HighchartsChartModule,
        AccountingRoutingModule
    ],
    exports:[
      
    ],
    declarations:[
      AccountingHomeComponent,
      Painel1Component,
      KpiComponent,
       
    ],

    providers:[
      { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] },
      ApirestService
    ],
})

export class AccountingModule { }