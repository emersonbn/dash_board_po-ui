export class optionGauge2 {
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
                },
        },

        // the value axis
        yAxis: [{
                labels: {
                    enabled: true,
                    distance: -20,
                     style: {
                        fontSize: '12px',
                        color:'black',
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
            },{
                labels: {
                    enabled: true,
                    distance: 15,
                     style: {
                        fontSize: '12px',
                        color: 'blue',
                        fontWeight: 'bold'
                    },
                    formatter: function() {
                       
                        return this.value+"%";
                    },
                },
                tickPositions: [50,75,100,125,150],
                //minorTickInterval: 'auto',
                minorTickPosition: 'inside',
                min: 50,
                max: 150,
                plotBands: [{
                    from: 75,
                    to: 90,
                    color: 'red',//'rgb(192, 0, 0)', // red
                    //thickness: '50%'
                }, {
                    from: 90,
                    to: 140,
                    color: 'yellow',//'rgb(255, 192, 0)', // yellow
                    //thickness: '50%'
                }, {
                    from: 140,
                    to: 150,
                    color: 'rgb(155, 187, 89)', // green
                    //thickness: '50%'
                }]        
            }],
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            //legend: {
                //labelFormatter: function() {
                //return '<span style="text-weight:bold;color:' + this.userOptions.color + '">' + this.name + '</span>';
                //},
                //symbolWidth: 0
            //},
            series: [{
                name: '% Periodo',
                color:'black',
                data: [0],
                showInlegend: true,
                tooltip: {
                    valueSuffix: '% '
                },
                overshoot: 5,
                dial: {
                    baseLength: '0%',
                    backgroundColor: 'black',
                    baseWidth: 10,
                    radius: '85%',
                    rearLength: '0%',
                    topWidth: 1
                },
                yAxis:0
            },{
                name: '% Realizado',
                data: [0],
                color:'blue',
                showInlegend: true,
                tooltip: {
                    valueSuffix: '% '
                },
                overshoot: 5,
                dial: {
                    baseLength: '0%',
                    backgroundColor: 'blue',
                    baseWidth: 10,
                    radius: '100%',
                    rearLength: '0%',
                    topWidth: 1
                },
                yAxis:1
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