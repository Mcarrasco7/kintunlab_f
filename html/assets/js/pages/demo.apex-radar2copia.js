var optionsv5 = {
    /*series: [{
        name: "SAMPLE A",
        data: [
            [-10, -5],
            [21.7, 2],
            [-25.4, 3],
            [19, 2],
            [10.9, 1],
            [-13.6, -3.2],
            [10.9, 7.4],
            [10.9, -0]
        ]
    }, {
        name: "SAMPLE B",
        data: [
            [36.4, 13.4],
            [1.7, 11],
            [-5.4, 8],
            [9, 17],
            [1.9, 4],
            [-3.6, 12.2],
            [1.9, 14.4],
            [-1.9, -9],
            [-1.9, 13.2]
        ]
    }]*/
    series: [{
        name: "Emprendedor",
        data: [
            [valrandom(-100, 100), valrandom(-100, 100)]
        ]
    }],
    chart: {
        height: '100%',
        type: 'scatter',
        zoom: {
            enabled: true,
            type: 'xy'
        }
    },
    xaxis: {
        tickAmount: 10,
        labels: {
            formatter: function(val) {
                return parseFloat(val).toFixed(1)
            }
        },
        min: -100,
        max: 100,
        title: {
            text: "Valor en X",
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        min: -100,
        max: 100

    },
    annotations: {
        yaxis: [{
            y: 0,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396'
                }
            }
        }],
        xaxis: [{
            x: 0,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396'
                }
            }
        }]
    }
};

var optionsv52 = {
    /*series: [{
        name: "SAMPLE A",
        data: [
            [-10, -5],
            [21.7, 2],
            [-25.4, 3],
            [19, 2],
            [10.9, 1],
            [-13.6, -3.2],
            [10.9, 7.4],
            [10.9, -0]
        ]
    }, {
        name: "SAMPLE B",
        data: [
            [36.4, 13.4],
            [1.7, 11],
            [-5.4, 8],
            [9, 17],
            [1.9, 4],
            [-3.6, 12.2],
            [1.9, 14.4],
            [-1.9, -9],
            [-1.9, 13.2]
        ]
    }]*/
    series: [{
        name: "Emprendedor",
        data: [
            [valrandom(-100, 100), valrandom(-100, 100)]
        ]
    }],
    chart: {
        height: '100%',
        type: 'scatter',
        zoom: {
            enabled: true,
            type: 'xy'
        }
    },
    xaxis: {
        tickAmount: 10,
        labels: {
            formatter: function(val) {
                return parseFloat(val).toFixed(1)
            }
        },
        min: -100,
        max: 100,
        title: {
            text: "Valor en X",
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        min: -100,
        max: 100

    },
    annotations: {
        yaxis: [{
            y: 0,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396'
                }
            }
        }],
        xaxis: [{
            x: 0,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396'
                }
            }
        }]
    }
};


/*var chartv2 = new ApexCharts(document.querySelector("#chartv188757073"), optionsv5);

chartv2.render();


var chartv3 = new ApexCharts(document.querySelector("#chartv1758394734"), optionsv52);

chartv3.render();
*/







/*

$(function() {

    var data1=valrandom(-100, 100);
    var data2=-valrandom(-100, 100);

    var resultadocuadrante=calculodecuadrante(data1,data2);
    var data = [
        { x: data1, y:  data2}
    ]

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chartv188757073',
            defaultSeriesType: 'scatter',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
        },
        credits: { enabled: false },
        title: {
            text: '',
            enabled: false
        },
        legend: {
            enabled: true
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            },
            enabled: true
        },
        plotOptions: {
            series: {
                shadow: true,
            }
        },
        xAxis: {
            title: {
                text: 'X Axis Title'
            },
            min: -100,
            max: 100,
            tickInterval: 100,
            tickLength: 0,
            minorTickLength: 0,
            gridLineWidth: 1,
            showLastLabel: true,
            showFirstLabel: false,
            lineColor: '#ccc',
            lineWidth: 1
        },

        yAxis: {
            title: {
                text: 'Y Axis<br/>Title',
                rotation: 0,
                margin: 25,
            },
            min: -100,
            max: 100,
            tickInterval: 100,
            tickLength: 3,
            minorTickLength: 0,
            lineColor: '#ccc',
            lineWidth: 1
        },
        series: [{
            color: '#d600ff',
            name:'Emprendedor',
            showInLegend: false,
            data: data
        }]
    }, function(chart) { // on complete

        var width = chart.plotBox.width / 2.0;
        var height = chart.plotBox.height / 2.0 + 1;


        $legend2 = $('#divchart188757073');

        $legend2.find(".leyenda").append('<div class="item"><div class="serieName rounded" style="background-color:'+resultadocuadrante[2]+'"> <p class="text-justify text-wrap p-2">'+resultadocuadrante[1]+'</p></div></div>');

        chart.renderer.rect(chart.plotBox.x,
                chart.plotBox.y, width, height, 1)
            .attr({
                fill: 'rgb(70,130,180,0.4)',
                zIndex: 0
            })
            .add();

        chart.renderer.rect(chart.plotBox.x + width,
                chart.plotBox.y, width, height, 1)
            .attr({
                fill: 'rgb(0,255,127,0.4)',
                zIndex: 0
            })
            .add();

        chart.renderer.rect(chart.plotBox.x,
                chart.plotBox.y + height, width, height, 1)
            .attr({
                fill: "rgb(139, 0, 0,0.4)",
                zIndex: 0,
                value: "dasdasdsa"
            })
            .add();

        chart.renderer.rect(chart.plotBox.x + width,
                chart.plotBox.y + height, width, height, 1)
            .attr({
                fill: 'rgb(255,255,0,0.4)',
                zIndex: 0
            })
            .add();

    });

    chart.tooltip.hide();



    var data3=valrandom(-100, 100);
    var data4=-valrandom(-100, 100);

    var resultadocuadrante2=calculodecuadrante(data3,data4);


    var data = [
        { x: data3, y: data4 }
    ]

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chartv1758394734',
            defaultSeriesType: 'scatter',
         
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
        },
        credits: { enabled: false },
        title: {
            text: null
        },
        legend: {
            enabled: true
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            },
            enabled: true
        },
        plotOptions: {
            series: {
                shadow: false,
            }
        },
        xAxis: {
            title: {
                text: 'X Axis Title'
            },
            min: -100,
            max: 100,
            tickInterval: 100,
            tickLength: 0,
            minorTickLength: 0,
            gridLineWidth: 1,
            showLastLabel: true,
            showFirstLabel: false,
            lineColor: '#ccc',
            lineWidth: 1
        },

        yAxis: {
            title: {
                text: 'Y Axis<br/>Title',
                rotation: 0,
                margin: 25,
            },
            min: -100,
            max: 100,
            tickInterval: 100,
            tickLength: 3,
            minorTickLength: 0,
            lineColor: '#ccc',
            lineWidth: 1
        },
        series: [{
            color: '#d600ff',
            name:'Emprendedor',
            showInLegend: false,
            data: data
        }]
    }, function(chart) { // on complete

        var width = chart.plotBox.width / 2.0;
        var height = chart.plotBox.height / 2.0 + 1;

        
        $legend = $('#divchart1758394734');
        

        $legend.find(".leyenda").append('<div class="item"><div class="serieName rounded" style="background-color:'+resultadocuadrante2[2]+'"> <p class="text-justify text-wrap p-2">'+resultadocuadrante2[1]+'</p></div></div>');





        chart.renderer.rect(chart.plotBox.x,
                chart.plotBox.y, width, height, 1)
            .attr({
                fill: 'rgb(70,130,180,0.4)',
                zIndex: 0
            })
            .add();

        chart.renderer.rect(chart.plotBox.x + width,
                chart.plotBox.y, width, height, 1)
            .attr({
                fill: 'rgb(0,255,127,0.4)',
                zIndex: 0
            })
            .add();

        chart.renderer.rect(chart.plotBox.x,
                chart.plotBox.y + height, width, height, 1)
            .attr({
                fill: "rgb(139, 0, 0,0.4)",
                zIndex: 0,
                value: "dasdasdsa"
            })
            .add();

        chart.renderer.rect(chart.plotBox.x + width,
                chart.plotBox.y + height, width, height, 1)
            .attr({
                fill: 'rgb(255,255,0,0.4)',
                zIndex: 0
            })
            .add();

    });

    chart.tooltip.hide();
});

*/









function valrandom(inicio, fin) {
    return Math.floor(Math.random() * (fin - inicio)) + inicio;
}


/*

var options = {
    series: [{
        name: 'Indicador de Emprendedor',
        data: [valrandom(0, 3), valrandom(0, 3), valrandom(0, 3), valrandom(0, 3), valrandom(0, 3), valrandom(0, 3), valrandom(0, 3)],
    }],
    chart: {

        height: "100%",
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
    },
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius: 2,
        }
    },
    
    plotOptions: {
        radar: {
            size: 150,
            polygons: {
                strokeColors: '#e9e9e9'
            }
        }
    },
    title: {
        text: ' '
    },
    colors: ['#FF4560'],
    markers: {
        size: 4,
        strokeColor: '#FF4560',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Nivel de ventas', 'Tipo de propiedad', 'Formalización', 'Etapa de desarrollo', 'Experiencia', 'Educación', 'Financiamiento', 'Redes'],
        labels: {
            show: true,
            style: {
                colors: ["#a8a8a8"],
                fontSize: "11px",
                fontFamily: 'Arial'
            }
        },

        style: {
            colors: ['#000']
        },
        min: 0,
        max: 100
    },

};

var options2 = {
    series: [{
        name: 'Indicador de Emprendedor',
        data: [valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100)],
    }],
    chart: {
        height: '100%',
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
    },
    dataLabels: {
        enabled: true
    },

    
    plotOptions: {
        radar: {
            size: 150,

            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    title: {
        text: ' '
    },
    colors: ['#FF4560'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Capital semilla', 'Capital Abeja', 'Crece Multisectorial', 'Crece. FUN MAPU', 'Crece Malleco', 'Crece Cauti', 'Sumate a innovar']
    },

    legend: {
        show: true
    }
};

var options3 = {
    series: [{
        name: 'Indicador de Emprendedor',
        data: [valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100), valrandom(0, 100)],
    }],
    chart: {
        height: '100%',
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
    },
    dataLabels: {
        enabled: true
    },

    
    plotOptions: {
        radar: {
            size: 150,

            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    title: {
        text: ' '
    },
    colors: ['#FF4560'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Capital semilla', 'Capital Abeja', 'Crece Multisectorial', 'Crece. FUN MAPU', 'Crece Malleco', 'Crece Cauti', 'Sumate a innovar']
    },

    legend: {
        show: true
    }
};*/


/*var chart = new ApexCharts(document.querySelector("#chart188757073"), options);
chart.render();

var chart2 = new ApexCharts(document.querySelector("#chart1758394734"), options2);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#chart188757048"), options3);
chart3.render();
*/

function calculodecuadrante(x,y){
    if(x>=0 && y>=0 ){
        return [1, "Liderazgo fuerte del encargado/dueño y emprendimiento/empresa establecido y con buena base","#bdecb6","#000"]
    }
    else if (x<0 && y>=0 ){
        return [2, " Liderazgo fuerte del encargado/dueño pero con necesidad de fortalecer el emprendimiento/empresa","#00aae4","#fff"]
    }
    else if (x>=0 && y<0 ){
        return [3, "Liderazgo débil, pero el emprendimiento/empresa se encuentra establecido y con buena base","#fdfd96","#000"]
    }
    else{
        return [4, "Emprendimiento/empresa con base débil y liderazgo débil.","#ff6961 ","#fff"]
    }

}


$('.arania').each(function(i, obj) {
    console.log(i,obj.getAttribute('id'));

    var options = {
        series: [{
            name: 'Indicador de Emprendedor',
            data: [valrandom(1, 4), valrandom(1, 4), valrandom(1, 4), valrandom(1, 4), valrandom(1, 4), valrandom(1, 4), valrandom(1, 4), valrandom(1, 4)],
        }],
        chart: {
            height: '100%',
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              }
        },
        dataLabels: {
            enabled: true,

        },
    
        title: {
            text: ' '
        },
        colors: ['#FF4560'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Nivel de ventas', 'Tipo de propiedad', 'Formalización', 'Etapa de desarrollo', 'Experiencia', 'Educación', 'Financiamiento', 'Redes']
        },
    
        legend: {
            show: true
        }
    };
    

    chart = new ApexCharts(document.querySelector("#"+obj.getAttribute('id')+""), options);
    chart.render();


});


$('.cuadra').each(function(i, obj) {

    console.log(i,obj.getAttribute('id'),obj.dataset.name);

    idobj=obj.getAttribute('id');
    nameu=obj.dataset.name;

    var data1=valrandom(-100, 100);
    var data2=-valrandom(-100, 100);

    var resultadocuadrante=calculodecuadrante(data1,data2);
    var data = [
        { x: data1, y:  data2}
    ]

    char = new Highcharts.Chart({
        chart: {

            renderTo: idobj,
            defaultSeriesType: 'scatter',
            
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 0,
            zoomType: 'xy'
        },

        
        credits: { enabled: false },
        title: {
            text: '',
            enabled: false
        },
        legend: {
            enabled: true
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            },
            enabled: true
        },
        plotOptions: {
            series: {
                shadow: true,
            }
        },
        xAxis: {
            title: {
                text: 'X Axis Title'
            },
            min: -100,
            max: 100,
            tickInterval: 100,
            tickLength: 0,
            minorTickLength: 0,
            gridLineWidth: 1,
            showLastLabel: true,
            showFirstLabel: false,
            lineColor: '#ccc',
            lineWidth: 1
        },

        yAxis: {
            title: {
                text: 'Y Axis<br/>Title',
                rotation: 0,
                margin: 25,
            },
            min: -100,
            max: 100,
            tickInterval: 100,
            tickLength: 3,
            minorTickLength: 0,
            lineColor: '#ccc',
            lineWidth: 1
        },
        series: [{
            color: '#efb810',
            name: nameu,
            showInLegend: false,
            data: data,
            marker: {height:25, width:25,symbol: 'url(../assets/images/users/person.png)'}
            
        }]
    }, function(chart) {

        var width = chart.plotBox.width / 2.0;
        var height = chart.plotBox.height / 2.0 + 1;


        $legend2 = $('#div'+obj.getAttribute('id'));
        console.log("id-leyenda",idobj);
        $legend2.find(".leyenda").append('<div class="item"><div class="serieName rounded" style="background-color:'+resultadocuadrante[2]+'"> <p class="text-justify text-wrap p-2" style="color:'+resultadocuadrante[3]+'">'+resultadocuadrante[1]+'</p></div></div>');

        chart.renderer.rect(chart.plotBox.x,
                chart.plotBox.y, width, height, 1)
            .attr({
                fill: '#00aae4',
                zIndex: 0
            })
            .add();

        chart.renderer.rect(chart.plotBox.x + width,
                chart.plotBox.y, width, height, 1)
            .attr({
                fill: '#bdecb6',
                zIndex: 0
            })
            .add();

        chart.renderer.rect(chart.plotBox.x,
                chart.plotBox.y + height, width, height, 1)
            .attr({
                fill: "#ff6961",
                zIndex: 0,
                value: "dasdasdsa"
            })
            .add();

        chart.renderer.rect(chart.plotBox.x + width,
                chart.plotBox.y + height, width, height, 1)
            .attr({
                fill: '#fdfd96',
                zIndex: 0
            })
            .add();

    });

    

});