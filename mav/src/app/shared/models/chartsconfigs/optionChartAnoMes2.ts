export class optionChartAnoMes2 {
    option =  {
			
        chart: {
            type: 'line'
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
        yAxis: [
            
            {
                type: 'logarithmic',
                title: {
                    text: '%'
                }
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
                 {name:"Realizado-Ano1",data:[0,0,0,0,0,0,0,0,0,0,0,0]}//,
                 //{name:"Percentual-Ano1",data:[0,0,0,0,0,0,0,0,0,0,0,0]}
                 
                ]
    }

    setUpdate(property:any,value:any){
        this.option[property] = value;
    }
    getOption(){
        return this.option;
    }
}