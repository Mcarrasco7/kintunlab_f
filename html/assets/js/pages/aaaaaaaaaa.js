var chartara;
var charcuadra;


function valrandom(inicio, fin) {
    return Math.floor(Math.random() * (fin - inicio)) + inicio;
}




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

var datosempre;
var arrdatosarania = [0,0,0,0,0,0,0,0];

async function obtenerdato(id,obj2){
    
    $.ajax({ 
        type: 'POST', 
        url: 'configuracion/get_data_graph.php', 
        data: "id="+id,
        dataType: 'json',
        success: function (data) { 
            
            datosempre = JSON.parse(data.grafico.graficos);
            
            var arrayarania =[datosempre.arania[0]];

            for (var i = 0; i < arrayarania.length; i++){
                var contador =0;
                var obj = arrayarania[i];
                for (var key in obj){
                  var value = obj[key];
                  console.log("<br> - " + key + ": " + value +" numero" + contador);
                  arrdatosarania[contador]=value;
                  contador++;
                }
            }
            
            console.log(arrdatosarania);

            

            var options = {
                series: [{
                    name: 'Emprendedor',
                    data: arrdatosarania,
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
            
        
            chart = new ApexCharts(obj2, options);
            chart.render();


            /*
            
            charta.updateSeries([{
                data: arrdatosarania
            }])

            
            console.log(arrdatosarania);
            console.log(datosempre.cuadrante[0].x,datosempre.cuadrante[0].y);
            chart.series[0].update({
                data: [29.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
            });
            */
            //charcuadra.datosempre.arania[0].series[0].data
        }
    });
}


var arrdatosarania = [0,0,0,0,0,0,0,0];



function load_graph(){


    
$('.arania').each(function(i, obj) {

   
    var nombre =document.querySelector("#"+obj.getAttribute('id')+"");
    var userid=obj.dataset.id;
    obtenerdato(userid,nombre);


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

    charcuadra = new Highcharts.Chart({
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

}

