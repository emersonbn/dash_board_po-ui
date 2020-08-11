import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule,PoNavbarModule  } from '@po-ui/ng-components';
import { LoginComponent } from './shared/login/login.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
//import { HomeComponent } from './modules/accounting/pages/home/home.component';
//import { Painel1Component } from './modules/accounting/pages/painel1/painel1.component';
//import { UsersComponent } from './shared/models/users/users';
import { AuthenticationService } from './core/authentication/authentication.service';
//import { AccountingModule } from './modules/accounting/accounting.module';
import { HomeComponent } from './shared/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AccountingModule } from './modules/accounting/accounting.module';
//import { AccountingRoutingModule } from './modules/accounting/accounting.routing';
//import { HomeModule } from './shared/home/home.module';
//import { HomeRoutingModule } from './shared/home/home.routing';
//import { LOCALE_ID } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import localeExtraPT from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { KpiComponent } from './shared/kpi/kpi.component';
//import { HighchartsChartModule } from 'highcharts-angular';
import { NgxEchartsModule } from 'ngx-echarts';

registerLocaleData(localePT, 'pt', localeExtraPT)



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //HomeComponent,
    //Painel1Component,
    //UsersComponent,
    HomeComponent,
    KpiComponent,
    //AccountingModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PoModule,
    PoTemplatesModule,
    PoNavbarModule,
    //HighchartsChartModule,
    ChartModule,
    //HomeModule,
    //HomeRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    AppRoutingModule,
    //AccountingModule,
    //sAccountingRoutingModule,
    
  ],
  providers: [AuthenticationService,PoModule,PoTemplatesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
