import { Component, OnInit, Input } from '@angular/core';

import { PoWidgetModule, PoLoadingModule } from '@po-ui/ng-components';
import { KPI } from '../../../../shared/models/chartsconfigs/kpi';
//import { optionGauge } from '../../../../shared/models/chartsconfigs/optionsGauge';
//import { optionGauge2 } from '../../../../shared/models/chartsconfigs/optionsGauge2';
//import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoSelectOption, PoProgressModule,   } from '@po-ui/ng-components';

@Component({
  selector: 'app-kpi',
  //templateUrl: './kpi.component.html',
  template: `
  <po-widget  *ngIf="kpi.id != ' '"  p-height="300" p-title="Total Mês">
    <div class="po-font-title po-text-center">{{kpi.Label}}</div>
    <div class="po-font-subtitle po-text-center">Realizado:{{ kpi.Real | currency:'BRL':true }}
        <span class="po-font-text-smaller po-text-center">{{ kpi.Variacao | number }}% </span>
    </div>
     <div class="po-font-text po-text-center">%-Realizado:{{ kpi.PercRealizado }}</div>
  </po-widget>
  <po-widget *ngIf="kpi.id == ' '"  p-height="300" p-title="Total Mês">
    <po-progress p-text="Loding data...." p-indeterminate="true">
    </po-progress>
    
  </po-widget>
  `,
  styleUrls: ['./kpi.component.sass']
})
export class KpiComponent implements OnInit {
  @Input() kpi: KPI;
  @Input() loading: boolean;

  constructor() {
    console.log("Constructor....")
    this.loading = true;
   // if (!this.kpi) {
      this.kpi = {
        id: ' ',
        Realizado: 0,
        Orcado: 0,
        Real: 0,
        Variacao: 0,
        PercRealizado: 0,
        Label: ' '
      };
    //}
  }



  ngOnInit(): void {
    //pre: this.kpi = this.kpi;
    //pre: this.loading = this.loading;
    //this.getKpi();
  }

  getKpi(): any {
    console.log("KPI.component getKPI()")
  }

}
