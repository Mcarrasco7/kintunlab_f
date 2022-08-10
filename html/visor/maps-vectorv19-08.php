<?php
   
    $completarurl="../";
    include 'bd_consul/validar.php';

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
    #layerListPane{
        width:100%;
        overflow-y: scroll; max-height:600px;
    }
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
       "esri/widgets/Popup"
    ], function (WebMap, MapView,  FeatureLayer, Legend, LayerList, query, aspect, esriConfig, PictureMarkerSymbol, Point, Graphic, GraphicsLayer, Search, Print, Popup) {
        

      esriConfig.apiKey = "AAPK3095363b78d441ddb675c2a2fc28e2fafOPbX9xJmcBjBZcUvrKzQxl_AdPiHWIKvEXYr3Y34saVLxqcrjda6aT8oBefTRVg";

      const features = [];
      const webmap = new WebMap({
        portalItem: {
          id: "04b420ef6e4f494ab8741bb36a091b30"
        }
      });

      $( ".navegador" ).click(function() {
        alert( $(this).data("id"));
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

        //var layerList = new LayerList({ view: view });
        //view.ui.add(layerList, { position: "top-left" });
       });
       
       

      let view = new MapView({
        container: "viewDiv",
        map: webmap,
        center: [-71.7087828,-38.8518772],
        zoom: 10,
        popup: {
          autoOpenEnabled: false
        } //disable popups
      });

      
      //view.ui.add(layerList, "top-right");
      
      
      //Agregar los widgets
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function (event) {
            const item = event.item;
            if (item.layer.type != "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          },
        },"layerList");

        var search = new Search({
            view: view
            },"search");
        view.ui.add(search, "top-left");
/*
        var print = new Print({
            view: view,
            // specify your own print service
            printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
          });

          // Add widget to the top right corner of the view
          view.ui.add(print, "top-right");
*/

      view.when(function() {

            
            async function asyncCall() {
                var marker = new PictureMarkerSymbol("../assets/images/markericon.png",25,25);

                var layer = new GraphicsLayer({opacity:0.80,title:"Emprendedores",showAttribution:true,styling:true},marker);
                

                $.ajax({
                    url: 'config/requestdata.php',
                    type: 'get',
                    dataType: 'JSON',
                    success: function(response){

                        jQuery.each(response, function() {

                            
                            var markerPoint = new Point({ x: this.longitud, y: this.latitud });
                        



                            var storepoint = new Graphic(markerPoint, marker,  this);
                            
                            
                            
                            layer.add(storepoint);
                            


                            /*
                            const contentString = "The <a href='http://zoo.sandiegozoo.org/'>San Diego Zoo</a> " + 
                            " in Balboa Park houses over 3,700 animals." +
                            "<p><p><img src='https://visitoceanside.org/wp-content/uploads/2013/01/SanDiegoZoo.jpg' alt='San Diego Zoo' height='150'>"; 
                            view.graphics.add({
                                symbol: {
                                type: "text",
                                    color: "#7A003C",
                                    text: "\ue61d", // esri-icon-map-pin
                                    font: {
                                        size: 15,
                                        family: "CalciteWebCoreIcons"
                                    }
                                },
                                geometry: {
                                type: "point",
                                longitude: this.longitud,
                                latitude: this.latitud
                                },
                                popupTemplate: {
                                title: "San Diego Zoo",
                                content: contentString
                                }
                            });
                            */



                        });
                        webmap.add(layer);
                        
                    }
                });
            }


            asyncCall();
            /*
            view.map.layers.map((lyr)=> {
            lyr.watch('visible', function(visible){
                if(visible){
                view.map.layers.map((layer, index) => {
                    if(layer.title !== lyr.title){
                        layer.visible = false;
                    }
                    var allLayersAndSublayers = webmap.allLayers.flatten(function (item) {
                        return item.layers || item.sublayers;
                    });
                    var legend = new Legend({ view: view, layerInfos: [{ layer: featureLayer, title: "NY Educational Attainment" }] });
                    
                    
                });
                }
                
            }, lyr.title);
            if (lyr.title === "Emprendimientos" || lyr.title === "Actividad Agrícola") {
                lyr.visible = true;
            } else {
                lyr.visible = false;
            }
            });
            */
            //var layerList = new LayerList({view: view, container: "layerList"});



          webmap.layers.items.forEach(function(valor, indice, array) {
                var featureLayer = valor;
                
             //console.log(featureLayer.id,indice,featureLayer.title);
          });
          
          
          var featureLayer = webmap.layers;
          

         
       


         

          /*
          var legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "Capas"
              }
            ]
          });

         
          view.ui.add(legend, "top-left");
         
          

          var myWidget = new LayerList({
           map: response.map,
           layers: arcgisUtils.getLayerList(response)
        },"layerList");
        myWidget.startup();
          */
          

            


          //view.ui.add(layerList, "top-left");

          //var myWidget = new LayerList({view: view, layers: featureLayer},"layerList").startup();
          

        })
        
          .then(function(layerView) {
            view.on("immediate-click", eventHandler);
           

            function eventHandler(event) {
              console.log(webmap);
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
              console.log(response);
              
              if (response.results.length) {
                const graphic = response.results[0].graphic;

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

     
      
    });

        /*
            require(["esri/config","esri/Map", "esri/views/MapView","esri/widgets/BasemapToggle","esri/widgets/BasemapGallery","esri/WebMap"], function (esriConfig,Map, MapView,WebMap) {

                esriConfig.apiKey = "AAPK3095363b78d441ddb675c2a2fc28e2fafOPbX9xJmcBjBZcUvrKzQxl_AdPiHWIKvEXYr3Y34saVLxqcrjda6aT8oBefTRVg";
                
               
                const map = new Map({
                basemap: "arcgis-imagery" // Basemap layer service
                });

                var webmap = new WebMap({
                
                portalItem: {
                    // autocasts as new PortalItem()
                    id: "f2e9b762544945f390ca4ac3671cfa72"
                }
                });

                const view = new MapView({
                map: map,
                center: [-71.7087828,-38.8518772], // Longitude, latitude
                zoom: 11, // Zoom level
                container: "viewDiv" // Div element
                });

                

            });
            */
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
                                                <a href="#home1" data-id="1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 navegador">
                                                    <i class="mdi mdi-home-variant d-md-none d-block"></i>
                                                    <span class="d-none d-md-block">FODA</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#profile1"  data-id="2"  data-toggle="tab" aria-expanded="true" class="nav-link rounded-0 navegador active">
                                                    <i class="mdi mdi-account-circle d-md-none d-block"></i>
                                                    <span class="d-none d-md-block">Actividad profuctiva</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#settings1"  data-id="3"  data-toggle="tab" aria-expanded="false" class="nav-link rounded-0 navegador ">
                                                    <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                                                    <span class="d-none d-md-block">UTAS</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="container2 col-3" data-dojo-type="dijit/layout/BorderContainer" data-dojo-props="design:'headline',gutters:false">
                                            <div id="layerListPane" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'right'">
                                                <div id="layerList"></div>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="col-9" id="viewDiv"></div>
                                        
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
                                                        <label for="Subsidio_S" class="col-form-label">Subsidio</label>
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
