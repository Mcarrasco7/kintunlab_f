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
        <script src="../assets/lib/arcgis_js_v419_api/arcgis_js_api/javascript/4.19"></script>-->
        <link rel="stylesheet" href="https://js.arcgis.com/4.20/esri/themes/light/main.css">
        

    </head>

    <style>
    #viewDiv {
      height: 1000px;
      width: 100%;
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
    </style>

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
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">KintunLab2</a></li>
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
                                    <div class="card-body p-0">
                                        <div id="viewDiv"></div>
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
                                            <li class="nav-item">
                                                <a href="#info-map" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                                    Información
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#indicadores" data-toggle="tab" aria-expanded="true" class="nav-link">
                                                    Indicadores
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#analisis" data-toggle="tab" aria-expanded="true" class="nav-link">
                                                    Analisis
                                                </a>
                                            </li>
                                        </ul> <!-- end nav-->
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="info-map">
                                                <form>        
                                                    <div class="form-group">
                                                        <label for="inputAddress" class="col-form-label">Nombre</label>
                                                        <input type="text" class="form-control" id="Beneficiar" placeholder="Almacen de ...">
                                                    </div>
                                                                
                                                    <div class="form-group">
                                                        <label for="inputAddress2" class="col-form-label">Descripción</label>
                                                        <input type="text" class="form-control" id="Direccion" placeholder="Empresa enfocada en el desarrollo...">
                                                    </div>
                                                    
                                                                
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputAddress2" class="col-form-label">Responsable</label>
                                                            <input type="text" class="form-control" id="RUT_del_be" placeholder="18867434-5">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="inputAddress2" class="col-form-label">Estado</label>
                                                            <input type="text" class="form-control" id="ORIGEN_CULSEXO" placeholder="Activo">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress2" class="col-form-label">Producción</label>
                                                        <input type="text" class="form-control" id="Subsidio_S" placeholder="Venta de ...">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress2" class="col-form-label">Instrumento de fomento</label>
                                                        <input type="text" class="form-control" id="Programa" placeholder="....">
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
            
            require(["https://apexcharts.com/samples/assets/stock-prices.js"], function () {   });
            require(["https://apexcharts.com/samples/assets/irregular-data-series.js"], function () {   });
            require(["../assets/js/pages/demo.visor.js"], function () {   });
         
            
            require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/core/watchUtils",
      "esri/layers/FeatureLayer",
      "esri/widgets/FeatureTable",
      "esri/widgets/Legend"
    ], function (WebMap, MapView, watchUtils, FeatureLayer, FeatureTable,Legend) {

      const features = [];
      const webmap = new WebMap({
        portalItem: {
          id: "89082a50b5ef4e79a407965f4d6725fe"
        }
      });

      webMap.load().then(() => {
        webMap.layers
            .filter(layer => { return layer.type === 'feature' })
            .map(layer => {
            let featLayer = <esri.FeatureLayer>layer; 
            featLayer.outFields = ['*'];
            return featLayer; 
            });
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

      view.when(function() {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          
          webmap.layers.items.forEach(function(valor, indice, array) {
             var featureLayer = valor;
             //console.log(featureLayer.id,indice,featureLayer.title);
          });
          
          var featureLayer = webmap.layers;
          

          var legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "Capas"
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
        })
        
          .then(function(layerView) {
            view.on("immediate-click", eventHandler);
            view.on("pointer-down", eventHandler);

            function eventHandler(event) {
              var hurricanesLayer = webmap.layers.getItemAt(42);
              // only include graphics from hurricanesLayer in the hitTest
              console.log("hurri",hurricanesLayer);
              var vm = ['FID', 'Programa'];
              const opts = {
                include: hurricanesLayer,
                mode: FeatureLayer.MODE_ONDEMAND,

                outFields: vm
              }
              // the hitTest() checks to see if any graphics from the hurricanesLayer
              // intersect the x, y coordinates of the pointer
              console.log("clicar")
              view.hitTest(event, opts).then(getGraphics);
            }

            let highlight, currentYear, currentName;

            function getGraphics(response) {
              // the topmost graphic from the hurricanesLayer
              // and display select attribute values from the
              // graphic to the user
              console.log("response",response)
              if (response.results.length) {
                const graphic = response.results[0].graphic;

                const attributes = graphic.attributes;
                const Programa = response.results[0].graphic.layer.fields[1].alias;
                const RUT_del_be = response.results[0].graphic.layer.fields[8].alias;
                const Beneficiar = response.results[0].graphic.layer.fields[3].alias;
                const ORIGEN_CUL = response.results[0].graphic.layer.fields[4].alias;
                const SEXO = response.results[0].graphic.layer.fields[5].alias;
                const Subsidio_S = response.results[0].graphic.layer.fields[6].alias;
                const Direccion = response.results[0].graphic.layer.fields[9].alias;

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
                console.log(Direccion);
                $("#Programa").val(Programa);
                $("#RUT_del_be").val(RUT_del_be);
                $("#Beneficiar").val(Beneficiar);
                $("#Subsidio_S").val(Subsidio_S);
                $("#ORIGEN_CULSEXO").val(ORIGEN_CUL+" "+SEXO);
                $("#Direccion").val(Direccion);
                

                console.log(response.results[0].graphic.layer.fields[1])

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
        
    </body>
</html>
