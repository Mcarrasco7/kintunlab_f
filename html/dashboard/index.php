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
        <title>Tablero | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- third party css -->
        <link href="../assets/css/vendor/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/vendor/britecharts.min.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />

    </head>
    

    <body class="loading" data-layout-config='{"leftSideBarTheme":"light","layoutBoxed":false, "leftSidebarCondensed":true, "leftSidebarScrollable":true,"darkMode":false, "showRightSidebarOnStart": true}'  data-leftbar-theme="light" data-leftbar-compact-mode="condensed">
        <!-- Begin page -->
        <div class="wrapper">
            
            <?php include "../partials/left-sidebar.php" ?>
            <style>
                .linea-tiempo .simplebar-content-wrapper {
                    background-color: #ffffff!important;
                }
                .timeline-alt .timeline-item:before {
                    background-color: #6675ff;
                }
                .card-header{
                    background-color:#92a2e7;
                    color:#fff;
                }
                .legend-entry .legend-entry-name{
                    white-space: nowrap!important; 
                    width: 50px!important; 
                    overflow: hidden!important;
                    text-overflow: ellipsis!important; 
                }
                .progress-value{
                    width:160px!important;
                    font-size:0.8rem;
                }
                .label{
                    font-size:13px!important;
                }
            </style>
            
            <div class="content-page">
                <div class="content">
                    <?php include "../partials/topbar.php" ?>
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <!-- Start Content-->
            <div class="container-fluid mb-4">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12 mb-3">
                        <div class="page-title-box">
                            <div class="page-title-right"><!-- 
                                <form class="form-inline">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control form-control-light" id="dash-daterange">
                                            <div class="input-group-append">
                                                <span class="input-group-text bg-primary border-primary text-white">
                                                    <i class="mdi mdi-calendar-range font-13"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="javascript: void(0);" class="btn btn-primary ml-2">
                                        <i class="mdi mdi-autorenew"></i>
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-primary ml-1">
                                        <i class="mdi mdi-filter-variant"></i>
                                    </a>
                                </form> -->
                            </div>
                            <h4 class="page-title"> </h4>
                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <div class="row">
                    <div class="col-12">

                        <div class="row">
                            <div class="col-12 col-md-4">
                                 
                                    <div class="col-12">
                                        <div class="card widget-flat">
                                            <div class="card-body">
                                                <div class="float-right widget-icon">
                                                    <i class="fas fa-user-times "></i>
                                                </div>
                                                <h5 class="text-muted font-weight-normal mt-0" title="Numbero de Emprendedores sin inicio de actividades">Emprendedores sin inicio de actividades</h5>
                                                <h3 class="mt-3 mb-3" id="sin-actividad"></h3>
                                                <p class="mb-0 text-muted">
                                                    <span class="text-success mr-2"><i class="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                                                    <span class="text-nowrap">Mas que el mes anterior</span>  
                                                </p>
                                            </div> <!-- end card-body-->
                                        </div> <!-- end card-->
                                    </div>
                                    <div class="col-12">
                                        <div class="card widget-flat">
                                            <div class="card-body">
                                                <div class="float-right widget-icon">
                                                    <i class="fas fa-user-check "></i>
                                                </div>
                                                <h5 class="text-muted font-weight-normal mt-0" title="Numbero de mprendedores con inicio de actividades">Emprendedores con inicio de actividades</h5>
                                                <h3 class="mt-3 mb-3" id="con-actividad"></h3>
                                                <p class="mb-0 text-muted">
                                                    <span class="text-nowrap">Nº empresas SII</span>
                                                    <span class="text-danger mr-2"></i> 270</span><br>
                                                    <span class="text-success mr-2"><i class="mdi mdi-arrow-up-bold"></i> 33% Mas que en el SII</span>
                                                    
                                                </p>
                                            </div> <!-- end card-body-->
                                        </div> <!-- end card-->
                                    </div> <!-- end col-->
                                <div class="col-xl-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="dropdown float-right">
                                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Reporte</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                </div>
                                            </div>
                                            <h4 class="header-title mb-3">Demografía del emprendedor</h4>

                                            <div id="high-performing-product" class="apex-charts" data-colors="#727cf5,#e3eaef"></div>

                                                
                                        </div> <!-- end card-body-->
                                    </div> <!-- end card-->

                                </div> <!-- end col -->
                                
                            </div> <!-- end col-->

                            


                            <div class="col-12 col-md-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="dropdown float-right">
                                            <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                <!-- item-->
                                                <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                        <h4 class="header-title mb-3">Historial</h4>

                                        <div class="chart-content-bg">
                                            <div class="row text-center">
                                                <div class="col-md-6">
                                                    <p class="text-muted mb-0 mt-3">Emprendedores sin inicio de actividades</p>
                                                    <h2 class="font-weight-normal mb-3">
                                                        <small class="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
                                                        <span id="emspac">20</span>
                                                    </h2>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-muted mb-0 mt-3">EEmprendedores con inicio de actividades</p>
                                                    <h2 class="font-weight-normal mb-3">
                                                        <small class="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
                                                        <span id="emcpac">2</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="dash-item-overlay d-none d-md-block">
                                            <h5>Emprendedores</h5>
                                            <p class="text-muted font-13 mb-1 mt-1">Persona que tiene la capacidad de descubrir e identificar algún tipo de oportunidad de negocios</p>
                                            <a href="../emprendedor/emprendedores.php" class="btn btn-outline-primary">Ver emprendedores
                                                <i class="mdi mdi-arrow-right ml-2"></i>
                                            </a>
                                        </div>

                                        <div id="revenue-chart" class="apex-charts mt-3" data-colors="#727cf5,#0acf97"></div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>


                        <div class="row">

                            <div class="col-md-6 col-12 order-lg-1">
                                <div class="card">
                                        <div class="card-header">
                                            <div class="dropdown float-right py-2">
                                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                </div>
                                            </div>
                                        
                                            <h4 class="header-title p-2">Líneas de acción estratégicas PLADECO 2016-2020</h4>
                                        </div>
                                        
                                    <div class="card-body">
                                        <div class="linea-tiempo" data-simplebar style="max-height: 300px;">
                                            <div class="timeline-alt pb-0">
                                                <div class="timeline-item">
                                                    <i class="mdi mdi-bottle-wine bg-info-lighten text-info timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-info font-weight-bold mb-1 d-block">Apoyar las actividades silvoagropecuarias </a>
                                                        <small>Contribuir al mejoramiento tanto incorporado asesorías técnicas, infraestructuras, apoyo en gestión a las familias de la comuna.</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="timeline-item">
                                                    <i class="mdi mdi-nature bg-primary-lighten text-primary timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-primary font-weight-bold mb-1 d-block">Fomentar y dar apoyo técnico para el desarrollo de un turismo de intereses especial.</a>
                                                        <small>Encargado</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="timeline-item">
                                                    <i class="mdi mdi-domain bg-info-lighten text-info timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-info font-weight-bold mb-1 d-block">Fomentar la micro, pequeña y mediana empresa</a>
                                                        <small>Promoviendo y facilitar el desarrollo de emprendimiento económico productivos urbanos como rurales.</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                
                                                
                                            </div>
                                            <!-- end timeline -->
                                        </div> <!-- end slimscroll -->
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card-->
                            </div>


                            <div class="col-md-6 col-12 order-lg-1">
                                <div class="card">
                                        <div class="card-header">
                                            <div class="dropdown float-right py-2">
                                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                </div>
                                            </div>
                                        
                                            <h4 class="header-title p-2">Política nacional de desarrollo rural</h4>
                                        </div>
                                        
                                    <div class="card-body">
                                    <small >Mejorar la calidad de vida y aumentar las oportunidades de la población que habita en territorios rurales, generando las condiciones adecuadas para su desarrollo integral, a través de la adopción gradual, planificada y sostenida de un paradigma que concibe un accionar público con enfoque territorial e integrado en distintos niveles, y que propicia sinergias entre iniciativas públicas, privadas y de la sociedad civil.</small>
                                        <div class="linea-tiempo mt-2" data-simplebar style="max-height: 300px;">
                                            <div class="timeline-alt pb-0">
                                                <div class="timeline-item">
                                                    <i class="mdi mdi-playlist-check bg-info-lighten text-info timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-info font-weight-bold mb-1 d-block">Bienestar Social, disminuyendo las brechas de acceso a bienes y servicios.</a>
                                                        <small>Eje 1. Asentamientos rurales ; Eje 2. Vivienda y acceso a servicios básicos; Eje 3. Educación, salud, justicia y seguridad ciudadana; Eje 4. Conectividad física y de telecomunicaciones; Eje 5. Pobreza, vulnerabilidad social y equidad.</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="timeline-item">
                                                    <i class="mdi mdi-playlist-check bg-primary-lighten text-primary timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-primary font-weight-bold mb-1 d-block">Oportunidades Económicas, mejorando el desempeño y dinamismo local.</a>
                                                        <small>Eje 1. Capital humano y asociatividad; Eje 2. Diversificación productiva y cadenas de valor; Eje 3. Red de oportunidades; Eje 4. Redes e infraestructura estratégica.</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div class="timeline-item">
                                                    <i class="mdi mdi-playlist-check bg-info-lighten text-info timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-info font-weight-bold mb-1 d-block">Sustentabilidad Medioambiental, valorando los espacios naturales y gestionando sus riesgos.</a>
                                                        <small>Eje 1. Biodiversidad y servicios ecosistémicos; Eje 2. Sistema hídrico; Eje 3. Recurso suelo; Eje 4. Pasivos ambientales y gestión de residuos; Eje 5. Educación ambiental; Eje 6. Riesgos de desastres y cambio climático.</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="timeline-item">
                                                    <i class="mdi mdi-playlist-check bg-primary-lighten text-primary timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-primary font-weight-bold mb-1 d-block">Cultura e Identidad, resguardando y poniendo en valor su patrimonio material e inmaterial.</a>
                                                        <small>Eje 1. Patrimonio; Eje 2. Identidad y diversidad cultural.</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="timeline-item">
                                                    <i class="mdi mdi-playlist-check bg-info-lighten text-info timeline-icon"></i>
                                                    <div class="timeline-item-info">
                                                        <a class="text-info font-weight-bold mb-1 d-block">Finalmente, la Política plantea una definición de Gobernanza para su consecución.</a>
                                                        <small>Nivel comunal; Nivel regional; Nivel nacional; Seguimiento, monitoreo y evaluación</small>
                                                        <p class="mb-0 pb-2">
                                                            <small class="text-muted">2021</small>
                                                        </p>
                                                    </div>
                                                </div>

                                                
                                                
                                            </div>
                                            <!-- end timeline -->
                                        </div> <!-- end slimscroll -->
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card-->
                            </div>



                        </div>
                            <!-- end col -->
                            
                        

                        
                        <div class="row">
                            <div class="col-12 col-xl-6">
                                <div class="card">
                                    <div class="card-body">
                                        <!--
                                        <div class="dropdown float-right">
                                            <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                 
                                                <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                
                                                <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                
                                                <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                
                                                <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                        -->
                                        <h4 class="header-title mb-3">Uso y Cobertura de Suelo</h4>

                                        <div class="row">
                                            <div class="col-12">   
                                                <div id="average-sales" class="apex-charts mb-4 mt-4" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00,#39afd1"></div>
                                            </div><!--
                                            <div class="col-6">
                                                <div class="chart-widget-list">
                                                    <p>
                                                        <i class="mdi mdi-square text-primary"></i> Bosques y plantaciones
                                                        <span class="float-right">300.56 km²</span>
                                                    </p>
                                                    <p>
                                                        <i class="mdi mdi-square text-danger"></i> Humedales, áreas desprovistas de vegetación, nieve, glaciares y cuerpos de agua
                                                        <span class="float-right">135.18 km²</span>
                                                    </p>
                                                    <p>
                                                        <i class="mdi mdi-square text-success"></i>Praderas y matorrales 
                                                        <span class="float-right">48.96 km²</span>
                                                    </p>
                                                    <p class="mb-0">
                                                        <i class="mdi mdi-square text-warning"></i>Áreas urbanas e industriales
                                                        <span class="float-right">154.02 km²</span>
                                                    </p>
                                                    <p class="mb-0">
                                                        <i class="mdi mdi-square text-info"></i>Terrenos agrícolas
                                                        <span class="float-right">154.02 km²</span>
                                                    </p>
                                                </div>
                                            </div>
                                            -->
                                        </div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col -->
                    
                        

                        

<!--
                            <div class="col-lg-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-right">
                                            <i class="mdi mdi-currency-usd widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted font-weight-normal mt-0" title="Average Revenue">Revenue</h5>
                                        <h3 class="mt-3 mb-3">$6,254</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-danger mr-2"><i class="mdi mdi-arrow-down-bold"></i> 7.00%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div> 
                                </div> 
                            </div> 

                            <div class="col-lg-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-right">
                                            <i class="mdi mdi-pulse widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted font-weight-normal mt-0" title="Growth">Growth</h5>
                                        <h3 class="mt-3 mb-3">+ 30.56%</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success mr-2"><i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div> 
                            </div> -->
                        

                    
                
                    

                    
                    

                    <div class="col-12 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="dropdown float-right">
                                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                    </div>
                                </div>
                                <h4 class="header-title my-3">Amenaza Natural</h4>

                                <h5 class="mb-1 mt-0 font-weight-normal">Volcán Llaima </h5>
                                <div class="progress-w-percent">
                                    <span class="progress-value font-weight-light">27.783 Ha(17.8%)</span>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 24.94%;" aria-valuenow="24.94" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <h5 class="mb-1 mt-0 font-weight-normal">Volcán Sollipulli </h5>
                                <div class="progress-w-percent">
                                    <span class="progress-value font-weight-light">13.161 Ha(8.4%)</span>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 14.84%;" aria-valuenow="14.84 " aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <h4 class="header-title my-3 mt-4">Sitios de significación Natural</h4>

                                <h5 class="mb-1 mt-0 font-weight-normal">Parque Nacional Conguillío</h5>
                                <div class="progress-w-percent">
                                    <span class="progress-value font-weight-light">29.976 Ha(19.2%)</span>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 19.21%;" aria-valuenow="19.21" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <h5 class="mb-1 mt-0 font-weight-normal">Reserva Nacional Villarrica </h5>
                                <div class="progress-w-percent ">
                                    <span class="progress-value font-weight-light">34 Ha(0.02%)</span>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width:  0.021%;" aria-valuenow="0.021" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                
                                <h5 class="mb-1 mt-0 font-weight-normal">Reserva Nacional China Muerta</h5>
                                <div class="progress-w-percent mb-0">
                                    <span class="progress-value font-weight-light">8.504 Ha(5.4%)</span>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 5.45%;" aria-valuenow="5.45" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <span class="text-success float-right font-weight-light mt-3"><i class="mdi mdi-map"></i> 155.987 Ha de superficie comunal </span>

                            </div> <!-- end card-body-->
                        </div> <!-- end card-->
                    </div> <!-- end col-->


                </div>
                <!-- end row -->

                

                


                <div class="row">
                    <!--
                    <div class="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
                        <div class="card">
                            <div class="card-body">
                                <a href="" class="btn btn-sm btn-link float-right mb-3">Export
                                    <i class="mdi mdi-download ml-1"></i>
                                </a>
                                <h4 class="header-title mt-2">Top Selling Products</h4>

                                <div class="table-responsive">
                                    <table class="table table-centered table-nowrap table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">ASOS Ridley High Waist</h5>
                                                    <span class="text-muted font-13">07 April 2018</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$79.49</h5>
                                                    <span class="text-muted font-13">Price</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">82</h5>
                                                    <span class="text-muted font-13">Quantity</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$6,518.18</h5>
                                                    <span class="text-muted font-13">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">Marco Lightweight Shirt</h5>
                                                    <span class="text-muted font-13">25 March 2018</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$128.50</h5>
                                                    <span class="text-muted font-13">Price</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">37</h5>
                                                    <span class="text-muted font-13">Quantity</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$4,754.50</h5>
                                                    <span class="text-muted font-13">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">Half Sleeve Shirt</h5>
                                                    <span class="text-muted font-13">17 March 2018</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$39.99</h5>
                                                    <span class="text-muted font-13">Price</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">64</h5>
                                                    <span class="text-muted font-13">Quantity</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$2,559.36</h5>
                                                    <span class="text-muted font-13">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">Lightweight Jacket</h5>
                                                    <span class="text-muted font-13">12 March 2018</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$20.00</h5>
                                                    <span class="text-muted font-13">Price</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">184</h5>
                                                    <span class="text-muted font-13">Quantity</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$3,680.00</h5>
                                                    <span class="text-muted font-13">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">Marco Shoes</h5>
                                                    <span class="text-muted font-13">05 March 2018</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$28.49</h5>
                                                    <span class="text-muted font-13">Price</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">69</h5>
                                                    <span class="text-muted font-13">Quantity</span>
                                                </td>
                                                <td>
                                                    <h5 class="font-14 my-1 font-weight-normal">$1,965.81</h5>
                                                    <span class="text-muted font-13">Amount</span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div> 
                            </div> 
                        </div> 
                    </div>  -->

                    <div class="col-xl-6 col-lg-12 order-lg-1">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="header-title p-2">Fuente - SII 2020 y CASEN 2017</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-xl-6">
                                        <h4 class="header-title mb-4">Principales rubros económicos</h4>
                                        <div class="donut-container text-center" style="width: 100%;" data-colors2="#727cf5,#0acf97,#6c757d,#fa5c7c,#ffbc00,#39afd1"></div>
                                        <div class="legend-chart-container text-center"></div>
                                    </div>
                                    <div class="col-12 col-xl-6">
                                        <h4 class="header-title mb-4">Cantidad de trabajadores por rubros económicos</h4>
                                        <div class="donut-container2 text-center" style="width: 100%;" data-colors2="#727cf5,#0acf97,#6c757d,#fa5c7c,#ffbc00,#39afd1"></div>
                                        <div class="legend-chart-container2 text-center"></div>
                                    </div>

                                </div>
                                
                            </div> <!-- end card-body-->
                        </div> <!-- end card-->
                    </div> <!-- end col-->


                    <div class="col-xl-6 col-lg-12 order-lg-1">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="header-title p-2">Fuente - Plataforma KintunLab</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-xl-6">
                                        <h4 class="header-title mb-4">Principales rubros económicos</h4>
                                        <div class="donut-containerv2 text-center" style="width: 100%;" data-colors2="#727cf5,#0acf97,#6c757d,#fa5c7c,#ffbc00,#39afd1"></div>
                                        <div class="legend-chart-containerv2 text-center"></div>
                                    </div>
                                    <div class="col-12 col-xl-6">
                                        <h4 class="header-title mb-4">Cantidad de trabajadores por rubros económicos</h4>
                                        <div class="donut-container2v2 text-center" style="width: 100%;" data-colors2="#727cf5,#0acf97,#6c757d,#fa5c7c,#ffbc00,#39afd1"></div>
                                        <div class="legend-chart-container2v2 text-center"></div>
                                    </div>

                                </div>
                                
                            </div> <!-- end card-body-->
                        </div> <!-- end card-->
                    </div> <!-- end col-->

                    

                </div>
                <!-- end row -->

                </div>
                <!-- container -->

                </div>
                <!-- content -->
                
                <?php include "../partials/footer.php" ?>
                </div>
                <!-- content-wrapper -->

                </div>
                <!-- wrapper -->



            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->


        <!-- bundle -->
        <script src="../assets/js/vendor.min.js"></script>
        <script src="../assets/js/app.min.js"></script>


        <!-- demo app -->
        <!-- third party js -->
        <script src="../assets/js/vendor/apexcharts.min.js"></script>
        <script src="../assets/js/vendor/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="../assets/js/vendor/jquery-jvectormap-world-mill-en.js"></script>
        <script src="../assets/js/vendor/d3.min.js"></script>
        <script src="../assets/js/vendor/britecharts.min.js"></script>
        <!-- third party js ends -->

        
        
        <!-- demo app -->
        <script src="../assets/js/pages/demo.dashboard2.js"></script>
        
    </body>

</html>
