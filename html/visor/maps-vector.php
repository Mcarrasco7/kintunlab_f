<?php
   
   $completarurl="../";
   include $completarurl.'bd_consul/validar.php';
   
   include $completarurl.'bd_consul/conexion.php';
   
   require_once $completarurl.'bd_consul/DB.class.php';

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Visor | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- third party css -->
        <link href="../assets/css/vendor/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />
        
        <!-- <link rel="stylesheet" href="../assets/lib/arcgis_js_v419_api/arcgis_js_api/javascript/4.19/esri/themes/light/main.css">
        <script src="../assets/lib/arcgis_js_v419_api/arcgis_js_api/javascript/4.19"></script>
    <link rel="stylesheet" href="https://js.arcgis.com/3.37/esri/css/esri.css">
    -->
        <link rel="stylesheet"href="https://js.arcgis.com/4.20/esri/themes/light/main.css"/>
        

    </head>

    <style>
    #viewDiv,.container2{
        height: 600px;
        width:100%;
        margin:0;
        padding:0;
        margin:0;
        font-family: "Open Sans";
    }

    #zoom {
      margin-bottom: 5px;
    }

    #actions {
      padding: 5px;
    }

    .container {
      height: 50%;
      width: 100%;
    }
    #map {
    padding:0;
    }
    /*
    #layerListPane{
        width:100%;
        overflow-y: scroll; max-height:600px;
    }
    */
    .esriLayer{
    background-color: #fff;
    }
    .esriLayerList .esriList{
        border-top:none;
    }
    .esriLayerList .esriTitle {
    background-color: #fff;
    border-bottom:none;
    }
    .esriLayerList .esriList ul{
    background-color: #fff;
    }
    
    .apexcharts-xaxis .apexcharts-datalabel {
        fill: #000!important;
    }
    .apexcharts-yaxis{
        display:none;
    }
    #layerList{
        height:100%!important;
    }
    #layerListPane{
        height:100%!important;
        overflow-y: hidden!important;
    }

    .nav-item a:hover{
        background-color:#afb4f6;
        color:#fff;
    }
    .nav-item.active a:hover{
        background-color:#727cf5;
    }
    .esri-basemap-gallery{
        max-height:200px!important;
    }
    /*sidebar inicio*/

    $turbo-yellow: #ffcc19;
$turbo-yellow-10: lighten($turbo-yellow, 40%);
$turbo-yellow-20: lighten($turbo-yellow, 30%);
$turbo-yellow-30: lighten($turbo-yellow, 20%);
$turbo-yellow-40: lighten($turbo-yellow, 10%);
$turbo-yellow-50: lighten($turbo-yellow, 0%);
$turbo-yellow-60: darken($turbo-yellow, 10%);
$turbo-yellow-70: darken($turbo-yellow, 20%);
$turbo-yellow-80: darken($turbo-yellow, 30%);
$turbo-yellow-90: darken($turbo-yellow, 40%);

.bg-turbo-yellow {
  background-color: $turbo-yellow;
}

.bg-turbo-yellow-10 {
  background-color: $turbo-yellow-10;
}
.bg-turbo-yellow-20 {
  background-color: $turbo-yellow-20;
}
.bg-turbo-yellow-30 {
  background-color: $turbo-yellow-30;
}
.bg-turbo-yellow-40 {
  background-color: $turbo-yellow-40;
}
.bg-turbo-yellow-50 {
  background-color: $turbo-yellow-50;
}
.bg-turbo-yellow-60 {
  background-color: $turbo-yellow-60;
}
.bg-turbo-yellow-70 {
  background-color: $turbo-yellow-70;
}
.bg-turbo-yellow-80 {
  background-color: $turbo-yellow-80;
}
.bg-turbo-yellow-90 {
  background-color: $turbo-yellow-90;
}
    
    
   @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
   





.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

$lila : $turbo-yellow /*#7386D5*/;
$lila-60 : $turbo-yellow-60 /*#6d7fcc*/;
$lila-line : $turbo-yellow-70 /*#47748b*/;

$text-sidebar : #6b6b6b /*#fff*/;
$text-sidebar-hover : #6b6b6b /*#fff*/;

.text-sidebar {
  color: $text-sidebar;
}



#sidebar {
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
}

#sidebar ul.components {
    padding: 20px 0;
}

#sidebar ul p {
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}




a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: $lila-60;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: $text-sidebar;
    color: $lila;
}

a.article,
a.article:hover {
    background: $lila-60 !important;
    color: $text-sidebar !important;
}



/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}

.sinfondo{
    -webkit-box-shadow: 0 0 35px 0 rgb(154 161 171 / 0%); 
    box-shadow: 0 0 35px 0 rgb(8 19 34 / 0%);
    background-color:#fff0;
}
#sidebarCollapse {
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 20px;
    min-height: 70px;
}
/*Sidebar fin */
    </style>
    

     <!-- bundle -->
     <script src="../assets/js/vendor.min.js"></script>
        <script src="../assets/js/app2.js"></script>

        <!-- third party js -->
        <script src="../assets/js/vendor/apexcharts.min.js"></script>
        <!-- third party js ends -->

        <!-- demo app 
        
        <script src="../assets/js/pages/demo.vector-maps.js"></script>
        <script src="https://apexcharts.com/samples/assets/stock-prices.js"></script>
        <script src="https://apexcharts.com/samples/assets/irregular-data-series.js"></script>
        <script src="../assets/js/pages/demo.apex-line.js"></script>
        <script src="../assets/js/pages/demo.dashboard-analytics.js"></script>
        <script src="../assets/js/pages/demo.apex-radar.js"></script>
        
        end demo js-->

<script src="https://js.arcgis.com/4.20"></script>


    

<script>
    var dojoConfig = {
    parseOnLoad: true
    };

    

    


</script>
<script>
    var _operLayers, theMap;
    require(["https://apexcharts.com/samples/assets/stock-prices.js"], function () {   });
    require(["https://apexcharts.com/samples/assets/irregular-data-series.js"], function () {   });
    require(["../assets/js/pages/demo.visor.js"], function () {   });
    
    
    require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "dojo/query", 
      "dojo/aspect",
      "esri/config",
      "esri/symbols/PictureMarkerSymbol",
      "esri/geometry/Point",
       "esri/Graphic",
       "esri/layers/GraphicsLayer",
       "esri/widgets/Search",
       "esri/widgets/Print",
       "esri/widgets/Popup",
       "esri/widgets/BasemapGallery",
       "esri/widgets/Print", 
       "esri/widgets/Expand",
       "esri/widgets/CoordinateConversion",
       "esri/geometry/coordinateFormatter",
       "esri/geometry/SpatialReference",
    ], function (WebMap, MapView,  FeatureLayer, Legend, LayerList, query, aspect, esriConfig, PictureMarkerSymbol, Point, Graphic, GraphicsLayer, Search, Print, Popup, BasemapGallery, Print, Expand,CoordinateConversion,coordinateFormatter,SpatialReference) {
        

      esriConfig.apiKey = "AAPK3095363b78d441ddb675c2a2fc28e2fafOPbX9xJmcBjBZcUvrKzQxl_AdPiHWIKvEXYr3Y34saVLxqcrjda6aT8oBefTRVg";
      var view;
      var webmap;
      var datos_emprendedores;

      var markerpro1 = new PictureMarkerSymbol("../assets/images/marker/markericon.png",40,40);
      var markerpro2 = new PictureMarkerSymbol("../assets/images/marker/markericon1.png",40,40);
      var markerpro3 = new PictureMarkerSymbol("../assets/images/marker/markericon2.png",40,40);
      var markerpro4 = new PictureMarkerSymbol("../assets/images/marker/markericon3.png",40,40);
      var markerpro5 = new PictureMarkerSymbol("../assets/images/marker/markericon4.png",40,40);
      var markerpro6 = new PictureMarkerSymbol("../assets/images/marker/markericon5.png",40,40);
      var layerList;

      /*
      var markerpro7 = new PictureMarkerSymbol({
            "url":"../assets/images/marker/markericon7.png",
            "height":50,
            "width":50,
            "type":"esriPMS",
            "angle": -30
        });
      */
      $( document ).ready(function() {
            $.ajax({
                url: 'config/requestdata.php',
                type: 'get',
                dataType: 'JSON',
                success: function(response){
                    datos_emprendedores = response;
                }
            });


            mapafun("b01269b8606040ac8bdfdda7cbd3b622");


            
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                
                $('#sidebarboton').toggleClass('fa-chevron-right fa-chevron-left');
                $('#sidebar').toggleClass('col-3 d-none'); //Adds 'a', removes 'b' and vice versa
                $('#viewDiv').toggleClass('col-9 col-12');
               
            });
        

            
        });

        $( ".navegador" ).click(function() {
            destruir();
            mapafun($(this).data("id"));

            
        });
      
        async function destruir(){
            view.destroy();view = null;
        }
        
        async function asynclayerlist() {


            layerList = new LayerList({
                view: view,
                editingEnabled: true,
                listItemCreatedFunction: function (event) {
                    var item = event.item;
                    
                    if (item.layer.title == "Superficie bosque" || item.layer.title == "Emprendedores" ) {
                        
                    }
                    if (item.layer.type != "group") {
                    // don't show legend twice
                    item.panel = {
                        content: "legend",
                        open: true
                    };
                    }
                    $(".esri-layer-list__no-items").empty();
                },
            },"layerList");

        
            
            
            var search = new Search({
                view: view,      
                allPlaceholder: "District or Senator",
            },"search");

            view.ui.add(search,{
                position: "top-left",
                index: 0,
                }
            );
            
            var basemapGallery = new BasemapGallery({
                view: view
            });

            var print = new Print({
                view: view,
                // specify your own print service
                printServiceUrl:
                "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
                container: document.createElement("div")
            });

            let legend = new Legend({
            view: view,
            layerInfos: [{
                layer: webmap,
                title: "Legend"
            }]
            });

            const bgExpand = new Expand({view: view,content: print});

            const bgExpand2 = new Expand({view: view,content: basemapGallery});

            const bgExpand3 = new Expand({view: view,content: legend});

/*
            let ccWidget = new CoordinateConversion({
                view: view
            });

            view.ui.add(ccWidget, "bottom-left");
*/
            view.ui.add(bgExpand3, "bottom-right");

            // Add widget to the top right corner of the view
            view.ui.add(bgExpand, "top-right");
            view.ui.add(bgExpand2, {position: "top-right"});
            //view.ui.add(print, "top-right");
                
            }

        



       async function mapafun(idmapa){

        var mapa = idmapa

        const features = [];
        webmap = new WebMap({
            portalItem: {
            id: mapa
            }
        });

     const geoSpatialReference = new SpatialReference({
        wkid: 4326
      });

      
      webmap.load().then(() => {
          webmap.layers.filter(layer => { return layer.type === 'feature' })
            .map(layer => {
            let featLayer = layer; 
            
            featLayer.outFields = ['*'];
            return featLayer; 
            });
          

        });

      webmap.when(function () {
        var allLayersAndSublayers = webmap.allLayers.flatten(function (item) {
            
            return item.layers || item.sublayers;
        });

   
       });
       
       

      view = new MapView({
        container: "viewDiv",
        map: webmap,
        center: [-71.7087828,-38.8518772],
        zoom: 10,
        popup: {
          autoOpenEnabled: true
        } //disable popups
      });

      
      //view.ui.add(layerList, "top-right");
       

       //Agregar los widgets
       
      
      

        


      view.when(function() {

            
            
            function asyncCall() {

                if(layer){
                    map.remove(layer);
                }

                var layer = new GraphicsLayer({opacity:1,title:"Emprendedores",showAttribution:true,styling:true},marker);
                
                var features;
               
                var marker= markerpro1;
                var fl;
                jQuery.each(datos_emprendedores, function() {

                   
                
                


                    
                  
                    
                            
                        
                    

                    if(this.longitud !=null || this.latitud !=null){
                        
                        if(this.programanombre=="PRODESAL"){
                            var marker= markerpro1;
                        }
                        else if(this.programanombre=="PDTI, UPT Cordillera"){
                            var marker= markerpro2;
                        }
                        else if(this.programanombre=="PDTI, UPT El Valle 1"){
                            var marker= markerpro3;
                        }
                        else if(this.programanombre=="PDTI, UPT Santa María de Llaima"){
                            var marker= markerpro4;
                        }
                        else if(this.programanombre=="PDTI, UPT El Valle 2"){
                            var marker= markerpro5;
                        }
                        else{
                            var marker= markerpro6;
                        }
                        //var temputm=coordinateFormatter.toUtm("30U 489885 6199877","latitude-band-indicators");
                        //console.log(temputm);
                        /*
                        if(this.rut!="10659940-8"){
                           
                            var markerPoint = new Point({ x: this.longitud, y: this.latitud });

                            "30U 489885 6199877","latitude-band-indicators"
                            var temp2="19S "+this.latitud+" "+  this.longitud;
                            
                            console.log(temp2);
                            
                            
                        }
                        */
                        var markerPoint = new Point({ x: this.longitud, y: this.latitud });
                    
                        


                        var storepoint = new Graphic(markerPoint, marker,  this);
                        
                        
                        
                        layer.add(storepoint);
                    }
                


                

                });
                webmap.add(layer);
                
                console.log(webmap.layers);   
                
            }


            asyncCall();



          webmap.layers.items.forEach(function(valor, indice, array) {
                var featureLayer = valor;
                
             //console.log(featureLayer.id,indice,featureLayer.title);
          });
          
          
          var featureLayer = webmap.layers;
          


         


          

        })
        
          .then(function(layerView) {
            view.on("immediate-click", eventHandler);
           

            function eventHandler(event) {
              
              var hurricanesLayer = webmap.layers.getItemAt(17);
              
              // only include graphics from hurricanesLayer in the hitTest
             
              const opts = {
                include: hurricanesLayer
              }
              // the hitTest() checks to see if any graphics from the hurricanesLayer
              // intersect the x, y coordinates of the pointer
              view.hitTest(event, opts).then(function (response) {  getGraphics(response);  });
            }

            let highlight, currentYear, currentName;
            
            function getGraphics(response) {
              // the topmost graphic from the hurricanesLayer
              // and display select attribute values from the
              // graphic to the user
              
              
              if (response.results.length) {
                const graphic = response.results[0].graphic;

                console.log(graphic);
                console.log(webmap.layers.getItemAt(17));
                
                
                
                const attributes = graphic.attributes;
                const Beneficiar =  attributes.nombres+" "+attributes.apellidos;
                const Emprendimiento = attributes.emprendimiento;
                const RUT_del_be = attributes.rut;
                const Direccion = attributes.direccion;
                const ORIGEN_CUL = attributes.indigena == 1 ? "Indígena" : "No indígena";
                const SEXO = attributes.genero == 1 ? "Masculino" : "Femenino";
                const Subsidio_S = attributes.programanombre;

                if (
                  highlight &&
                  (currentName !== name || currentYear !== year)
                ) {
                  highlight.remove();
                  highlight = null;
                  return;
                }

                if (highlight) {
                  return;
                }

                

                if(graphic.layer.title=="Emprendedores"){
                    radarch();
                    $("#Beneficiar").val(Beneficiar);
                    $("#Emprendimiento").val(Emprendimiento);
                    $("#RUT_del_be").val(RUT_del_be);
                    $("#Direccion").val(Direccion);
                    $("#ORIGEN_CUL").val(ORIGEN_CUL);
                    $("#SEXO").val(SEXO);
                    $("#Subsidio_S").val(Subsidio_S);

                }
                
                


               

                // highlight all features belonging to the same hurricane as the feature
                // returned from the hitTest
                
              } else {
                // remove the highlight if no features are
                // returned from the hitTest
                if (highlight){
                  highlight.remove();
                  highlight = null;
                }
               
              }
            }
          });

          asynclayerlist();
        
    }

      
     
      
    });


    

        </script>


    <body class="loading" data-layout-config='{"leftSideBarTheme":"light","layoutBoxed":false, "leftSidebarCondensed":true, "leftSidebarScrollable":true,"darkMode":false, "showRightSidebarOnStart": true}'  data-leftbar-theme="light" data-leftbar-compact-mode="condensed">        <!-- Begin page -->
        <div class="wrapper">
            <?php include "../partials/left-sidebar.php" ?>
            

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    <?php include "../partials/topbar.php" ?>
                    

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">KintunLab</a></li>
                                            <li class="breadcrumb-item active">Visor</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Visor</h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 

                        <div class="row mb-4">
                            <div class="col-lg-8">
                                <div class="card"> 
                                    <div class="card-body p-0 row">

    
                                    <div class="col-12 px-0">
                                        <ul class="nav nav-pills bg-nav-pills nav-justified">
                                        <li class="nav-item">
                                                <a href="#settings1"  data-id="b01269b8606040ac8bdfdda7cbd3b622"  data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 navegador active">
                                                    <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                                                    <span class="d-none d-md-block">Complementarias</span>
                                                </a>
                                            </li>
                                             
                                            <li class="nav-item">
                                                <a href="#profile1"  data-id="65a91535c26549dab49c1cdd87866966"  data-toggle="tab" aria-expanded="true" class="nav-link rounded-0 navegador">
                                                    <i class="mdi mdi-account-circle d-md-none d-block"></i>
                                                    <span class="d-none d-md-block">Actividad productiva</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#home1" data-id="c24bd1d785d34fa6a77203e4b6e5164e" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 navegador ">
                                                    <i class="mdi mdi-home-variant d-md-none d-block"></i>
                                                    <span class="d-none d-md-block">FODA</span>
                                                </a>
                                            </li> 
                                            
                                        </ul>
                                    </div>


                                    <div id="sidebar" class="container2 col-3" data-dojo-type="dijit/layout/BorderContainer" data-dojo-props="design:'headline',gutters:false">
                                            <div id="layerListPane" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'right'">
                                                <div id="layerList"></div>
                                            </div>
                                            
                                        </div>
                                         
                                        
                                        <div class="col-9"  id="viewDiv">
                                            <button type="button" id="sidebarCollapse" class="btn-primary btn">
                                                <i id="sidebarboton" class="fas fa-chevron-left"></i>
                                                <span></span>
                                            </button>
                                            
                                            
                                        </div>
                                        
                                        <div class="container">
                                            
                                            
                                            <div id="tableDiv"></div>
                                        </div>
                                        <!--
                                        <div id="actions" class="esri-widget">
                                            <button class="esri-button" id="zoom">Zoom to selected feature(s)</button>
                                            <button class="esri-button" id="fullextent">Full extent</button>
                                        </div>
                                        <iframe width="100%" height="700" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                                        src="https://experience.arcgis.com/experience/9d8f688a6808470c84fad092d6075b3e/9"></iframe>
                                        <div id="world-map-markers" style="height: 360px"></div>-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                                <a href="capas/capasmelipeuco.zip" download>
                                    <button type="button" class="btn btn-block btn-xs btn-primary"><i class="mdi mdi-cloud mr-1"></i>Cartografía</button>
                                </a>
                                
                            </div> <!-- end col-->

                            

                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-body">

                                      

                                        <ul class="nav nav-tabs nav-bordered mb-3">
                                            <li class="nav-item w-100">
                                                <a href="#info-map" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                    Información
                                                </a>
                                            </li>
                                            <!--
                                            <li class="nav-item">
                                                <a href="#indicadores" data-toggle="tab" aria-expanded="true" class="nav-link">
                                                    Indicadores
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#analisis" data-toggle="tab" aria-expanded="true" class="nav-link">
                                                    Analisis
                                                </a>
                                            </li>-->
                                        </ul> <!-- end nav-->
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="info-map">
                                                <form>        
                                                    <div class="form-group">
                                                        <label for="Beneficiar" class="col-form-label">Beneficiario</label>
                                                        <input type="text" class="form-control" id="Beneficiar" placeholder="Almacen de ..." readonly>
                                                    </div>
                                                                
                                                    <div class="form-group">
                                                        <label for="Emprendimiento" class="col-form-label">Emprendimiento</label>
                                                        <input type="text" class="form-control" id="Emprendimiento" placeholder="Empresa enfocada en el desarrollo..." readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="RUT_del_be" class="col-form-label">Rut</label>
                                                        <input type="text" class="form-control" id="RUT_del_be" placeholder="Los Mirlos #1350" readonly>
                                                    </div>
                                                    
                                                                
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="Direccion" class="col-form-label">Direccion</label>
                                                            <input type="text" class="form-control" id="Direccion" placeholder="18867434-5" readonly>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="ORIGEN_CUL" class="col-form-label">Origen Cultural</label>
                                                            <input type="text" class="form-control" id="ORIGEN_CUL" placeholder="Activo" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="SEXO" class="col-form-label">Genero</label>
                                                        <input type="text" class="form-control" id="SEXO" placeholder="Venta de ..." readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="Subsidio_S" class="col-form-label">Programa</label>
                                                        <input type="text" class="form-control" id="Subsidio_S" placeholder="...." readonly>
                                                    </div>
                                                    <div id="basic-radar" class="apex-charts" data-colors="#727cf5"></div>            
                                                    
                                                                
                                                    
                                                </form>
                                            </div>
                                            <div class="tab-pane show" id="indicadores">
                                                <div id="sessions-os" class="apex-charts mt-3" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"></div>
                                                    <div class="row text-center mt-2">
                                                        <div class="col-6">
                                                            <h4 class="font-weight-normal">
                                                                <span>65</span>
                                                            </h4>
                                                            <p class="text-muted mb-0">Ranking Comunal</p>
                                                        </div>
                                                        <div class="col-6">
                                                            <h4 class="font-weight-normal">
                                                                <span>1,459</span>
                                                            </h4>
                                                            <p class="text-muted mb-0">Ranking Regional</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            <div class="tab-pane" id="analisis">
                                                <div id="line-chart-zoomable" class="apex-charts" data-colors="#fa5c7c"></div>
                                                <div id="sessions-overview" class="apex-charts mt-3" data-colors="#0acf97"></div>
                                            </div>
                                        </div>
                                        <!--<div id="world-map-markers" style="height: 360px"></div>-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>
                        <!-- end row-->

                        

                        
                    </div> <!-- container -->

                </div> <!-- content -->
                <?php include "../partials/footer.php" ?>    
                

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->


       


       
        
    </body>
</html>
