export class optionGaugeEcharts {
    option = {
        title:{
            show:true,
            text: 'Source of user access to a site',
            x: 'center',
            textVerticalAlign: 'top',
            top:'0%'
        },
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },

        series: [{ 
                name: 'Rceita Bruta',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 4,
                radius: "90%",
                legendHoverLink: true,
                startAngle: 180,
                endAngle: 0,
                axisLine: {            
                    lineStyle: {       
                        color: [[0.25, 'red'], [0.75, 'yellow'], [1, 'green']],
                        width: 50,
                        shadowColor: 'auto',
                        shadowBlur: 10
                    }
                },
                axisLabel: {            
                    fontWeight: 'bolder',
                    color: 'black',
                    shadowColor: '#fff', 
                    shadowBlur: 10,
                    distance: 10,
                    fontSize: 18,
                    lineHeight: 20,
                    formatter: function(value){
                        return value +'%'
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'black',
                        shadowColor: 'black', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: 'black',
                        shadowColor: 'black', //默认透明
                        shadowBlur: 15
                    }
                },
                pointer: {        
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    width: 5,
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    show:false,
                    backgroundColor: 'rgba(30,144,255,0.8)',
                    borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff'
                    }
                },
                data: [{value: 10, name: '%'}]
            },
        ]
    };
/*
    setInterval(function() {
       this.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
       this.option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
       this.option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
       this.option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
       myChart.setOption(option, true);
    }, 2000);
    */
   setOption(option:any)        {
        this.option = option;
    }
    getOption(){
        return this.option;
    }
    setData(data:any,index:number){
        this.option.series[index].data = data;
    }
}