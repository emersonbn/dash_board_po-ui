import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Result } from '../../../../shared/models/chartsconfigs/result';
import { PoWidgetModule } from '@po-ui/ng-components';
import { KPI } from '../../../../shared/models/chartsconfigs/kpi';
import { optionGauge } from '../../../../shared/models/chartsconfigs/optionsGauge';

import { optionGaugeEcharts } from '../../../../shared/models/chartsconfigs/optionsGaugeEcharts';

import { optionGauge2 } from '../../../../shared/models/chartsconfigs/optionsGauge2';
import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoSelectOption, PoProgressModule } from '@po-ui/ng-components';

import { optionChartAnoMes } from '../../../../shared/models/chartsconfigs/optionChartAnoMes';
import { optionChartAnoMes2 } from '../../../../shared/models/chartsconfigs/optionChartAnoMes2';
import { Chart } from 'angular-highcharts';
import { PoFieldModule, PoDatepickerComponent } from '@po-ui/ng-components';

import { ApirestService } from '../../../../shared/services/apirest.service';

import * as Highcharts from "highcharts";

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-painel1',
  templateUrl: './painel1.component.html',
  styleUrls: ['./painel1.component.sass']
})
export class Painel1Component implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('charts') public chartEl: ElementRef<any>;
  @Output() setUpdate = new EventEmitter();

  //result = {} as Result;
  //results = [];
  loadKpis: Promise<boolean>;
  kpi = {} as KPI;
  kpis: any;
  resultYear: any [];
  loadingKpi : boolean;
  dataInicio: any;
  dataFinal: any;
  typeAmount: string;
  data: number[];
  //chartLine1: Chart;
  jsonObj: any;
  //chartGauge = OutChartGaugeComponent;
  gaugerec = [0]
  updateD: boolean = false;
  gaugeOptions:  any = new optionGauge().getOption();
  gaugeOptions2: any = new optionGauge().getOption();
  gaugeOptions3: any = new optionGauge2().getOption();
  gaugeOptionsEcharts: any = new optionGaugeEcharts().getOption();
  chartAnoMesOptions1: any = new optionChartAnoMes().getOption();
  chartAnoMesOptions2 = new optionChartAnoMes().getOption();
  chartAnoMesOptions3 = new optionChartAnoMes2().getOption();
  
  updataCharts = true;
  chartCallback;
  chartConstructor = "chart";
  chartGauge1: Chart;
  chartGauge2: Chart;
  chartGauge3: Chart;
  chartAnoMes1: Chart;
  chartAnoMes2;
  chartAnoMes3;
  chart1: Chart;
  chart2: Chart;
  
  kpiRecbruto: KPI;
  kpiRecliquido: KPI;
  kpiMCL : KPI;
  kpiPercMCL : KPI;

  title = "app";
  //chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  
 
  constructor(private apiService: ApirestService) {
    const self = this;
    // saving chart reference using chart callback
    self.chartCallback = chart => {
      //self.chart = chart;
      console.log('chart.renderTo.id >' + chart.renderTo.id);
      /*
      if (chart.renderTo.id == 'chartGauge') {
        self.chartGauge1 = chart;
      }
      if (chart.renderTo.id == 'chartGauge2') {
        self.chartGauge2 = chart;
      }
      if (chart.renderTo.id == 'chartGauge3') {
        self.chartGauge3 = chart;
      }
      */
    };
  }

  //highcharts = Highcharts;
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    //throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    this.loadingKpi = true;
    this.kpiRecbruto  = {"id":" ","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"};
    this.kpiRecliquido = {"id":" ","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"};
    this.kpiMCL = {"id":" ","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"};
    this.kpiPercMCL = {"id":" ","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"};
    this.kpis = [];
    this.resultYear = [];
   
    this.gaugeOptions.title.text ='Receita Bruta';
    this.gaugeOptions2.title.text ='Receita Líquida';
    this.gaugeOptions3.title.text ='%Margem Contribuição';
    this.chartGauge1 = new Chart(this.gaugeOptions);
    this.chartGauge1.removePoint(1);
    this.chartGauge2 = new Chart(this.gaugeOptions2);
    this.chartGauge2.removePoint(1);
    this.chartGauge3 = new Chart(this.gaugeOptions3);
    this.chartGauge3.removePoint(1);
    this.chartAnoMes1 = new Chart(this.chartAnoMesOptions1 );
    // this.chart2.addPoint(this.apiService.getKpiGauge('recbruto','real'));
    
    
    //this.chartGauge1.ref.showLoading();
    this.getKpis();
    //this.loadKpis = true;
  }

  // Demonstrate chart instance
  /*
  logChartInstance(chart: any) {
    console.log('Chart instance: ', chart);
    if (chart.renderTo.id == 'chartGauge') {
      this.chartGauge1 = chart;
      this.chartGauge1.ref.showLoading();
    }
    if (chart.renderTo.id == 'chartGauge2') {
      this.chartGauge2 = chart;
      this.chartGauge2.ref.showLoading();
    }
    if (chart.renderTo.id == 'chartGauge3') {
      this.chartGauge3 = chart;
      this.chartGauge3.ref.showLoading();
    }

    if (chart.renderTo.id == 'chartAnoMes') {
      this.chartAnoMes1 = chart;
    }
    if (chart.renderTo.id == 'chartAnoMes2') {
      this.chartAnoMes2 = chart;
    }
    if (chart.renderTo.id == 'chartAnoMes3') {
      this.chartAnoMes3 = chart;
    }

  }
  */
  getAnoMes() {
    //this.chartAnoMes1.showLoading();
    this.chartAnoMes1.ref.showLoading();
    //this.chartAnoMes2.showLoading();
    //this.chartAnoMes3.showLoading();
    //let data = {}; 
    //let newOptions = new optionGauge();
    //newOptions.setTitle('Receita Líquida');
    //newOptions.setData([90], 0);
    //this.gaugeOptions2 = newOptions.getOption();
      if(this.resultYear.length > 0){
        //this.chartAnoMes1.ref.series[0].update();
        console.log(this.chartAnoMes1.ref.series[0]);
        console.log(this.resultYear[0]);
        //this.chartAnoMes1.ref.series[0].setData(this.resultYear[0]);
        this.chartAnoMes1.ref.series[0].data[0] = this.resultYear[0][0];
        this.chartAnoMes1.ref.redraw();
      }
      
    this.chartAnoMes1.ref.hideLoading();
    

  }

  setUpdaChar() {
    const self = this;
    self.chartGauge1.ref.showLoading();
    self.chartGauge2.ref.showLoading();
    self.chartGauge3.ref.showLoading();
    this.chartAnoMes1.ref.showLoading();
    setTimeout(() => {
      self.chartGauge1.ref.hideLoading();
      self.chartGauge2.ref.hideLoading();
      self.chartGauge3.ref.hideLoading();
      self.chartGauge1.ref.series[0].setData([this.kpiRecbruto.PercRealizado]);
      self.chartGauge2.ref.series[0].setData([this.kpiRecliquido.PercRealizado]);
      self.chartGauge3.ref.series[0].setData([this.kpiPercMCL.Realizado]);
      self.chartGauge3.ref.series[1].setData([this.kpiPercMCL.PercRealizado]);
      //self.chartGauge1.ref.redraw();
      this.chartAnoMes1.ref.hideLoading();
    }, 2000);
  }

  updateChartYearMonth(idKPI: string, datas: any, chart: any) {

    //chart.showLoading();
    for (let i = 0; i < chart.series.length; i++) {
      chart.series[i].update(datas[idKPI][i]);
    }
    chart.hideLoading();
  }


  getKpis() {
   // this.kpis = this.apiService.loadKpis();
    
    this.apiService.getKpis().subscribe(kpis=>{
      this.kpis = kpis;
      if(typeof(kpis) != 'undefined'){
        this.loadingKpi = false;
        this.kpiRecbruto = this.kpis.filter(e => { return e.id == 'Recbruto' })[0];
        this.kpiRecliquido = this.kpis.filter(e => { return e.id == 'RecLiquido' })[0];
        this.kpiMCL = this.kpis.filter(e => { return e.id == 'MCL' })[0];
        this.kpiPercMCL = this.kpis.filter(e => { return e.id == 'PercMCL' })[0];
        this.setUpdaChar();
      }
    });

    this.apiService.getResultYear('RecBruto').subscribe(resultYear=>{
      if(typeof(resultYear) != 'undefined'){
          this.resultYear.push(resultYear);
      }
      
    })
    
    




    //this.loadKpis = Promise.resolve(true); 
  }
  getKpiGauge(id: string, typeValue: string) {
    if (this.kpis.length > 0) {
      return this.kpis.filter(e => { return e.id == id })[0][typeValue];
    }
  }

}
