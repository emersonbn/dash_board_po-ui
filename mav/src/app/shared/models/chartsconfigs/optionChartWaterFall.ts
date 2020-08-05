import * as Highcharts from 'highcharts';

export class optionChartWaterFall {
    option = {
        chart: {
            type: 'waterfall'
        },

        title: {
            text: 'DRE'
        },

        xAxis: {
            type: 'category'
        },
        plotOptions: {
            series: {
                pointWidth: 53
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [
            {
                color: Highcharts.getOptions().colors[3],
                data: [{
                            name: 'Receita Liquida',
                            y:  0,
                            percentage: 0,
                        },
                        {
                            name: 'Custo Variavel',
                            y: -0,
                            percentage: 0,
                            isIntermediateSum: false
                        },
          
                ],
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    formatter: function () {
                        if(this.y < 0){
                            return Highcharts.numberFormat((this.y * -1) / 1000, 0, ',') + 'M <br>' + Highcharts.numberFormat(this.percentage, 0, ',')+"%";	
                        }else{
                            return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'M <br>'+ Highcharts.numberFormat(this.percentage, 0, ',')+"%";		
                        }
                    },
                    style: {
                        fontWeight: 'bold',
                        color:'black',
                    }
                }
            },
            {
                color: Highcharts.getOptions().colors[3],
                data: [
                        {
                          name: 'Margem Contribuição',
                          y: 0,
                          percentage: 0,
                        },
                        {
                            name: 'Custo Fixos',
                            y: -0,
                            percentage: 0,
                        }],
                    dataLabels: {
                        enabled: true,
                        align: 'center',
                        formatter: function () {
                            if(this.y < 0){
                                return Highcharts.numberFormat((this.y * -1) / 1000, 0, ',') + 'M <br>  <span style="text-align:center;"> ' + Highcharts.numberFormat(this.percentage, 0, ',')+"%</span>";	
                            }else{
                                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'M <br>   <span style="text-align:center;">'+ Highcharts.numberFormat(this.percentage, 0, ',')+"% </span>";		
                            }
                        },
                        style: {
                            fontWeight: 'bold',
                            color:'black'
                        }
                    },
                    pointPadding: 0
              },
            {
                color: Highcharts.getOptions().colors[3],
                data: [
                    {
                        name: 'EBITDA',
                        y: 0,
                        percentage: 0,
                        
                    }],
                dataLabels: {
                  enabled: true,
                  align: 'center',
                  formatter: function () {
                        if(this.y < 0){
                            return Highcharts.numberFormat((this.y * -1) / 1000, 0, ',') + 'M <br>' + Highcharts.numberFormat(this.percentage, 0, ',')+"%";	
                        }else{
                            return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'M <br>'+ Highcharts.numberFormat(this.percentage, 0, ',')+"%";		
                        }
                    },
                  style: {
                        fontWeight: 'bold',
                        color:'black'
                  }
                },
               pointPadding: 0
              },
            {
           color: Highcharts.getOptions().colors[3],
           data: [
                    {
                        name: 'Resultado Liquido',
                        y: 0,
                        percentage: 0,
                    }
                ],  
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    formatter: function () {
                        if(this.y < 0){
                            return Highcharts.numberFormat((this.y * -1) / 1000, 0, ',') + 'M <br>' + Highcharts.numberFormat(this.percentage, 0, ',')+"%";	
                        }else{
                            return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'M <br>'+ Highcharts.numberFormat(this.percentage, 0, ',')+"%";		
                        }
                    },
                    style: {
                        fontWeight: 'bold',
                        color:'black'
                    }
                },
                pointPadding: 0
            }]
        }
}