import * as Highcharts from 'highcharts';

export class optionChartAnoMes{
    option = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ano e mês anterior x Ano mês atual '
        },
        subtitle: {
            text: 'Realizado-Ano0 x Realizado-Ano1 x Previsto-Ano1'
        },
        xAxis: {
           categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
            //crosshair: true
        },
        plotOptions: {
            
        },
        yAxis: [
        {
             title: {
                text: '%',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            }
        },{ 
            title: { text:'R$'},
            opposite: true, gridLineWidth: 0
          }
        ],
        exporting: {
               enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{name:"Realizado-Ano0",data:[0,0,0,0,0,0,0,0,0,0,0,0]},
                 {name:"Previsto-Ano1",data:[0,0,0,0,0,0,0,0,0,0,0,0]},
                 {name:"Realizado-Ano1",data:[0,0,0,0,0,0,0,0,0,0,0,0]},
                 {name:"Percentual-Ano1",data:[0,0,0,0,0,0,0,0,0,0,0,0]}
                 
                ]
    };


    setUpdate(property:any,value:any){
        this.option[property] = value;
    }
    getOption(){
        return this.option;
    }
}