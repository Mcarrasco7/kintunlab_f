<?php
    $completarurl="..";
    include '../consultas_bd/validar.php';
    
    ?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta Content-Type: application/json>
  
  <title>KIMGENDATA - ESCENARIO</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <?php
    echo "

<script>
//var comuna = Toltén';
var comuna = '".utf8_decode($_SESSION["comuna"])."';

</script>";
     
    ?>



  <link href="../css/sb-admin-2.min.css" rel="stylesheet">
  <link href="../css/estilogeneral.css" rel="stylesheet">
  <link rel="icon" href="../files/kimgen_favicon.png">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css">
  <link rel="stylesheet" href="../vendor/Leaflet.markercluster-1.4.1/MarkerCluster.css" />
	<link rel="stylesheet" href="../vendor/Leaflet.markercluster-1.4.1/MarkerCluster.Default.css" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"/>
  <link rel="stylesheet" href="../vendor/leaflet-image/Leaflet.BigImage.min.css"/>

  <style type="text/css">
  
    #map { height: 700px ;width: 100% }

    .active{
      background-color: #e2002b!important;  
    } 
    .sub-active{
      background-color: #4A4A4A!important;  
    } 
    .sub-active:hover{
      background-color: #DBDBD5!important;  
    } 
    
    button.active{
      background-color: #3b83bd!important;  
      color: #fff;
    }
    button.active:hover{
      background-color: #3b83bd!important;  
      color: #fff;
    }
    .tabledit-toolbar button{
      width:100%;
    }
    .info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255,255,255,0.8);
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
    }
    .info h4 {
        margin: 0 0 5px;
        color: #777;
    }
    .legend {
    line-height: 18px;
    color: #555;
    }
    .legend i {
        width: 18px;
        height: 18px;
        float: left;
        margin-right: 8px;
        opacity: 0.7;
    }
    .seleccionado2{
        border: 2px solid rgb(127, 0, 0)!important;
        border: 2px solid rgba(71, 222, 234, .5)!important;
        -webkit-background-clip: padding-box!important; 
        background-clip: padding-box!important; 
        background-color:rgba(0, 0, 0, 0.3);
      }
    .leaflet-control-layers-overlays label div{
      width: 150px;
    }
    button.seleccionado2{
       background-color: #2F4EB0;
    }
    .Textolayer{
      
      width:60%;
      margin-left:0.5rem;
    }
    .Imagenlayer{
      display:inline-block;
      width:20%;
      position: absolute;
      right: 0px;
    }
    .leaflet-control-layers-selector{
      display: inline-block;
      align-items: center;
    }
    label div,label div span{
      display: flex;
      align-items: center;
    }
    .bloquear{
      display :none;
    }
    @media only screen and (max-width: 1199px) {
      
      .info{
        font:9px Arial, Helvetica, sans-serif;
      }
      .info h5{
        font-size:1.2em!important;
      }
      .legend i{
          width: 12px;
          height: 12px;
      } 
      .max-prl{
        padding-right:0px;
        padding-left:0px;

      }
      
    }
    .leaflet-control-layers-toggle{
      height:50%;
    }
    label{
      font-size:0.8rem!important;
    }
    #datos_alerta{
      width:100% !important;
      height:300px !important;
    }
    #Infraestructura_critica{
      width:100% !important;
      height:200px !important;

    }  
    #hombre-mujer-1{
      width:100% !important;
      height:300px !important;
    }     
    #quintilespersonas{
      width:100% !important;
      height:300px !important;
    }
    #infraestructura
    {
      width:100% !important;
      height:200px !important;
    }
    canvas{
      cursor: pointer;
    }
    .leaflet-div-icon{
      background-color:transparent!important;
      border:0px!important;
    }
    .leaflet-control-geosearch.active form {
      height: 100%!important;
    }
    .leaflet-control-geosearch form input {
      height: 100%!important;
    }

    .leaflet-control-easyPrint-button-export{
        border-top-right-radius: 0px!important;
        border-bottom-right-radius: 0px!important;
    }
    .easyPrintHolder{
      background-color:#fff;
      margin-top:-30px!important;
    }
    .slidecontainer {
      width: 100%;
    }

    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 15px;
      border-radius: 5px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

    .slider:hover {
      opacity: 1;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4CAF50;
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4CAF50;
      cursor: pointer;
    }
    #info-pane{
      position: absolute;
      bottom: 20px;
      right: 10px;
      z-index: 400;
      padding: 1em;
      background: rgba(255, 255, 255, 0.8);;
    }
    
    #info-pane2{
      position: absolute;
      bottom: 225px;
      right: 10px;
      z-index: 400;
      padding: 1em;
      background: rgba(255, 255, 255, 0.8);;
    }
    .leaflet-control-layers label{
      min-height:40px;
    }

    .table1{
      color:#fff!important;
      font-size:10px!important;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
    }
    .table1 thead{
        background-color:#fff!important; 
        color:#000!important;
    } 
    .table1 tbody{
        background-color:#fff!important;
        color:#000!important;
         
    } 
    .table1 thead .pri{
        background-color:#43af2c!important; 
        color:#fff!important;
    } 
    .table1 tbody .pri{
        background-color:#91b22b!important; 
        color:#fff!important;
    } 
    .table2{
      color:#fff!important;
      font-size:10px!important;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
    }
    .table2 thead{
        background-color:#fff!important; 
        color:#000!important;
    } 
    .table2 tbody{
        background-color:#fff!important;
        color:#000!important;
         
    } 
    .table2 thead .pri{
        background-color:#f4511e!important; 
        color:#fff!important;
    } 
    .table2 tbody .pri{
        background-color:#ff8b00!important; 
        color:#fff!important;
    } 
    #tablaicdiv{
      max-height: 200px;
      margin-bottom: 10px;
      overflow-y:scroll;
      -webkit-overflow-scrolling: touch;
    }

    /*Estilo bindpopup */
    .another-popup .leaflet-popup-content-wrapper {
      background: #fff;
      color: #000;
      font-size: 12px;
      line-height: 24px;
      border-radius: 0px;
    }
    .another-popup .leaflet-popup-content-wrapper a {
      color: rgba(200, 200, 200, 0.1);
    }
    .another-popup .leaflet-popup-tip-container {
      width: 100px;
      height: 15px;
    }
    .another-popup .leaflet-popup-tip {
      background: transparent;
      border: none;
      box-shadow: none;
    }
      


    
    
    </style>
    <?php
    if($_SESSION['type']==2){
        echo '<link rel="stylesheet" href="'.$completarurl.'/css/estilo-onemi.css">';
    }
    ?>

</head>

<body id="page-top">
  
  <!-- Page Wrapper -->
  <div id="wrapper">

    <?php
    $valor=3;
    $valor2=1;
    include '../sidebar.php';
    include '../consultas_bd/conexion.php';
     $completarurl="";
    ?>


        <!-- Begin Page Content -->
        <div class="container-fluid">


          
           <div class="row mb-2">
               <div class="col-xl-9 mb-2 pr-0 max-prl" >
                  <div class="card shadow">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary text-uppercase">Mapa de eventos</h6> 
                    </div>
                    <div class="card-body p-0 " data-tap-disabled="true" style="height: 700px;">
                      <div id="map"></div>
                      
                      <div id="info-pane" class="leaflet-bar chart-container" style="display:none!important;">
                      
                        
                        <canvas id="chartCanvas"></canvas>  
                          
                      </div>
                      <div id="info-pane2" class="leaflet-bar chart-container" class="collapse" id="collapseExample"  style="display:none!important;">
                        <canvas id="incertidumbre"></canvas>
                      </div>
                    </div>
                  </div>


                  <div id="accordion3" class="col-xl-12 px-0">
                    <div class="card shadow">
                      <div class="card-header d-flex flex-row align-items-center justify-content-between" id="headingTres" data-toggle="collapse" data-target="#collapseTres" aria-expanded="true" aria-controls="collapseTres">                  
                          <button class="btn  text-uppercase">
                            <h6 class="mb-0 text-primary text-left text-uppercase ">Infraestructura Crítica</h6> 
                          </button>                    
                      </div>
                      <div id="collapseTres" class="collapse" aria-labelledby="headingTres" data-parent="#accordion3">
                        <div class="card-body p-x0 mb-2" data-tap-disabled="true" style="height: 100%;" id="tablaicdiv">
                          <table class="table1 table table-borderless rounded" id="tablaic">
                              <thead class="border-bottom border-secondary">
                                <tr> 
                                  <th >Infraestructura Crítica</th>
                                  <th scope="col" id="ict1" style="background-color:#3ddd37">Baja</th>
                                  <th id="ict2" style="background-color:#f0f226">Media</th>
                                  <th id="ict3" style="background-color:#e33d3d">Alta</th>
                                </tr>
                              </thead>
                              <tbody id="tablaictb">
                              <tr>
                              </tr> 
                              </tbody>
                            </table>
                            <div id="infraestructura">
                            <canvas id="Infraestructura_critica" class="canvas-graf"></canvas>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>


              </div>
              <div class="col-xl-3 pl-0 h-100 d-none max-prl pr-0" id="definicion">
               <div class="row">
                <div class="col-xl-12 mb-2">
                <div class="card shadow mb-0">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary text-uppercase">Definición Evento</h6> 
                  </div>
                  <div class="card-body p-0 " data-tap-disabled="true">
                      <div class="row m-2">
                        <div class="col-lg-12">
                          <label for="catastrofe">Tipo de amenaza:</label>
                        </div>
                        <div class="col-lg-12 mb-2">
                          <select id="catastrofe" class="form-control">
                            <option value="0"  data-cat="Sismo" selected>Sismo</option>
                            <option value="6"  data-cat="Fluvial" >Inundación</option>
                            <option value="12"  data-cat="Volcan" >Actividad volcanica</option>
                            <option value="18"  data-cat="Tsunami" >Tsunami</option>
                          </select>
                        </div>
                        <div class="col-lg-12">
                          <label for="amenaza">Asignar Intensidad:</label>
                        </div>
                        <div class="col-lg-12 mb-2">
                          <select id="amenaza" class="form-control">
                            <option value="0" data-val="3">I - IV (muy débil a moderado)</option>
                            <option value="2" data-val="2">V - VI (poco fuerte o a fuerte)</option>
                            <option value="4" data-val="1">VII – XII (muy fuerte a catastrófico)</option>
                          </select>
                        </div>

                        
                        <div class="col-lg-12 mb-2 mt-2">
                          <button class="btn btn-success" id="cambiar_sector" style="width:100%;">Ver</button></span>
                        </div>
                        <!--<div class="col-lg-12 mb-2 mt-2">
                          <button id="Crear_pdf" style="color:#fff!important;" class="btn btn-success w-100 " onclick="CreatePDFfromHTML()"><h5>PDF</h5></button>
                        </div>
                        
                        

                        <div class="col-lg-12 mb-2 ">
                          <button class="btn btn-success w-100 " id="downloadPdf" style="width:100%;">PDF</button></span>
                        </div>
                       
                        -->
                        <div class="col-lg-12 mb-2">
                          <button class="btn btn-primary" id="seleccionar-color" style="width:100%;">Ajustar Escenario</button></span>
                        </div>
                        <div class="col-lg-12 bloquear">
                          <label for="catastrofe">Seleccionar el nivel de afectación para ajustar</label>
                        </div>
                        <div class="col-lg-12 mb-2">
                          <div class="row px-2">
                            <div class="col-3 p-1" ><div class="seleccionado2 bloquear"  onclick="cambiarcolor(this,3)" value="20" id="rojo" style="background-color:#DE6A6A;height:40px;border-radius:6px;border: 2px solid rgb(127, 0, 0);border: 0.04rem solid rgba(0, 0, 0, .5);"></div>
                            </div>
                            <div class="col-3 p-1"><div class="bloquear" onclick="cambiarcolor(this,2)" value="60" id="amarillo" style="background-color:#E7E962;height:40px;border-radius:6px;border: 2px solid rgb(127, 0, 0);border: 0.04rem solid rgba(0, 0, 0, .5);"></div>
                            </div>
                            <div  class="col-3 p-1"> <div class="bloquear"  onclick="cambiarcolor(this,1)" value="100" id="verde" style="background-color:#6CDB68;height:40px;border-radius:6px;border: 2px solid rgb(127, 0, 0);border: 0.04rem solid rgba(0, 0, 0, .5);"></div>
                            </div>
                            <div  class="col-3  p-1"> <div class="bloquear"  onclick="cambiarcolor(this,0)" value="300" id="blanco" style="background-color:#F6F5F4;height:40px;border-radius:6px;border: 2px solid rgb(127, 0, 0);border: 0.04rem solid rgba(0, 0, 0, .5);"></div>
                            </div>
                          </div>
                        </div>




                        <div class="col-lg-12">
                          <label for="catastrofe">Cantidad de personas afectadas:</label>
                        </div>
                        <div class="col-lg-12">
                          <table class="table1 table table-borderless rounded">
                            <thead class="border-bottom border-secondary">
                              <tr> 
                                <th class="pri">TOTAL PERSONAS AFECTADAS</th>
                                <th scope="col" id="tp1" style="background-color:#3ddd37">0</th>
                                <th id="tp2" style="background-color:#f0f226">0</th>
                                <th id="tp3" style="background-color:#e33d3d">0</th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>ADULTOS MAYORES</th>
                                <td id="am1">0</td>
                                <td id="am2">0</td>
                                <td id="am3">0</td>
                                
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>ADULTOS</th>
                                <td id="ad1">0</td>
                                <td id="ad2">0</td>
                                <td id="ad3">0</td>
                                
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>JOVENES</th>
                                <td id="jo1">0</td>
                                <td id="jo2">0</td>
                                <td id="jo3">0</td>
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>NIÑOS</th>
                                <td id="ni1">0</td>
                                <td id="ni2">0</td>
                                <td id="ni3">0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="col-lg-12 ">
                          <label for="catastrofe">Infraestructura dañada:</label>
                        </div>
                        <div class="col-lg-12">
                          <table class="table2 table table-borderless rounded">
                            <thead class="border-bottom border-secondary">
                              <tr> 
                                <th class="pri">TIPO DE VIVIENDA AFECTADA</th>
                                <th scope="col" style="background-color:#3ddd37" id="tv1">Baja</th>
                                <th scope="col" style="background-color:#f0f226" id="tv2">Media</th>
                                <th scope="col" style="background-color:#e33d3d" id="tv3">Alta</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>HORMIGON</th>
                                <td id="ho1">0</td>
                                <td id="ho2">0</td>
                                <td id="ho3">0</td>
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>CEMENTO</th>
                                <td id="ce1">0</td>
                                <td id="ce2">0</td>
                                <td id="ce3">0</td>
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>TABIQUE</th>
                                <td id="ta11">0</td>
                                <td id="ta12">0</td>
                                <td id="ta13">0</td>
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>TABIQUE SIN FORRO</th>
                                <td id="ta21">0</td>
                                <td id="ta22">0</td>
                                <td id="ta23">0</td>
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>ADOBE</th>
                                <td id="adb1">0</td>
                                <td id="adb2">0</td>
                                <td id="adb3">0</td>
                              </tr>
                              <tr>
                                <th class="pri"><i class="fas fa-caret-right fa-fw"></i>PRECARIA</th>
                                <td id="pr1">0</td>
                                <td id="pr2">0</td>
                                <td id="pr3">0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                         
                        <!--
                        <div class="col-lg-12 mt-2">
                          <label for="text-center">Nivel de incertidumbre</label>
                          <div class="slidecontainer">
                            <input type="range" min="1" max="100" value="50" class="slider w-100 mb-2" id="myRange">
                            <label class="text-center">Porcentaje: <span id="demo"></span></label>
                          </div>
                        </div>
                        -->  
                        <!--  
                          <div class="col-lg-12">
                            <canvas id="datos_alerta"></canvas>
                          </div>
                         
                          <div class="col-4 px-1">
                            <label>Personas</label>
                            <input type="text" readonly class="form-control"  id="personas"></input>
                          </div>
                          <div class="col-4 px-1">
                            <label>Viviendas</label>
                            <input  type="text" readonly class="form-control" id="viviendas"></input>
                          </div>
                          <div class="col-4 px-1">
                            <label>Infraestructura</label>
                            <input type="text" readonly class="form-control"  id="ifraestructura"></input>
                          </div>
                          --> 
                          
                        
                          

                  </div>
                </div>
               </div>
             </div>
             

           </div>
         </div>
         
             <!-- fin mapa -->
              </div>
          <!--    
          <div class="row mb-2">
            <div class="col-xl-7 mb-2 max-prl" id="accordion1">
              <div class="card shadow">
                <div class="card-header" id="headingUno" data-toggle="collapse" data-target="#collapseUno" aria-expanded="true" aria-controls="collapseUno">
                  <h5 class="mb-0">
                    <button class="btn  text-uppercase font-weight-bold font-weight-bold">
                      <h6 class="mb-0">Ver - Personas afectadas</h6>
                    </button>
                  </h5>
                </div>
                <div id="collapseUno" class="collapse" aria-labelledby="headingUno" data-parent="#accordion1" >
                <div class="card-body p-0">
                   <div class="row mb-2 " style="margin-right:0px;margin-left:0px;">
                     <div class="col-xl-6 mb-1 p-0 v-center">
                        <canvas id="hombre-mujer-1" class="canvas-graf"></canvas>
                     </div>-->
                    <!-- <div class="col-xl-4 mb-1 p-0 v-center">
                        <canvas id="hombre-mujer-2"></canvas>
                     </div>-->        
                     <!--<div class="col-xl-6 mb-1 v-center p-1">
                      <div class="row" style="margin-right:0px;margin-left:0px;"> 
                      <canvas id="quintilespersonas" class="canvas-graf"></canvas>
                      
                     
                     </div> 
                    </div>--><!--    
                  </div>                   
                </div>
              </div>
              </div>
            </div>
            <div id="accordion2" class="col-xl-5 mb-2 max-prl">
              <div class="card shadow ">
                <div class="card-header" id="headingDos" data-toggle="collapse" data-target="#collapseDos" aria-expanded="true" aria-controls="collapseDos">
                  <h5 class="mb-0">
                    <button class="btn  text-uppercase">
                      <h6 class="mb-0">Ver - Infraestructura dañada</h6>
                    </button>
                  </h5>
                </div>
                <div id="collapseDos" class="collapse" aria-labelledby="headingDos" data-parent="#accordion2">
                  <div class="card-body">
                    <canvas id="infraestructura" class="canvas-graf"></canvas>
                  </div>  
                                 
                </div>
              </div>
            </div>-->
            <!--
            <div class="col-xl-5 mb-2">
              <div class="card shadow azul h-100">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-3 p-0 mb-1 ">
                        <canvas id="infraes1"></canvas>
                     </div>
                     <div class="col-md-3 p-0 mb-1">
                        <canvas id="infraes2"></canvas>
                     </div>
                     <div class="col-md-3 p-0 mb-1">
                        <canvas id="infraes3"></canvas>
                     </div>
                     <div class="col-md-3 p-0 mb-1">
                        <canvas id="infraes4"></canvas>
                     </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
          
          
          



            </div>
          </div>
       
          
      <footer class="sticky-footer bg-gradient-primary">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; KIMGENDATA</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>


  <div class="modal fade" id="confirmacion" tabindex="-1" role="dialog" aria-labelledby="confirmacion" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">¿Estas seguro de querer generar una alarma?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Selecciona el boton "Confirmar" en la parte inferior para generar la alarma.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-danger" href="hola">Confirmar</a>
        </div>
      </div>
    </div>
  </div>

   <!-- Modal -->
   <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="newModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Agregar</h4>
        </div>
        <div class="modal-body">
        <form role="form" method="post" id="agregar">
          <div class="form-group">
            <label for="encargado">Encargado</label>
            <input type="text" class="form-control" name="encargado" required>
          </div>
          <div class="form-group">
            <label for="tarea">Tarea</label>
            <input type="text" class="form-control" name="tarea" required>
          </div>
          <div class="form-group">
            <label for="contacto">Contacto</label>
            <input type="text" class="form-control" name="contacto" required>
          </div>
          <div class="form-group">
            <label for="actividad">Actividad</label>
            <input type="text" class="form-control" name="actividad" >
          </div>
          <div class="form-group">
            <label for="descripcion">Descripcion</label>
            <input type="text" class="form-control" name="descripcion" >
          </div>

          <button type="submit" class="btn btn-default">Agregar</button>
        </form>
        </div>

      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


  <!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="../js/sb-admin-2.min.js"></script>
  <script src="../vendor/chart.js/Chart.min.js"></script>
  <!--<script src="../js/tablas/tablas-editable2.js"></script>-->
  <!--<script src="../js/calculo_emergencias/calculos_mapa.js"></script>-->



  <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>
  <script src='https://unpkg.com/@turf/turf/turf.min.js'></script>
  <!--<script src='https://npmcdn.com/@turf/turf/turf.min.js'></script>-->

  

  <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
    integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
    crossorigin=""></script>  

  <script src="https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js" integrity="sha512-6LVib9wGnqVKIClCduEwsCub7iauLXpwrd5njR2J507m3A2a4HXJDLMiSZzjcksag3UluIfuW1KzuWVI5n/cuQ==" crossorigin=""></script>

  <script src="https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js" integrity="sha512-8twnXcrOGP3WfMvjB0jS5pNigFuIWj4ALwWEgxhZ+mxvjF5/FBPVd5uAxqT8dd2kUmTVK9+yQJ4CmTmSg/sXAQ==" crossorigin=""></script>

  <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.3.3/dist/esri-leaflet-geocoder.css"
    integrity="sha512-IM3Hs+feyi40yZhDH6kV8vQMg4Fh20s9OzInIIAc4nx7aMYMfo+IenRUekoYsHZqGkREUgx0VvlEsgm7nCDW9g=="
    crossorigin="">
  <script src="https://unpkg.com/esri-leaflet-geocoder@2.3.3/dist/esri-leaflet-geocoder.js"
    integrity="sha512-HrFUyCEtIpxZloTgEKKMq4RFYhxjJkCiF5sDxuAokklOeZ68U2NPfh4MFtyIVWlsKtVbK5GD2/JzFyAfvT5ejA=="
    crossorigin=""></script>


  <script src="https://unpkg.com/esri-leaflet-vector@2.0.2/dist/esri-leaflet-vector.js"
      integrity="sha512-keaVwrBxpBNq1XF5XEUvQ8NtoBbGPs/gKJJ3tp1qiudO3mTk9YEa6/uPpxX/G2HIjFrquj/xGg+p/c7nDp0wUg=="
      crossorigin=""></script>

  <!-- Clustered Feature Layer -->
  <script src="https://unpkg.com/esri-leaflet-cluster@2.0.1/dist/esri-leaflet-cluster.js"
      integrity="sha512-2/Nwrks+A2omjKeWrF4TKFLIrUbAhSl8EDEm6xunuwXXYqMoJI71PZtlW0/vqt9d3DOyP1md/bzAnNH2KuAhaQ=="
      crossorigin=""></script>

  <!-- Heatmap Feature Layer -->
  <script src="https://unpkg.com/esri-leaflet-heatmap@2.0.0/dist/esri-leaflet-heatmap.js"
      integrity="sha512-fSJJRfO4PK90PN9jKKBzBZmzlNRsR12QA/CqTTWgfUTfLMF1Nrx5ouOqlpzC8LQIP+Qz0/G4BlHSgxHrCLHuMA=="
      crossorigin=""></script>

  <!-- Renderers Plugin -->
  <script src="https://unpkg.com/esri-leaflet-renderers@2.0.6/dist/esri-leaflet-renderers.js"
      integrity="sha512-mhpdD3igvv7A/84hueuHzV0NIKFHmp2IvWnY5tIdtAHkHF36yySdstEVI11JZCmSY4TCvOkgEoW+zcV/rUfo0A=="
      crossorigin=""></script>

  <!-- Geoprocessing Plugin -->
  <script src="https://unpkg.com/esri-leaflet-gp@2.0.3/dist/esri-leaflet-gp.js"
      integrity="sha512-pYExthzLUD0etGnsvN2vg1LOEBd0nAfIwgZWlxavdBPNc2JT+f9hDQrXJrIhHK5WmuHVAuAb8jDekD36P/pXhg=="
      crossorigin=""></script>

      
  
  <script src='../vendor/Leaflet.markercluster-1.4.1/leaflet.markercluster.js'></script>
  
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
  <script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
  <script src="../vendor/leaflet-geosearch/leaflet-geosearch.js"></script>
  <script src='../js/leaflet/leaflet.ajax.min.js'></script>
  <script src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>
  <script src='../vendor/leaflet-image/leaflet-image.js'></script>
  <script src='../vendor/leaflet-image/bundle.js'></script>
  <script src='../vendor/leaflet-image/Leaflet.BigImage.min.js'></script>
  <script src='../vendor/leaflet-editable/Leaflet.Editable.js'></script>
  
  <script type="text/javascript" src="https:////api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.2/turf.min.js"></script>
  <script src="https://npmcdn.com/leaflet.path.drag/src/Path.Drag.js"></script>
  <script src="../vendor/bootstrap-notify/bootstrap-notify.min.js"></script>

  
  
  
      
          
  <!--<script src="../js/tablas/jquery.tabledit.min.js"></script>-->                  

<script type="text/javascript">

$( "#catastrofe" ).change(function() {
  var select = $( "#catastrofe option:selected" ).val();
  if(select==0){
    $('#amenaza option[value="0"]').text('I - IV (muy débil a moderado)');
    $('#amenaza option[value="2"]').text('V - VI (poco fuerte o a fuerte)');
    $('#amenaza option[value="4"]').text('VII – XII (muy fuerte a catastrófico)');
  }
  if(select==6){
    $('#amenaza option[value="0"]').text('0 - 30 mm Precipitaciones acumuladas');
    $('#amenaza option[value="2"]').text('31 – 70 mm Precipitaciones acumuladas');
    $('#amenaza option[value="4"]').text('Sobre 70 mm Precipitaciones acumuladas');
  }
  if(select==12){
    $('#amenaza option[value="0"]').text('Baja');
    $('#amenaza option[value="2"]').text('Media');
    $('#amenaza option[value="4"]').text('Alta');
  }
  if(select==18){
    $('#amenaza option[value="0"]').text('Altura de ola (m) 1 - 5 ');
    $('#amenaza option[value="2"]').text('Altura de ola (m) 6 - 10 ');
    $('#amenaza option[value="4"]').text('Altura de ola (m) Sobre 10 ');
  }

});


var datos=[0,1,2,3];
var datosseleccionado=3;
    function cambiarcolor(dato,numero){
            
            document.getElementById("rojo").classList.remove("seleccionado2");
            document.getElementById("amarillo").classList.remove("seleccionado2");
            document.getElementById("verde").classList.remove("seleccionado2");
            document.getElementById("blanco").classList.remove("seleccionado2");
            dato.classList.add("seleccionado2");
            datosseleccionado=datos[numero];
  }

 

  function loadTabla(){
  $('#editModal').modal('hide');

  $.get("./php/tabla.php","",function(data){
    $("#tabla").html(data);
  })

  }

  $("#buscar").submit(function(e){
  e.preventDefault();
  $.get("./php/busqueda.php",$("#buscar").serialize(),function(data){
    $("#tabla").html(data);
  $("#buscar")[0].reset();
  });
  });

  loadTabla();


  $("#agregar").submit(function(e){
    e.preventDefault();
    
    $.post("./php/agregar.php",$("#agregar").serialize(),function(data){
      
    });
    //alert("Agregado exitosamente!");
    $("#agregar")[0].reset();
    $('#newModal').modal('hide');
    loadTabla();
  });


</script>

  <script type="module">
        
      

      
          


        var geojson;
        var geojson2;
        var geojson3 = new Array();
        var geojson4;
        var geojson6;
        var geojson7;
        var datos_alerta_barras;
        var datos_barra;
        var hombremujer1_graf;
        var hombremujer1config;
        var chart;
        var incertidumbre;
        var Infraestructura_criticaconfig;
        var Infraestructura_critica_graf;
        var quintilespersonasdata;
        var quintilespersonas;
        var layer;
        var temp=true;
        var layerscontrol; 
        var total="";
        var changecolor=true;
        var array2;
        var array3;
        var array4;
        var arreglodatos=new Array();
        var repetiruna = true;
        var infraestructuradata;
        var infraestructura_graf;
        var catastrofe = "sismo";
        var valor_amenaza =0;
        var temp_nivel = 0;
        var buf;
        var temp_entidad_select;
        var layer2;  

        //center: [-38.7372302,-72.6241733,9],
        var map = L.map('map', {
          
          center: [-38.7372302,-72.6241733,9],
          zoom: 9,
          doubleClickZoom: false,
          zoomDelta: 0.25,
          zoomSnap: 0.25,
          zoomControl: false,
          editable: true
          
        });

        L.control.zoom({
        position:'topright'
        }).addTo(map);
        //var tile = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
        var tile = L.esri.basemapLayer('ImageryClarity').addTo(map);
        //L.esri.basemapLayer('ImageryLabels').addTo(map);      
        




        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div'); 
            //this._div = L.DomUtil.create('div', 'info'); 
            this.update();
            this.update2();
            return this._div;
        };

        function calculo_ic(props){
          var tem=0;
          for (let i = 2; i < archivos.length; i++) {      
                for (let j = 0; j < arreglodatos[i].length; j++) {
                  if(props.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                      tem=tem+1; 
                  }
                } 
              }
              

        }

        info.update = function (props){
          if(props){
    
              
              //document.getElementById("personas").value = props.TOTAL_PERS;
              //document.getElementById("viviendas").value = props.TOTAL_VIV_;
              calculo_ic(props);
              
              //this._div.innerHTML = '<h4>Poblacion Entidades</h4>' +  (props ?'<br>' + props.NOMBRE_LOCALIDAD + '</b><br/>  Numero de personas: '+ props.TOTAL_PERSONAS+'<br> Numero de hombres: ' + props.TOTAL_HOMBRES +'<br> Numero de mujeres: ' + props.TOTAL_MUJERES +'<br> Numero de P. originarios: ' + props.PUEBLOS_INDIGENA_ORIGINARIO+'<br> Numero de viviendas: ' + props.TOTAL_VIVIENDAS +'<br> Numero de IC: ' + (Math.floor(Math.random() * (13 - 5 + 1) ) + 5) : 'Sin datos ' );
          }
            
        };

        info.update2 = function (props){
          if(props){
              //document.getElementById("personas").value = props.PERSONAS; 
              //document.getElementById("viviendas").value = props.VIVIENDAS_;
              calculo_ic(props);


            //this._div.innerHTML = '<h4>Poblacion Manzanas</h4>' +  (props ?'<b>' + props.FID + '</b><br/>  Numero de personas: '+ props.PERSONAS+'<br> Numero de viviendas: ' + props.VIVIENDAS_ +'<br> Numero de IC: ' + (Math.floor(Math.random() * (13 - 5 + 1) ) + 5) : 'Sin datos ' );
          }        
        };

        info.addTo(map);

                      

        var poly=[];
        var markers=[];
        var Markers2 = [];
        var multipoly=[];
        var contaclick=0;
        var contarray=0;
        var popup = L.popup();
        //var archivos=["entidadessismo","manzanasismo","Agua potable rural","Bocatomas","Generadores y subestaciones de electricidad","Jardines JUNJI","Caletas pesqueras","Cuarteles de bomberos","Grifos","Jardines INTEGRA","Consultorios","Carceles y penitenciarias","Hospitales","Plantas de tratamiento","Postas Rurales","Puentes","Puntos de descarga","Red vial","Establecimientos educacionales"]; 
        var archivos=["entidades","manzanas","Alcaldia del Mar","Bancos","Bocatomas","Caletas pesqueras","Carabineros","Cementerio","Central hidroelectrica","Compañias de bomberos","Establecimiento educacional","Establecimientos de salud secundario","Estacion de servicio","Farmacias","Hospitales","Jardin Integra","Jardin Junji","Municipalidad","Plantas aguas servidas","Posta rural","Puentes","Puntos de encuentro transitorios","Puntos de descarga","Red aeroportuaria","Supermercados","Tratamiento de residuos"];

        //var amenazas_nombres=["entidadesinundacion","manzanainundacion","entidadesvolcanes","manzanavolcanes","entidadestsunami","manzanatsunami","entidadessismo","manzanasismo"];
        var amenazas_nombres=["entidadessismo2","manzanasismo2","entidadessismo2","manzanasismo2","entidadessismo3","manzanasismo3","entidadesinundacion1","manzanainundacion1","entidadesinundacion2","manzanainundacion2","entidadesinundacion3","manzanainundacion3","entidadesvolcanismo1","manzanavolcanismo1","entidadesvolcanismo2","manzanavolcanismo2","entidadesvolcanismo3","manzanavolcanismo3","entidadestsunami1","manzanatsunami1","entidadestsunami2","manzanatsunami2","entidadestsunami3","manzanatsunami3"];

        
         
        var counties= new Array();
        var counties_amenaza= new Array();
        var conta=0;


        
        archivos.forEach(function(entry) {
              counties[conta] = $.ajax({
              url: "../shapegeo/"+encodeURIComponent(entry)+".geojson",
              dataType: "json",
              
              error: function(xhr) {
                  console.log(xhr);
              }
            })
            conta++;
        });  

        var conta=0;
        amenazas_nombres.forEach(function(entry) {
            counties_amenaza[conta] = $.ajax({
              url: "../shapegeo/"+entry+".geojson",
              dataType: "json",
              
              error: function(xhr) {
                  console.log(xhr);
              }
            })
            conta++;
        });

      var jsonTest = $.ajax({
            url: "../shapegeo/grilla.geojson",
            dataType: "json",
            
            error: function(xhr) {
                console.log(xhr);
            }
          });           
        

      function getColor(d) {
          if(valor_amenaza==1){
            return d == 1  ? '#3ddd37':
                              '#fff';
          }
          if(valor_amenaza==2){
            return d == 2 ? '#f0f226' :
                            '#fff';
          }
          if(valor_amenaza==3){
            return d == 3 ? '#e33d3d' :
                            '#fff';                  
          }
          if(valor_amenaza==0){
            return d == 3 ? '#e33d3d' :
                  d == 2  ? '#f0f226' :
                  d == 1  ? '#3ddd37' :
                            '#fff';
          }
                 
      }

      function getColorbuffer(d) {
          return d == 3 ? '#0a0a0a' :
                d == 2  ? '#535353' :
                d == 1  ? '#a5a5a5' :
                          '#ffffff';       
      }

      function stylebuffer(feature) {
        
        //console.log($("#catastrofe").find(':selected').attr('data-cat'));
        //console.log($("#amenaza").find(':selected').attr('data-val'));

        var templayervalue= $("#catastrofe").find(':selected').attr('data-cat')+"C"+$("#amenaza").find(':selected').attr('data-val');

        return {
            fillColor: getColorbuffer(feature.properties[templayervalue]),
            weight: 2,
            opacity: 0.5,
            color: 'black',
            dashArray: '5.5',
            fillOpacity: 0.5
        };
      }

      
      function stylenivel(feature) {

          return {
              fillColor: getColor(feature.properties.gridecode),
              weight: 2,
              opacity: 0.5,
              color: 'black',
              dashArray: '3',
              fillOpacity: 0.5
          };
      }

      

      function style(feature) {
        return {
            fillColor: getColor(feature.properties.gridcode),
            weight: 2,
            opacity: 0.5,
            color: 'black',
            dashArray: '3',
            fillOpacity: 0.5
        };
      }

      function style2(feature) {
          return {
              fillColor: getColor(feature.properties.gridcode),
              weight: 2,
              opacity: 0.5,
              color: 'black',
              dashArray: '3',
              fillOpacity: 0.5
          };
      }

      function style3(feature) {
          return {
              fillColor: getColor(feature.properties.Ponderacio),
              weight: 2,
              opacity: 0.5,
              color: 'black',
              dashArray: '3',
              fillOpacity: 0.5
          };
      }


      function highlightFeature(e) {
        var layer = e.target;
        var feature = layer.feature;

        layer.bindPopup('<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>',{maxHeight: 300, closeOnClick: true});


        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
      }

      function highlightFeature3(e) {
        var layer = e.target;
        var feature = layer.feature;

        //layer.bindPopup('<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>',{maxHeight: 300, closeOnClick: true});


        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
        info.update(layer.feature.properties);
      }
      function highlightFeature4(e) {
        var layer = e.target;
        var feature = layer.feature;

        //layer.bindPopup('<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>',{maxHeight: 300, closeOnClick: true});


        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
        info.update(layer.feature.properties);
      }

      function highlightFeature2(e) {
        var layer = e.target;
        var feature = layer.feature;

        layer.bindPopup('<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>',{maxHeight: 300, closeOnClick: true});


        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        layer.setStyle({
            weight: 5,
            color: '#fff',
            dashArray: '',
            fillOpacity: 0.7
        });



        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update2(layer.feature.properties);
      }
      

      import {com_region,centros} from '../js/constantes/constantes.js';



      
      
      document.getElementById("cambiar_sector").onclick = function(){
        catastrofe = $("#catastrofe").children("option:selected").val();
        //valor_amenaza = $("#amenaza").children("option:selected").val();
        valor_amenaza = 0;
        temp_nivel = Number($("#catastrofe").children("option:selected").val())+Number(($("#amenaza").children("option:selected").val()));
        
        //counties[0]=counties_amenaza[catastrofe];
        //counties[1]=counties_amenaza[parseInt(catastrofe)+1];
        //counties[0]=counties_amenaza[0];
        //counties[1]=counties_amenaza[1];

        for (var i = 0; i < counties.length; i++) {
              arreglodatos[i]=[];
        }  
       

       
          if (geojson && geojson2 && geojson3 ) {
            map.removeLayer(geojson);map.removeLayer(geojson2);map.removeLayer(geojson6); map.removeLayer(geojson7);


            if (map.hasLayer(buf)) {
                map.removeLayer(buf);
            }
            for (let i = 0; i < geojson3.length; i++) {
              map.removeLayer(geojson3[i]);   
            }
          map.removeLayer(geojson3);  
        }
          var seleccionado = comuna;
          var tempo=Object.values(centros[seleccionado]);

          map.flyTo([tempo[0][0],tempo[0][1]], tempo[1]);
          var tempcounties=[];
          tempcounties[0]= counties[0].responseJSON.features;
          tempcounties[1]= counties[1].responseJSON.features;
          
          
          var cont = 0;
          

          for (var i = 0; i < tempcounties[0].length; i++) {
              //var polycom= tempcounties[0][i].properties.NOM_COMUNA;
              var polycom= tempcounties[0][i].properties.NOMBRE_COM;
              if(polycom==comuna.toUpperCase()){
                arreglodatos[0].push(tempcounties[0][i]);          
              }
          }

          for (var i = 0; i < tempcounties[1].length; i++) {
              var polycom2= tempcounties[1][i].properties.COMUNA;
              //if(polycom2==comuna.toUpperCase() ){
                arreglodatos[1].push(tempcounties[1][i]);
                
              //}
          }

          for (var i = 2; i < counties.length; i++) {
              tempcounties[i]=counties[i].responseJSON.features;
              
              for (var j = 0; j < tempcounties[i].length; j++) {
                
                var polycom3;
                
                if(tempcounties[i][j].properties.COMUNA){
                  polycom3= tempcounties[i][j].properties.COMUNA;
                }
                else if (tempcounties[i][j].properties.Comuna){
                  polycom3= tempcounties[i][j].properties.Comuna;
                }
                else{
                  polycom3= tempcounties[i][j].properties.comuna;
                }

                

                if(polycom3.toUpperCase()==comuna.toUpperCase()){
                  arreglodatos[i].push(tempcounties[i][j]);
                  
                }
              }
          }

        //obtener un color random con una opacidad de 0.4 
        function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          var colorfinal="";

          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }

          colorfinal=convertHex(color,0.4);
          return colorfinal;

          function convertHex(hex,opacity){
              var result;
              var hex = hex.replace('#','');
              var r = parseInt(hex.substring(0,2), 16);
              var g = parseInt(hex.substring(2,4), 16);
              var b = parseInt(hex.substring(4,6), 16);

              result = 'rgba('+r+','+g+','+b+','+opacity+')';

              return result;
          }
        } 
        //fin color random 

        function click(e){
          var layer = e.target;
          var feature = layer.feature;
          
          //console.log(feature.geometry.coordinates);
          


          if(changecolor==false){  
              layer.unbindPopup();
              
              feature.properties.gridecode=datosseleccionado;
              
              layer.setStyle({
                  weight: 5,
                  fillColor: '#5588ee',
                  dashArray: '',
                  fillOpacity: 0.7
              });
              feature.properties.MANZENT_I = temp_entidad_select;
              updateChart();
              if (!layer2){
                layer2 = L.GeoJSON.geometryToLayer(feature);
                layer2.addTo(map);
                layer2.enableEdit();  
              }
                
            }
            else{
               layer.bindPopup('<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>',{maxHeight: 300, closeOnClick: true});

            }
            
          }

         
        

          function dblclick(e){
            console.log("doubleclic");
            var layer = e.target;
            var feature = layer.feature;

            for (var k in counties_amenaza[temp_nivel].responseJSON.features) {
              if (counties_amenaza[temp_nivel].responseJSON.features[k].properties.MANZENT_I ==temp_entidad_select){
                //console.log(counties_amenaza[temp_nivel].responseJSON.features);
                var json = layer2.toGeoJSON();
                //console.log(counties_amenaza[temp_nivel].responseJSON.features[k].geometry.coordinates,json.geometry.coordinates);
                //geojson6._layers[k].feature.geometry.coordinates=0;
                counties_amenaza[temp_nivel].responseJSON.features[k].geometry.coordinates = json.geometry.coordinates;
                //console.log(counties_amenaza[temp_nivel].responseJSON.features[k].geometry.coordinates,json.geometry.coordinates);
                map.removeLayer(geojson6);
                geojson6 = L.geoJson(counties_amenaza[temp_nivel].responseJSON.features, {style: stylenivel, onEachFeature: onEachFeature4});
                map.addLayer(geojson6);
                console.log(temp_entidad_select,json.geometry.coordinates[0])
                $.ajax({        
                  url: "updateescenario/newdata.php",        
                  data: {poly:json.geometry.coordinates[0]},
                  type:  'post'
                    }).done(function(data) { 
                      console.log(data);

                        var notify = $.notify('<strong>Actualizado</strong> Polygono cargado correctamente', {
                            type: 'info',
                            allow_dismiss: false,
                            showProgressbar: false,
                            delay: 3000,
                            animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                          },
                            placement: {
                            from: "bottom"
                          },
                        });
                  });


              }
            }

          }
          

          function onEachFeature(feature, layer) {
            layer.on({ mouseover: highlightFeature, mouseout: resetHighlight, click: click});
          }

          function onEachFeature2(feature, layer) {
            layer.on({ mouseover: highlightFeature2, mouseout: resetHighlight2, click: click});
          }

          function onEachFeature3(feature, layer) {
            var buf;
            map.on('zoomend', function() {
            var zoomlevel = map.getZoom();
                if (zoomlevel  <15){
                    if (map.hasLayer(buf)) {
                        map.removeLayer(buf);
                        
                    } else {
                        //console.log("no point layer active");
                    }
                }
                if (zoomlevel >= 15){
                    if (map.hasLayer(buf)){
                        //console.log("layer already added");
                    } else {
                      var unit = 'meters';
                      var buffered = turf.buffer(feature, 100, unit);
                      buf = L.geoJson(buffered,{style: stylebuffer(feature)});
                      buf.addTo(map);




                    }
                }
            //console.log(buf);
            });

            var text;
            text = '<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>';
            if(feature.properties.FID_Puente || feature.properties.FID_Puente == 0){
               //var text = '<pre>'+JSON.stringify(feature.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>';
               text = '<pre> Nombre de la ruta : '+feature.properties.NOM_RUTA+'</pre><pre> Nombre : '+feature.properties.NOM_PUENTE+'</pre><pre> Largo del puente: '+feature.properties.LARGO+'</pre><pre> Ancho del puente: '+feature.properties.ANCHO+'</pre><pre> Número de vigas: '+feature.properties.NUM_VIGAS+'</pre><pre> Cauce: '+feature.properties.CAUCE_QUEB+'</pre>';
            }
            if(feature.properties.FID_Boca_1 || feature.properties.FID_Boca_1 == 0){
              text = '<pre> Tipo de fuente : '+feature.properties.Tip_fuen+'</pre><pre> Nombre bocatoma : '+feature.properties.Nom_can+'</pre><pre> Tipo de captación: '+feature.properties.Tip_cap+'</pre>';
            }
            if(feature.properties.FID_Caleta || feature.properties.FID_Caleta == 0){
              text = '<pre> Nombre : '+feature.properties.DESCOBRA+'</pre><pre> Estado de la infraestructura : '+feature.properties.ESTADOGRAL+'</pre><pre> Función: '+feature.properties.PROGRAMA+'</pre>';
            }
            if(feature.properties.FID_Carabi || feature.properties.FID_Carabi == 0){
              text = '<pre> Nombre de la unidad : '+feature.properties.NOMBRE_UNI+'</pre><pre> Tipo de Unidad policial : '+feature.properties.TIPO_DE_UN+'</pre><pre> Nombre : '+feature.properties.NOMBRE_DE+'</pre><pre> Prefectura : '+feature.properties.PREFECTURA+'</pre>';
            }
            if(feature.properties.FID_bomber || feature.properties.FID_bomber == 0){
              text = '<pre> Compañía de bomberos : '+feature.properties.Compañia+'</pre><pre> Tipo de Unidad policial : '+feature.properties.Direccion+'</pre><pre> Teléfono : '+feature.properties.Telefono+'</pre><pre> Prefectura : '+feature.properties.PREFECTURA+'</pre>';
            }
            if(feature.properties.FID_Establ || feature.properties.FID_Establ == 0){
              text = '<pre> Nombre del establecimiento : '+feature.properties.NOMBRE_RBD+'</pre><pre> Dependencia : '+feature.properties.DEPENDENCI+'</pre><pre> Teléfono fijo : '+feature.properties.FONO+'</pre><pre> Teléfono celular : '+feature.properties.CELULAR+'</pre><pre> Dirección : '+feature.properties.DIRECION+'</pre>';
            }
            if(feature.properties.FID_Farmac || feature.properties.FID_Farmac == 0){
              text = '<pre> Cadena : '+feature.properties.Cadena+'</pre><pre> Comuna: '+feature.properties.Comuna+'</pre>';
            }
            if(feature.properties.FID_Jardin || feature.properties.FID_Jardin == 0){
              text = '<pre> Nombre del Establecimiento : '+feature.properties.NOMBRE+'</pre><pre> Dirección : '+feature.properties.DIRECCION+'</pre><pre> Programa empleado : '+feature.properties.PROGRAMA_E+'</pre>';
            }
            if(feature.properties.FID_Centra || feature.properties.FID_Centra == 0){
              text = '<pre> Nombre : '+feature.properties.nombre+'</pre><pre> Propiedad : '+feature.properties.propiedad+'</pre><pre> Tipo : '+feature.properties.tipo+'</pre>';
            }
            if(feature.properties.FID_Cement || feature.properties.FID_Cement == 0){
              text = '<pre> Nombre : '+feature.properties.cementerio+'</pre><pre> Comuna : '+feature.properties.comuna+'</pre>';
            }
            if(feature.properties.FID_Bencin || feature.properties.FID_Bencin == 0){
              text = '<pre> Calle : '+feature.properties.calle+'</pre><pre> Empresa : '+feature.properties.distribuid+'</pre>';
            }
            if(feature.properties.FID_Munici || feature.properties.FID_Munici == 0){
              text = '<pre> Nombre de la Municipalidad : '+feature.properties.Nombre+'</pre>';
            }
            if(feature.properties.FID_Postas || feature.properties.FID_Postas == 0){
              text = '<pre> Tipo de establecimiento : '+feature.properties.ESTAB_ES_1+'</pre><pre> Nivel de atención : '+feature.properties.NIV_ATE+'</pre><pre> Nombre del establecimiento : '+feature.properties.NOM_OFIC+'</pre><pre> Dirección : '+feature.properties.DIRECCION+'</pre>';
            }
            if(feature.properties.FID_Puntos || feature.properties.FID_Puntos == 0){
              text = '<pre> Nombre del Sector : '+feature.properties.nombre+'</pre>';
            }
            if(feature.properties.FID_Superm || feature.properties.FID_Superm == 0){
              text = '<pre> Cadena : '+feature.properties.Cadena+'</pre><pre> Comuna : '+feature.properties.comuna+'</pre>';
            }
            
            layer.bindPopup(text,{maxWidth: 400, maxHeight: 600, closeOnClick: true, className : 'another-popup'});            
          }
          function onEachFeature4(feature, layer) {
            layer.on({ mouseover: highlightFeature3, mouseout: resetHighlight3, click: click, dblclick: dblclick});
          }
          function onEachFeature5(feature, layer) {
            layer.on({ mouseover: highlightFeature4, mouseout: resetHighlight4, click: click, dblclick: dblclick});
          }

          function resetHighlight(e) {
              geojson.resetStyle(e.target);
              info.update();
          }

          function resetHighlight2(e) {
              geojson2.resetStyle(e.target);
              info.update2();
          }
          function resetHighlight3(e) {
              geojson6.resetStyle(e.target);
              info.update();
          }
          function resetHighlight4(e) {
              geojson7.resetStyle(e.target);
              info.update();
          }

          var icono = new Array();
          
          for (let k = 0; k < arreglodatos.length; k++) {     
            /*
              var pt1 = turf.point(arreglodatos[17][0].geometry.coordinates);
              var pt2 = turf.point(arreglodatos[17][1].geometry.coordinates);
              

              var distance = turf.distance(pt1, pt2);
              console.log(distance);
              var dist= Math.round(distance);

              var buffered = turf.buffer(arreglodatos[17][1], 500, {units: 'kilometers'});
              var buffered = turf.buffer(arreglodatos[17][0], 500, {units: 'kilometers'});

              var options = {tolerance: 0.01, highQuality: false};
              var simplified = turf.simplify(arreglodatos[17][0], options);
              console.log(simplified);
              */

              icono[k] = L.icon({
                  iconUrl: '../files/icono_mapa/'+encodeURIComponent(archivos[k+2])+'.png',
                  iconSize:     [22, 22], // size of the icon
                  shadowSize:   [50, 64], // size of the shadow
                  popupAnchor:  [-3, 0],
                  
              });              
            
          }
          geojson6 = L.geoJson(counties_amenaza[temp_nivel].responseJSON.features, {style: stylenivel, onEachFeature: onEachFeature4});
          geojson7 = L.geoJson(counties_amenaza[temp_nivel+1].responseJSON.features, {style: stylenivel, onEachFeature: onEachFeature5});
          
          arreglodatos[0].forEach(function callback(value, index, array) {
            value.properties.gridcode=0;
            geojson6.eachLayer(function (e) {  
              /*
              console.log(value);
              var latLong = [];
              var thisTime = true;
              value.geometry.coordinates.forEach(function(locationArray){

                locationArray.forEach(function(location){
                    console.log(location[1] , location[0]);
                    latLong.push([location[1] , location[0]]);
                });
              });  

              var polygon = L.polygon(latLong).addTo(map);
              polygon.enableEdit();
              latLong = [];
              */
              if(value.properties.MANZENT_I == e.feature.properties.MANZENT_I){
                
                value.properties.gridcode = e.feature.properties.gridecode;
              }

            });
          });
          


          arreglodatos[1].forEach(function callback(value, index, array) {
            value.properties.gridcode=0;
            geojson7.eachLayer(function (e) {
              
              if(value.properties.MANZENT_I == e.feature.properties.MANZENT_I){
                value.properties.gridcode = e.feature.properties.gridecode;
              }
                
            });

          });

          geojson = L.geoJson(arreglodatos[0], {style: style, onEachFeature: onEachFeature});
          

          geojson2 = L.geoJson(arreglodatos[1], {style: style2, onEachFeature: onEachFeature2}); 
          //geojson6 = L.esri.FeatureLayer({url: "https://services7.arcgis.com/REyHDX7diNDrZlqv/ArcGIS/rest/services/Grilla/FeatureServer/0"});
          //geojson6 = L.geoJson(jsonTest.responseJSON.features, {style: style, onEachFeature: onEachFeature});
          
          
          //console.log(arreglodatos[0]);
          

         
          
          //map.addLayer(geojson);
          //map.addLayer(geojson2);
          map.addLayer(geojson6);
          map.addLayer(geojson7);
          
          
          
          //geojson6.addTo(map);
          
          map.on('zoom move', updateChart);
          geojson.on('load', updateChart);


          for (let i = 2; i < arreglodatos.length; i++) {
             
             //geojson3[i]= L.geoJSON(arreglodatos[i+2], {pointToLayer: function (feature, latlng) {return L.marker(latlng, {icon: icono[i]});},onEachFeature: onEachFeature3}).addTo(map);
             geojson3[i-2]= L.geoJSON(arreglodatos[i], {pointToLayer: function (feature, latlng) {return L.marker(latlng, {icon: icono[i-2]});},onEachFeature: onEachFeature3});
             Markers2[i-2]= new L.markerClusterGroup({
                iconCreateFunction: function(cluster) {
                  //return icono[i-2];
                  
                  //var temporal='<img src="../files/icono_mapa/'+encodeURIComponent(archivos[i])+'.png" class=" text-center leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0" style="margin-left: -10px; margin-top: -10px; width: 22px; height: 22px; z-index: 418; outline: none;">';
                  //return L.divIcon({ html: temporal+'<span style="position: ABSOLUTE;top:-10px;left:-4px;color:#ffff00;z-index:800;}">' + cluster.getChildCount() + '</span>' });
                  var temporal='<img src="../files/icono_mapa/'+encodeURIComponent(archivos[i])+'.png" class=" text-center leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0" style="margin-left: -10px; margin-top: -10px; width: 22px; height: 22px; z-index: 418; outline: none;">';
                  return L.divIcon({ html: temporal });
                
                },
                animateAddingMarkers: true,
                maxClusterRadius: function(zoom) { return 20; }
             });

            $(".leaflet-marker-icon").removeClass("leaflet-div-icon");

             
             Markers2[i-2].addLayer(geojson3[i-2]);
             
             map.addLayer(Markers2[i-2]);
          }
          
          

          


        if(temp==false){
          map.removeControl(layerscontrol);

        }  
        if(temp==true){
          temp=false;
        }
        
          document.getElementById('seleccionar-color').onclick= function(){
            
          if($('.seleccionado2').length!=0){

            if(changecolor==true){
                $('.bloquear')
                document.getElementById("seleccionar-color").classList.add("seleccionado2");
                $(".bloquear").css("display", "block");

                
                changecolor=false;


            }
            else{

              document.getElementById("seleccionar-color").classList.remove("seleccionado2");
              $(".bloquear").css("display", "none");
              
              changecolor=true;
            }

        }



        }
        var textocompleto="";

        layer={"<div style='margin-left: 0.5rem;margin-bottom:0px;'> Entidades Rurales </div>": geojson," <div style='margin-left: 0.5rem;margin-bottom:0px;'> Entidades Urbanas </div> <hr>": geojson2,"<div style='margin-left: 0.5rem;margin-bottom:0px;'> Amenaza Rural </div>": geojson6,"<div style='margin-left: 0.5rem;margin-bottom:0px;'> Amenaza Urbano </div>": geojson7};
        function leyenda(){
          var k=0;
          for (let i = 2; i < arreglodatos.length; i++) {            
            layer["<span><span class='Textolayer'>"+archivos[i]+": </span> <img class='Imagenlayer' src='../files/icono_mapa/"+encodeURIComponent(archivos[i])+".png' height='5%' width='15%'></span>"] = Markers2[k]; 
            k=k+1;
          }
        }

        leyenda();
        //element["rural"] = geojson3[0]; 
         

        
        {closeOnClick: true}
        layerscontrol= L.control.layers('',layer, {position:'topleft'});
        layerscontrol.addTo(map);


       

        //document.getElementById("collapseDos").classList.add("show");
        //document.getElementById("collapseUno").classList.add("show");
        document.getElementById("collapseTres").classList.add("show");
        
        
        for (let i = 2; i < archivos.length; i++) {
          Infraestructura_criticaconfig.data.labels[i-2]=archivos[i];
          
          Infraestructura_criticaconfig.data.datasets[0].backgroundColor[i-2]=getRandomColor();    
        }
        
        Infraestructura_critica_graf.update();   
        
              
      }  
     

      // leyenda que aparece a la derecha del mapa 
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {

          var div = L.DomUtil.create('div', 'info legend'),
            grades = [1, 2, 3],
            labels = [];
          var valor=["Bajo","Medio","Alto"];
          labels.push('<h5>Nivel de afectación</h5>');
          for (var i = 0; i < grades.length; i++) {

            labels.push(
              '<i style="background:' + getColor(grades[i]) + '"></i> <p class="my-0">' + valor[i]+'</p>' );
          }

          div.innerHTML = labels.join('<br>');
          return div;
        };

        legend.addTo(map);

      $( "#definicion" ).removeClass( "d-none" );

      var geojson="";
      var geojson2="";
      var geojson3=new Array();
      var geojson4="";
      var geojson6="";
      var geojson7="";
      
      
      map.on('zoomend', function() {
        var currentZoom = map.getZoom();
        if(currentZoom >= 15) {
          $('.leaflet-marker-icon').css({'width':'22px','height':'22px'});
        }
        else {
          $('.leaflet-marker-icon').css({'width':'22px','height':'22px'});
        }
      });


      

      function updateChart(){
          var zerocinco=[0,0,0,0];
          var seiscatorce=[0,0,0,0];
          var quincesesentaicuatro=[0,0,0,0];
          var sesentaisincomas=[0,0,0,0];
          var hormigon =[0,0,0,0];
          var cemento=[0,0,0,0];
          var tabique1=[0,0,0,0];
          var tabique2=[0,0,0,0];
          var adobe=[0,0,0,0];
          var precarios=[0,0,0,0];
          var mujerestotalafectada;
          var hombretotalafectada;
          var infracritica1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          var infracritica2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          var infracritica3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          var infracritica4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          var tempsuma=0;
          var m = 0;
          var valor_amenaza_temp=0;
          var Superficie1=0;
          var Superficie2=0;
          var Superficie3=0;
          var Superficie3=0;
          var incerti=0;
          var tempincerti=0;
          var incerarray =[0];
          
          geojson2.eachLayer(function (e) {

          //datos de manzanas, urbano
            if(map.getBounds().intersects(e.getBounds())) { 
              
              valor_amenaza_temp=valor_amenaza;
              if (valor_amenaza==0){
                valor_amenaza_temp=3;
              }
            //for (var m = 0; m < arreglodatos[1].length; m++) {
              if(e.feature){

                geojson7.eachLayer(function (i) {  
                  if(e.feature.properties.MANZENT_I == i.feature.properties.MANZENT_I){
                    if(i.feature.properties.Shape__Are!=0 && e.feature.properties.Shape__Are!=0){
                      tempincerti = ((i.feature.properties.Shape__Are*(100))/(e.feature.properties.Shape__Are));
                      //console.log(i.feature.properties.Shape__Are,e.feature.properties.Shape__Are);
                      //console.log(e.feature.properties.MANZENT_I,tempincerti,i.feature.properties.Shape_Area,e.feature.properties.Shape__Are);
                      incerarray.push(tempincerti);
                    }
                  }
                });

                if(e.feature.properties.gridcode == 1){
                  Superficie1=Superficie1+e.feature.properties.Shape__Are;
                  hormigon[1]=hormigon[1]+parseInt(e.feature.properties.VIV_HORMIG);
                  cemento[1]=cemento[1]+parseInt(e.feature.properties.VIV_ALBANI);
                  tabique1[1]=tabique1[1]+parseInt(e.feature.properties.VIV_TABIQU);
                  tabique2[1]=tabique2[1]+parseInt(e.feature.properties.VIV_TABI_1);
                  adobe[1]=adobe[1]+parseInt(e.feature.properties.VIV_ADOBE);
                  precarios[1]=precarios[1]+parseInt(e.feature.properties.VIV_PARED_);

                  if(Number.isInteger(parseInt(e.feature.properties.DE_0_A_5_A))){
                    zerocinco[1]=zerocinco[1]+parseInt(e.feature.properties.DE_0_A_5_A);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_6_A_14_))){
                    seiscatorce[1]=seiscatorce[1]+parseInt(e.feature.properties.DE_6_A_14_);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_15_A_64))){
                    quincesesentaicuatro[1]=quincesesentaicuatro[1]+parseInt(e.feature.properties.DE_15_A_64);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_65_MAS_))){
                    sesentaisincomas[1]=sesentaisincomas[1]+parseInt(e.feature.properties.DE_65_MAS_);
                  }

                  for (let i = 2; i < archivos.length; i++) { 
                    
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                          infracritica1[i-2]=1+infracritica1[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica1[i-2]=1+infracritica1[i-2];                  
                        }
                      }
                    }
                  }


                }
                if(e.feature.properties.gridcode == 2){
                  Superficie2=Superficie2+e.feature.properties.Shape__Are;
                  hormigon[2]=hormigon[2]+parseInt(e.feature.properties.VIV_HORMIG);
                  cemento[2]=cemento[2]+parseInt(e.feature.properties.VIV_ALBANI);
                  tabique1[2]=tabique1[2]+parseInt(e.feature.properties.VIV_TABIQU);
                  tabique2[2]=tabique2[2]+parseInt(e.feature.properties.VIV_TABI_1);
                  adobe[2]=adobe[2]+parseInt(e.feature.properties.VIV_ADOBE);
                  precarios[2]=precarios[2]+parseInt(e.feature.properties.VIV_PARED_);

                  if(Number.isInteger(parseInt(e.feature.properties.DE_0_A_5_A))){
                    zerocinco[2]=zerocinco[2]+parseInt(e.feature.properties.DE_0_A_5_A);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_6_A_14_))){
                    seiscatorce[2]=seiscatorce[2]+parseInt(e.feature.properties.DE_6_A_14_);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_15_A_64))){
                    quincesesentaicuatro[2]=quincesesentaicuatro[2]+parseInt(e.feature.properties.DE_15_A_64);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_65_MAS_))){
                    sesentaisincomas[2]=sesentaisincomas[2]+parseInt(e.feature.properties.DE_65_MAS_);
                  }

                  for (let i = 2; i < archivos.length; i++) { 
                    
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                          infracritica2[i-2]=1+infracritica2[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica2[i-2]=1+infracritica2[i-2];                  
                        }
                      }
                    }
                  }
                }
                if(e.feature.properties.gridcode == 3){
                  Superficie3=Superficie3+e.feature.properties.Shape__Are;
                  hormigon[3]=hormigon[3]+parseInt(e.feature.properties.VIV_HORMIG);
                  cemento[3]=cemento[3]+parseInt(e.feature.properties.VIV_ALBANI);
                  tabique1[3]=tabique1[3]+parseInt(e.feature.properties.VIV_TABIQU);
                  tabique2[3]=tabique2[3]+parseInt(e.feature.properties.VIV_TABI_1);
                  adobe[3]=adobe[3]+parseInt(e.feature.properties.VIV_ADOBE);
                  precarios[3]=precarios[3]+parseInt(e.feature.properties.VIV_PARED_);

                  if(Number.isInteger(parseInt(e.feature.properties.DE_0_A_5_A))){
                    zerocinco[3]=zerocinco[3]+parseInt(e.feature.properties.DE_0_A_5_A);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_6_A_14_))){
                    seiscatorce[3]=seiscatorce[3]+parseInt(e.feature.properties.DE_6_A_14_);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_15_A_64))){
                    quincesesentaicuatro[3]=quincesesentaicuatro[3]+parseInt(e.feature.properties.DE_15_A_64);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_65_MAS_))){
                    sesentaisincomas[3]=sesentaisincomas[3]+parseInt(e.feature.properties.DE_65_MAS_);
                  }
                  for (let i = 2; i < archivos.length; i++) { 
                    
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                          infracritica3[i-2]=1+infracritica3[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica3[i-2]=1+infracritica3[i-2];                  
                        }
                      }
                    }
                  }

                }
                
                if(e.feature.properties.gridcode == 3 || e.feature.properties.gridcode == 2 || e.feature.properties.gridcode == 1){
                  if (e.feature.properties.MUJERES!="Indeterminado") {
                    mujerestotalafectada=mujerestotalafectada+parseInt(e.feature.properties.MUJERES);
                    hombretotalafectada=hombretotalafectada+parseInt(e.feature.properties.HOMBRES);
                  }
                  hormigon[0]=hormigon[0]+parseInt(e.feature.properties.VIV_HORMIG);
                  cemento[0]=cemento[0]+parseInt(e.feature.properties.VIV_ALBANI);
                  tabique1[0]=tabique1[0]+parseInt(e.feature.properties.VIV_TABIQU);
                  tabique2[0]=tabique2[0]+parseInt(e.feature.properties.VIV_TABI_1);
                  adobe[0]=adobe[0]+parseInt(e.feature.properties.VIV_ADOBE);
                  precarios[0]=precarios[0]+parseInt(e.feature.properties.VIV_PARED_);
                  //suma edades etarias, se compara por los numeros indeterminados
                  if(Number.isInteger(parseInt(e.feature.properties.DE_0_A_5_A))){
                    zerocinco[0]=zerocinco[0]+parseInt(e.feature.properties.DE_0_A_5_A);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_6_A_14_))){
                    seiscatorce[0]=seiscatorce[0]+parseInt(e.feature.properties.DE_6_A_14_);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_15_A_64))){
                    quincesesentaicuatro[0]=quincesesentaicuatro[0]+parseInt(e.feature.properties.DE_15_A_64);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.DE_65_MAS_))){
                    sesentaisincomas[0]=sesentaisincomas[0]+parseInt(e.feature.properties.DE_65_MAS_);
                  }
                  

                  for (let i = 2; i < archivos.length; i++) { 
                      
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                         infracritica4[i-2]=1+infracritica4[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica4[i-2]=1+infracritica4[i-2];                  
                        }
                      }
                    }
                  }
                  tempsuma=0;
                }
              }
              m++;
            }
          });


          m=0;
          //datos de entidades, rural
          geojson.eachLayer(function (e) {
            if(map.getBounds().intersects(e.getBounds())) { 
          //for (var m = 0; m < arreglodatos[0].length; m++) { 
              if(e.feature){
                geojson6.eachLayer(function (i) {  
                  if(e.feature.properties.MANZENT_I == i.feature.properties.MANZENT_I ){
                    //console.log(i.feature.properties.SHAPE_Area,e.feature.properties.Shape__Are);
                    tempincerti = ((i.feature.properties.Shape__Are*(100))/(e.feature.properties.Shape__Are));
                    incerarray.push(tempincerti);
                  }

                });

                
                if(e.feature.properties.gridcode == 1){
                  Superficie1=Superficie1+e.feature.properties.Shape__Are;
                  hormigon[1]=hormigon[1]+parseInt(e.feature.properties.VIV_PARED_);
                  cemento[1]=cemento[1]+parseInt(e.feature.properties.VIV_PARED1);
                  tabique1[1]=tabique1[1]+parseInt(e.feature.properties.VIV_PARED2);
                  tabique2[1]=tabique2[1]+parseInt(e.feature.properties.VIV_PARED3);
                  adobe[1]=adobe[1]+parseInt(e.feature.properties.VIV_PARED4);
                  precarios[1]=precarios[1]+parseInt(e.feature.properties.VIV_PARED5);
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_0))){
                    zerocinco[1]=zerocinco[1]+parseInt(e.feature.properties.PERSONAS_0);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_6))){
                    seiscatorce[1]=seiscatorce[1]+parseInt(e.feature.properties.PERSONAS_6);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_1))){
                    quincesesentaicuatro[1]=quincesesentaicuatro[1]+parseInt(e.feature.properties.PERSONAS_1);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_M))){
                    sesentaisincomas[1]=sesentaisincomas[1]+parseInt(e.feature.properties.PERSONAS_M);
                  }
                  for (let i = 2; i < archivos.length; i++) { 
                    
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                          infracritica1[i-2]=1+infracritica1[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica1[i-2]=1+infracritica1[i-2];                  
                        }
                      }
                    }
                  }

                }
                
                if(e.feature.properties.gridcode == 2){
                  Superficie2=Superficie2+e.feature.properties.Shape__Are;
                  hormigon[2]=hormigon[2]+parseInt(e.feature.properties.VIV_PARED_);
                  cemento[2]=cemento[2]+parseInt(e.feature.properties.VIV_PARED1);
                  tabique1[2]=tabique1[2]+parseInt(e.feature.properties.VIV_PARED2);
                  tabique2[2]=tabique2[2]+parseInt(e.feature.properties.VIV_PARED3);
                  adobe[2]=adobe[2]+parseInt(e.feature.properties.VIV_PARED4);
                  precarios[2]=precarios[2]+parseInt(e.feature.properties.VIV_PARED4);
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_0))){
                    zerocinco[2]=zerocinco[2]+parseInt(e.feature.properties.PERSONAS_0);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_6))){
                    seiscatorce[2]=seiscatorce[2]+parseInt(e.feature.properties.PERSONAS_6);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_1))){
                    quincesesentaicuatro[2]=quincesesentaicuatro[2]+parseInt(e.feature.properties.PERSONAS_1);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_M))){
                    sesentaisincomas[2]=sesentaisincomas[2]+parseInt(e.feature.properties.PERSONAS_M);
                  }
                  for (let i = 2; i < archivos.length; i++) { 
                    
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                          infracritica2[i-2]=1+infracritica2[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica2[i-2]=1+infracritica2[i-2];                  
                        }
                      }
                    }
                  }
                }
                if(e.feature.properties.gridcode == 3){
                  Superficie3=Superficie3+e.feature.properties.Shape__Are;
                  hormigon[3]=hormigon[3]+parseInt(e.feature.properties.VIV_PARED_);
                  cemento[3]=cemento[3]+parseInt(e.feature.properties.VIV_PARED1);
                  tabique1[3]=tabique1[3]+parseInt(e.feature.properties.VIV_PARED2);
                  tabique2[3]=tabique2[3]+parseInt(e.feature.properties.VIV_PARED3);
                  adobe[3]=adobe[3]+parseInt(e.feature.properties.VIV_PARED4);
                  precarios[3]=precarios[3]+parseInt(e.feature.properties.VIV_PARED5);
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_0))){
                    zerocinco[3]=zerocinco[3]+parseInt(e.feature.properties.PERSONAS_0);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_6))){
                    seiscatorce[3]=seiscatorce[3]+parseInt(e.feature.properties.PERSONAS_6);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_1))){
                    quincesesentaicuatro[3]=quincesesentaicuatro[3]+parseInt(e.feature.properties.PERSONAS_1);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_M))){
                    sesentaisincomas[3]=sesentaisincomas[3]+parseInt(e.feature.properties.PERSONAS_M);
                  }
                  for (let i = 2; i < archivos.length; i++) { 
                    
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){   
                          infracritica3[i-2]=1+infracritica3[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica3[i-2]=1+infracritica3[i-2];                  
                        }
                      }
                    }
                  }
                }


                
                if(e.feature.properties.gridcode == 3 || e.feature.properties.gridcode == 2 || e.feature.properties.gridcode == 1){
                  if (e.feature.properties.TOTAL_MUJE!="Indeterminado") {
                    mujerestotalafectada=mujerestotalafectada+parseInt(e.feature.properties.TOTAL_MUJE);
                    hombretotalafectada=hombretotalafectada+parseInt(e.feature.properties.TOTAL_HOMB);
                  }
                  

                  cemento[0]=cemento[0]+parseInt(e.feature.properties.VIV_PARED1);
                  tabique1[0]=tabique1[0]+parseInt(e.feature.properties.VIV_PARED2);
                  tabique2[0]=tabique2[0]+parseInt(e.feature.properties.VIV_PARED3);
                  adobe[0]=adobe[0]+parseInt(e.feature.properties.VIV_PARED4);
                  precarios[0]=precarios[0]+parseInt(e.feature.properties.VIV_PARED5);
                  //suma edades etarias, se compara por los numeros indeterminados 
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_0))){
                    zerocinco[0]=zerocinco[0]+parseInt(e.feature.properties.PERSONAS_0);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_6))){
                    seiscatorce[0]=seiscatorce[0]+parseInt(e.feature.properties.PERSONAS_6);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_1))){
                    quincesesentaicuatro[0]=quincesesentaicuatro[0]+parseInt(e.feature.properties.PERSONAS_1);
                  }
                  if(Number.isInteger(parseInt(e.feature.properties.PERSONAS_M))){
                    sesentaisincomas[0]=sesentaisincomas[0]+parseInt(e.feature.properties.PERSONAS_M);
                  }
                  
                  
                  for (let i = 2; i < archivos.length; i++) {      
                    for (let j = 0; j < arreglodatos[i].length; j++) {
                      
                      if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){                          
                        infracritica4[i-2]=1+infracritica4[i-2];                  
                      }
                      if (arreglodatos[i][j].properties.MANZENT_I==0){
                        if(e.feature.properties.MANZENT_I==arreglodatos[i][j].properties.MANZENT_I){
                          infracritica4[i-2]=1+infracritica4[i-2];                  
                        }
                      }  
                    }
                  }
                  tempsuma=0;
                }
              }
              m++;
            }
          });

          
          let sum = incerarray.reduce((previous, current) => current += previous);
          let avg = sum / incerarray.length;
          incertidumbre.data.datasets[0].data[0] = avg;
          incertidumbre.data.datasets[0].data[1] = 100-avg;

          chart.data.datasets[0].data[0] = Superficie1/1000000;
          chart.data.datasets[1].data[0] = Superficie2/1000000;
          chart.data.datasets[2].data[0] = Superficie3/1000000;


          $("#tablaictb tr").remove();

          infracritica1.forEach(function(infracriticadata,index) {
            //console.log(infracriticadata,archivos[index+2]);
            if (infracriticadata != 0 || infracritica2[index] != 0 || infracritica3[index] != 0) {
              var markup="<tr><th>"+archivos[index+2]+"</th><th>"+infracriticadata+"</th><th>"+infracritica2[index]+"</th><th>"+infracritica3[index]+"</th></tr>";
              $("#tablaictb").append(markup);
            }
          });



          Infraestructura_criticaconfig.data.datasets[0].data=infracritica4;
          
          incertidumbre.update();
          chart.update();

          Infraestructura_critica_graf.update(); 
  


          $('#tp1').html(zerocinco[1]+seiscatorce[1]+quincesesentaicuatro[1]+sesentaisincomas[1]);
          $('#tp2').html(zerocinco[2]+seiscatorce[2]+quincesesentaicuatro[2]+sesentaisincomas[2]);
          $('#tp3').html(zerocinco[3]+seiscatorce[3]+quincesesentaicuatro[3]+sesentaisincomas[3]);
          $('#am1').html(sesentaisincomas[1]);
          $('#am2').html(sesentaisincomas[2]);
          $('#am3').html(sesentaisincomas[3]);
          $('#ad1').html(quincesesentaicuatro[1]);
          $('#ad2').html(quincesesentaicuatro[2]);
          $('#ad3').html(quincesesentaicuatro[3]);
          $('#jo1').html(seiscatorce[1]);
          $('#jo2').html(seiscatorce[2]);
          $('#jo3').html(seiscatorce[3]);
          $('#ni1').html(zerocinco[1]);
          $('#ni2').html(zerocinco[2]);
          $('#ni3').html(zerocinco[3]);

          $('#tv1').html(hormigon[1]+cemento[1]+tabique1[1]+tabique2[1]+adobe[1]+precarios[1]);
          $('#tv2').html(hormigon[2]+cemento[2]+tabique1[2]+tabique2[2]+adobe[2]+precarios[2]);
          $('#tv3').html(hormigon[3]+cemento[3]+tabique1[3]+tabique2[3]+adobe[3]+precarios[3]);
          $('#ho1').html(hormigon[1]);
          $('#ho2').html(hormigon[2]);
          $('#ho3').html(hormigon[3]);
          $('#ce1').html(cemento[1]);
          $('#ce2').html(cemento[2]);
          $('#ce3').html(cemento[3]);
          $('#ta11').html(tabique1[1]);
          $('#ta12').html(tabique1[2]);
          $('#ta13').html(tabique1[3]);
          $('#ta21').html(tabique2[1]);
          $('#ta22').html(tabique2[2]);
          $('#ta23').html(tabique2[3]);
          $('#adb1').html(adobe[1]);
          $('#adb2').html(adobe[2]);
          $('#adb3').html(adobe[3]);
          $('#pr1').html(precarios[1]);
          $('#pr2').html(precarios[2]);
          $('#pr3').html(precarios[3]);


          }


     
      $( window ).on( "load", function() {
        var element = document.getElementById("collapseTwo");
        element.classList.add("show");
        
        /* 
        $('#editable_table').Tabledit({
            url:'pruebatabla/action.php',
            columns:{
            identifier:[0, "id_accion"],
            editable:[[1, 'encargado'], [2, 'tarea']]
            },
            restoreButton:false,
            onSuccess:function(data, textStatus, jqXHR)
            {
            if(data.action == 'delete')
            {
              $('#'+data.id).remove();
            }
            }
          });

          $(".tabledit-edit-button").first().removeClass("glyphicon glyphicon-pencil").addClass( "fas fa-edit" );
          $(".tabledit-delete-button").first().removeClass("glyphicon glyphicon-trash").addClass( "fas fa-trash-alt" );
          */


      /*Aqui empieza el grafico de personas afecatadas 1*/

      /*Aqui empieza el grafico de personas afecatadas 2

        var idarchivo= document.getElementById('hombre-mujer-2').getContext('2d');


        var hombremujer2config = {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [25,75],
              backgroundColor: ['#ff349f','#FF9024'],
              label: 'Personas Afectadas'
            }],
            labels: [
              'Hombres',
              'Mujeres'
            ]
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Personas Afectadas 2 por ···'
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }
        };
        var hombremujer2_graf = new Chart(idarchivo, hombremujer2config);


        */
   /*Aqui empieza el grafico de infraestructura afecatadas polar*/


    






    


    
    //backgroundColor: ["#e2efd2","#D3F0F0","#FFEBB8","#ADD9F8","#FFC0CD"],
    Infraestructura_criticaconfig = {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            
          ],
          backgroundColor: [],
          label: 'Dataset 1',
          hoverBorderWidth: 0,
          hoverBorderColor: "#ffff90",
          hoverBackgroundColor:"#ffff90",
          borderWidth	:0,
        }],
        labels: [
          'Grifos',
          'Bomberos',
          'Hospital',
          'Agua',
          'Electricidad',
          'dsadsa'
          
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
        legend: {
          position: 'right',
          display:  false,
          labels: {
              boxWidth: 10,
              fontSize: 9,
            }
        },
        title: {
              display: true,
              text: 'Infraestructura critica afectada',
              position: 'top'
        },
        animation: {
          animateScale: true,
          animateRotate: true,
          
        }
      }
    };

    
    var Infraestructura_critica = document.getElementById('Infraestructura_critica').getContext('2d');
    Infraestructura_critica_graf = new Chart(Infraestructura_critica, Infraestructura_criticaconfig);
  



  
    

    var chartOptions = {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Nivel de afectación'
          },
          ticks: {
            //beginAtZero: true
          
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Superficie Area'
          },
          ticks: {
            //beginAtZero: true
          }
        }]
      },
      maintainAspectRatio: false,
      // turn off animations during chart data updates
      animation: {
        duration: 0
      },
      // see STEP 4 below
      //onHover: handleChartHover
    };

    chart = new Chart('chartCanvas', {

      
      type: 'bar',
      data: {
        datasets: [
          {
            data: [0],
            backgroundColor: ["#3ddd37"],
            label: ['Bajo']
          },
          {
            data: [0],
            backgroundColor: ["#f0f226"],
            label: ['Medio']
          },
          {
            data: [0],
            backgroundColor: ["#e33d3d"],
            label: ['Alto']
          }
          
        ],
      },
      options: chartOptions
    });

    var incertidumbreoptions = {
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          scaleLabel: {
            display: false,
            labelString: 'Nivel de afectación'
          },
          ticks: {
            display: false,
            beginAtZero: false,
            stepSize: 50
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          scaleLabel: {
            display: false,
            labelString: 'Superficie Area'
          },
          ticks: {
            display: false,
            beginAtZero: false,
            stepSize: 50
          }
        }]
      },
      maintainAspectRatio: false,
      // turn off animations during chart data updates
      animation: {
        duration: 0
      },
      // see STEP 4 below
      //onHover: handleChartHover
    };

    
    


    incertidumbre = new Chart('incertidumbre', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [50,50],
          backgroundColor: ['#efb810','#fff'],
          label: 'Personas Afectadas'
        }],
        labels: [
          'Incertidumbre',
          'Cobertura'
        ]
      },
      options: incertidumbreoptions
    });
    


    
      
    



      });

//incio boton de impresión mapa pdf

      //L.control.bigImage().addTo(map);
      var popup2 = L.popup();
      /*
      var printer = L.easyPrint({
            tileLayer: tile,
            sizeModes: ['A4Landscape'],
            filename: 'Escenario',
            exportOnly: false,
            hideControlContainer: false
      }).addTo(map);

      function manualPrint () {
        printer.printMap('CurrentSize', 'Escenario')
      }
      */

//fin impresión
//boton de busqueda
        var searchControl = L.esri.Geocoding.geosearch({position:'topright'}).addTo(map);

        var results = L.layerGroup().addTo(map);

        searchControl.on('results', function (data) {
          results.clearLayers();
          for (var i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng));
          }
        });
  //fin boton de busqueda


/*
$('#downloadPdf').click(function(event) {
  // get size of report page

  

  var reportPageHeight = $('#content-wrapper').innerHeight();
  var reportPageWidth = $('#content-wrapper').innerWidth();
 
  
  // create a new canvas object that we will populate with all other canvas objects
  var pdfCanvas = $('<canvas />').attr({
    id: "canvaspdf",
    width: reportPageWidth,
    height: reportPageHeight
  });
  
  // keep track canvas position
  var pdfctx = $(pdfCanvas)[0].getContext('2d');
  var pdfctxX = 0;
  var pdfctxY = 0;
  var buffer = 100;
  
  // for each chart.js chart
  $(".canvas-graf").each(function(index) {
    
    // get the chart height/width
    var canvasHeight = $(this).innerHeight();
    var canvasWidth = $(this).innerWidth();
    
    // draw the chart into the new canvas
    pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
    pdfctxX += canvasWidth + buffer;
    console.log(pdfctx);
    // our report page is in a grid pattern so replicate that in the new canvas
    if (index % 2 === 1) {
      pdfctxX = 0;
      pdfctxY += canvasHeight + buffer;
    }
  });
  
  // create new pdf and add our new canvas as an image
  var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);

  var newCanvasImg = $(pdfCanvas)[0].toDataURL("image/png", 1.0);

  pdf.addImage(newCanvasImg, 'PNG', 0, 0);


  pdf.save('Estadistica.pdf');

  //leafletImage(map, downloadMap);

  function downloadMap(err, canvas) {
      var imgData = canvas.toDataURL("image/svg+xml", 1.0);
      var dimensions = map.getSize();
      
      var pdf = new jsPDF('l', 'pt', 'letter');
      //pdf.addImage(imgData, 'PNG', 0, 0, dimensions.x * 0.5, dimensions.y * 0.5);
      pdf.save('filename1222.pdf');

      
  };




  
  // download the pdf
  //pdf.save('filename.pdf');
});
*/



  
  </script>
  

</body>

</html>


