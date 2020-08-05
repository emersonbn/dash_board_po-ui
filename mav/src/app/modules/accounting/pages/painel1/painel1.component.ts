import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Result } from '../../../../shared/models/chartsconfigs/result';
import { PoWidgetModule } from '@po-ui/ng-components';
import { KPI } from '../../../../shared/models/chartsconfigs/kpi';
import { optionGauge } from '../../../../shared/models/chartsconfigs/optionsGauge';
import { optionGauge2 } from '../../../../shared/models/chartsconfigs/optionsGauge2';
import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoSelectOption, PoProgressModule } from '@po-ui/ng-components';

import { optionChartAnoMes } from '../../../../shared/models/chartsconfigs/optionChartAnoMes';
import { optionChartAnoMes2 } from '../../../../shared/models/chartsconfigs/optionChartAnoMes2';
import { Chart } from 'angular-highcharts';
import { KpiComponent } from '../kpi/kpi.component';

import { ApirestService } from '../../../../shared/services/apirest.service';

import * as Highcharts from "highcharts";

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
  gaugeOptions: any = new optionGauge().getOption();
  gaugeOptions2 = new optionGauge().getOption();
  gaugeOptions3 = new optionGauge2().getOption();
  chartAnoMesOptions1 = new optionChartAnoMes().getOption();
  chartAnoMesOptions2 = new optionChartAnoMes().getOption();
  chartAnoMesOptions3 = new optionChartAnoMes2().getOption();
  updataCharts = true;
  chartCallback;
  chartConstructor = "chart";
  chartGauge1;
  chartGauge2;
  chartGauge3;
  chartAnoMes1;
  chartAnoMes2;
  chartAnoMes3;
  chart1: Chart;
  chart2: Chart;
  kpiRecbruto: KPI;
  kpiRecliquido: KPI;

  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  //chartConstructor = "chart";
  //chartCallback;
  chartOptions = {
    series: [
      {
        data: [1, 2, 3, 6, 9]
      }
    ],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

  constructor(private apiService: ApirestService) {
    const self = this;
    // saving chart reference using chart callback
    self.chartCallback = chart => {
      //self.chart = chart;
      console.log('chart.renderTo.id >' + chart.renderTo.id);
      if (chart.renderTo.id == 'chartGauge') {
        self.chartGauge1 = chart;
      }
      if (chart.renderTo.id == 'chartGauge2') {
        self.chartGauge2 = chart;
      }
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
    //this.loadKpis = false;
    this.loadingKpi = true;
    //this.kpis = {"Vazio":{"id":"teste","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"}};
    this.kpiRecbruto  = {"id":" ","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"};
    this.kpiRecliquido = {"id":" ","Realizado":0,"Orcado":0,"Real":0,"Variacao":0,"PercRealizado":0,"Label":"Teste"};
    this.kpis = [];
    this.gaugerec = [0];
    this.chart1 = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: 'line',
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]
    });
    this.chart2 = new Chart(this.gaugeOptions);
    this.chart2.removePoint(0);
    // this.chart2.addPoint(this.apiService.getKpiGauge('recbruto','real'));
    this.getKpis();
    //this.loadKpis = true;
  }

  // Demonstrate chart instance
  logChartInstance(chart: any) {
    console.log('Chart instance: ', chart);
    if (chart.renderTo.id == 'chartGauge') {
      this.chartGauge1 = chart;
    }
    if (chart.renderTo.id == 'chartGauge2') {
      this.chartGauge2 = chart;
    }
    if (chart.renderTo.id == 'chartGauge3') {
      this.chartGauge3 = chart;
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
  getAnoMes() {
    this.chartAnoMes1.showLoading();
    this.chartAnoMes2.showLoading();
    this.chartAnoMes3.showLoading();
    let data = {}; //this.apiService.getValuesForSaldo(this.typeAmount);
    /*
      this.apiService.getAnoMes().subscribe(
      (res)=>{
        //console.log('this.chartEl.nativeElement'+this.chartEl.nativeElement);
        //this.chartEl.nativeElement.chartOptions.series[0]["data"] = [95];
        
        this.jsonObj = res;
        
        //this.chartAnoMes1.setData[];
      
        for (let idKPI in res) {
          if(idKPI == 'RecBruto'){
            this.updateChartYearMonth(idKPI,res,this.chartAnoMes1);
          }
          if(idKPI == 'RecLiquida'){
            this.updateChartYearMonth(idKPI,res,this.chartAnoMes2);
          }
          if(idKPI == 'MCL'){
            this.updateChartYearMonth(idKPI,res,this.chartAnoMes3);
          }
  
        }
       
      })
      */
    this.chartGauge1.showLoading();
    setTimeout(() => {
      this.chartGauge1.hideLoading();
      //this.chartGauge1.setData();
      this.chartGauge1.series[0].setData([80])
      this.chartGauge1.updataCharts = true;
    }, 2000);

    let newOptions = new optionGauge();
    //.setTitle('Receita Liquida').getOption();
    newOptions.setTitle('Receita Líquida');
    newOptions.setData([90], 0);
    this.gaugeOptions2 = newOptions.getOption();
    //this.gaugerec = [90];
    //this.updateD = true;
    //this.setUpdaChar(this.gaugerec);
    //this.setUpdate.emit(this.gaugerec);

  }

  setUpdaChar() {
    const self = this;
    //this.getAnoMes();
    self.chart2.ref.showLoading()
    //self.chartGauge1.showLoading();
    setTimeout(() => {
      self.chart2.ref.hideLoading();
      // this.chartGauge1.hideLoading();
      //this.chartGauge1.setData();
      self.chart2.ref.series[0].setData([30]);

      self.chart2.ref.redraw();
    }, 2000);
    //console.log(this.apiService.getKpiGauge('Recbruto','Real'));


  }

  updateChartYearMonth(idKPI: string, datas: any, chart: any) {

    //chart.showLoading();
    for (let i = 0; i < chart.series.length; i++) {
      chart.series[i].update(datas[idKPI][i]);
    }
    chart.hideLoading();
  }

  addSerie() {
    this.chart1.addSeries({
      type: 'line',
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    }, true, true);
  }

  getKpis() {
   // this.kpis = this.apiService.loadKpis();
    
    this.apiService.getKpis().subscribe(kpis=>{
      this.kpis = kpis;
      if(typeof(kpis) != 'undefined'){
        this.loadingKpi = false;
        this.kpiRecbruto = this.kpis.filter(e => { return e.id == 'Recbruto' })[0];
        this.kpiRecliquido = this.kpis.filter(e => { return e.id == 'RecLiquido' })[0];
      }
    });
    
    




    //this.loadKpis = Promise.resolve(true); 
  }
  getKpiGauge(id: string, typeValue: string) {
    if (this.kpis.length > 0) {
      return this.kpis.filter(e => { return e.id == id })[0][typeValue];
    }
  }

}
