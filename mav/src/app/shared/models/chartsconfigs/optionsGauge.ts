export class optionGauge {
   option = {
        chart:{
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: { text: 'No Title' },
        pane:{
          startAngle: -90,
          endAngle: 90,
          background: null
        },
        plotOptions: {
            gauge: {
              dataLabels: {
                enabled: false
               },
              dial: {
                baseLength: '0%',
                baseWidth: 10,
                radius: '100%',
                rearLength: '0%',
                topWidth: 1
              }
            }
        },
                 
          // the value axis
          yAxis: {
            labels: {
              enabled: true,
              distance: 18,
               style: {
                fontSize: '14px',
                color: 'black',
                fontWeight: 'bold'
              },
              formatter: function() {
                             
                              return this.value+"%";
                          },
            },
            //tickPositions: [0,20,40,50,60,80,100],
            minorTickInterval: 'auto',
            minorTickPosition: 'inside',
            min: 0,
            max: 100,
            plotBands: [{
              from: 0,
              to: 25,
              color: 'red', // red
              thickness: '50%'
            }, {
              from: 25,
              to: 75,
              color: 'yellow', // yellow
              thickness: '50%'
            }, {
              from: 75,
              to: 100,
              color: 'green', // green
              thickness: '50%'
            }]        
          },
          exporting: {
            enabled: false
          },
          credits: {
            enabled: false
          },
    
          series: [{
            type: 'gauge',
            name: '%',
            data: [0],
            //showInlegend: true
          }]
        };


    setOption(option:any)        {
        this.option = option;
    }
    getOption(){
        return this.option;
    }
    setTitle(title:string){
        this.option.title.text = title;
    }
    setData(data:any,index:number){
        this.option.series[index].data = data;
    }
}