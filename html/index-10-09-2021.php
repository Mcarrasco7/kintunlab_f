<?php
$completarurl=".";
include 'bd_consul/validar.php';

include 'bd_consul/conexion.php';
$completarurl="./";

?>

<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8" />
        <title>KintunLab - Inicio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- third party css -->
        <link href="assets/css/vendor/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!--<link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style" />-->
        <link href="assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" disabled="disabled" />
        
    </head>
    <style>
            .bg-overlay {
                background: linear-gradient(rgba(58,94,170,.8), rgba(58,94,170,.8)), url("https://mapio.net/images-p/10790932.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;

            }
            .accesos-directos,.accesos-directos a, .accesos-directos a i{
                color: #fff!important;
                font-size: 80px;
            }

            
            .slick-slide {
                margin: 0px 20px;
            }

            .slick-slide img {
                width: 100%;
            }

            .slick-slider
            {
                position: relative;
                display: block;
                box-sizing: border-box;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                        user-select: none;
                -webkit-touch-callout: none;
                -khtml-user-select: none;
                -ms-touch-action: pan-y;
                    touch-action: pan-y;
                -webkit-tap-highlight-color: transparent;
            }

            .slick-list
            {
                position: relative;
                display: block;
                overflow: hidden;
                margin: 0;
                padding: 0;
            }
            .slick-list:focus
            {
                outline: none;
            }
            .slick-list.dragging
            {
                cursor: pointer;
                cursor: hand;
            }

            .slick-slider .slick-track,
            .slick-slider .slick-list
            {
                -webkit-transform: translate3d(0, 0, 0);
                -moz-transform: translate3d(0, 0, 0);
                    -ms-transform: translate3d(0, 0, 0);
                    -o-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
            }

            .slick-track
            {
                position: relative;
                top: 0;
                left: 0;
                display: block;
            }
            .slick-track:before,
            .slick-track:after
            {
                display: table;
                content: '';
            }
            .slick-track:after
            {
                clear: both;
            }
            .slick-loading .slick-track
            {
                visibility: hidden;
            }

            .slick-slide
            {
                display: none;
                float: left;
                height: 100%;
                min-height: 1px;
            }
            [dir='rtl'] .slick-slide
            {
                float: right;
            }
            .slick-slide img
            {
                display: block;
            }
            .slick-slide.slick-loading img
            {
                display: none;
            }
            .slick-slide.dragging img
            {
                pointer-events: none;
            }
            .slick-initialized .slick-slide
            {
                display: block;
            }
            .slick-loading .slick-slide
            {
                visibility: hidden;
            }
            .slick-vertical .slick-slide
            {
                display: block;
                height: auto;
                border: 1px solid transparent;
            }
            .slick-arrow.slick-hidden {
                display: none;
            }

    </style>
    <body class="loading" data-layout-config='{"leftSideBarTheme":"light","layoutBoxed":false, "leftSidebarCondensed":true, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": false}'  data-leftbar-theme="light" data-leftbar-compact-mode="condensed" cz-shortcut-listen="true">
        <!-- Begin page -->
        <div class="wrapper mm-active">
            <?php include "./partials/left-sidebar.php" ?>
       

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page bg-overlay">
                <div class="content">
                    <?php include "./partials/topbar.php" ?>
                    
                    <!-- Start Content-->
                    <div class="container-fluid ">

                        <div class="row pt-2 mb-4 ">
                        <div class="col-xl-7 col-lg-7">
                                <div class="card">
                                    <div class="card-body ">

                                       
                                    
                                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                                            </ol>
                                            
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/infografia/GRAFICOS_INTRO_KINTUNLAB/GRAFICOS_INTRO_KINTUNLAB_page-0001.jpg" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/infografia/GRAFICOS_INTRO_KINTUNLAB/GRAFICOS_INTRO_KINTUNLAB_page-0002.jpg" alt="Second slide">
                                                </div>
                                                <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/infografia/GRAFICOS_INTRO_KINTUNLAB/GRAFICOS_INTRO_KINTUNLAB_page-0003.jpg" alt="Third slide">
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Anterior</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Siguiente</span>
                                            </a>
                                        </div>



                                        <h3 class="text-uppercase my-4 text-center font-weight-normal">Bienvenido(A) a KintunLab222</h3>
                                        <p class="text-justify">En el marco de la Política de Desarrollo Rural y a través de un trabajo en conjunto entre el Ministerio de Agricultura (por medio de INDAP y ODEPA) y La I. Municipalidad de Melipeuco, tiene lugar la realización del Plan Piloto de Desarrollo Rural, el cual busca la inclusión de un modelo de trabajo que permita la articulación de actores, programas y/o proyectos existentes, y la promoción de nuevas iniciativas que potencien las oportunidades del medio rural comunal. Entendiendo que la implementación de un plan de estas características implica una serie de decisiones técnicas, se plantea el desarrollo de una plataforma de inteligencia competitiva de apoyo en un contexto técnico para la toma de decisiones y la gestión pública en el territorio rural de la comuna de Melipeuco, enfocado principalmente en evidenciar las brechas productivas, potencialidades y vocaciones de este, todo a través de la integración de datos y cruce de variables críticas para la identificación de usuarios prioritarios o para focalizar recursos en el territorio, teniendo como principal fortaleza la espacialización de grandes flujos de datos como herramienta para la gestión pública.</p>
                                    
                                        <!--<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                                        src="https://experience.arcgis.com/experience/9d8f688a6808470c84fad092d6075b3e/9"></iframe>
                                        <div id="world-map-markers" style="height: 360px"></div>-->
                                    </div>
                                    
                                </div> <!-- end card-->
                                <div class="card">
                                    <div class="card-body ">
                                        <div class="container">
                                            
                                            <section class="customer-logos slider">
                                                <div class="slide"><a target="_blank" href="https://www.odepa.gob.cl/desarrollo-rural-2"><img src="assets/images/banners/politica desarrollo2.png"></a></div>
                                                <div class="slide"><a target="_blank" href="https://es.datachile.io/"><img src="assets/images/banners/datachileb.png"></a></div>
                                                <div class="slide"><a target="_blank" href="https://www.masvidarural.gob.cl/atlas-rural/"><img src="assets/images/banners/Sin título-2.png"></a></div>
                                                <div class="slide"><a target="_blank" href="https://planimpulso.cl/"><img src="assets/images/banners/Sin título-2b.png"></a></div>
                                                <div class="slide"><a target="_blank"  href="https://www.fondos.gob.cl/"><img src="assets/images/banners/bannersinjuvb.png"></a></div>
                                            </section>
                                        </div>
                                    </div>
                                </div>


                                <div class="row mb-4 d-flex justify-content-center">
                                    <div class="col-6 col-md-4 col-lg  accesos-directos">

                                        <div class="d-flex justify-content-center">  
                                            <a href="<?php echo $completarurl?>emprendedor/emprendedores.php" >
                                                <i class=" icon-ICONO-EMPRENDEDORES-GRIS" ></i>
                                            </a>
                                        </div>
                                        <div class="d-flex justify-content-center text-uppercase">
                                            <h5> Emprendedores</h5>
                                        </div>
                                    
                                    </div>
                                    <div class="col-6 col-md-4 col-lg  accesos-directos">

                                        <div class="d-flex justify-content-center">  
                                            <a href="<?php echo $completarurl?>asociaciones/asociaciones.php" >
                                                <i class=" mdi mdi-account-group"></i>
                                            </a>
                                        </div>
                                        <div class="d-flex justify-content-center text-uppercase">
                                            <h5> Asociaciones</h5>
                                        </div>
                                    
                                    </div>
                                    <div class="col-6 col-md-4 col-lg accesos-directos">

                                        <div class="d-flex justify-content-center">  
                                            <a href="<?php echo $completarurl?>visor/maps-vector.php" >
                                                <i class="icon-ICONO-VISUALIZADOR-GRIS" ></i>
                                            </a>
                                        </div>
                                        <div class="d-flex justify-content-center text-uppercase">
                                            <h5> visor</h5>
                                        </div>
                                    
                                    </div>
                                    <div class="col-6 col-md-4 col-lg  accesos-directos">

                                        <div class="d-flex justify-content-center">  
                                            <a href="<?php echo $completarurl?>agenda/apps-projects-gantt.php" >
                                                <i class=" mdi mdi-chart-gantt" ></i>
                                            </a>
                                        </div>
                                        <div class="d-flex justify-content-center text-uppercase">
                                            <h5> agenda</h5>
                                        </div>
                                    
                                    </div>
                                    <div class="col-6 col-md-4 col-lg  accesos-directos">

                                        <div class="d-flex justify-content-center">  
                                            <a href="<?php echo $completarurl?>calendario/apps-calendar.php" >
                                                <i class="icon-ICONO-CALENDARIO-GRIS" ></i>
                                            </a>
                                        </div>
                                        <div class="d-flex justify-content-center text-uppercase">
                                            <h5> calendario</h5>
                                        </div>
                                    
                                    </div>

                                </div>
                                


                            </div>
                            <div class="col-xl-5 col-lg-5">
                                
                                
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="text-uppercase my-1 text-center font-weight-normal">Como utilizar la plataforma</h5>
                                        <img src="http://kintunlab.cl/wp-content/uploads/elementor/thumbs/IMAGEN-COMPUTADOR-MELIPEUCO-ou9264ye8o0lw8w15ddjabvti562lohp6bgf2az7og.png"  class="img-fluid mx-auto d-block" alt="">
                                        


                                    </div> <!-- end card-body-->
                                </div>


                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="text-uppercase my-1 text-center font-weight-normal">Para qué sirve la plataforma</h5>
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            </ol>
                                            
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/infografia/GRAFICOS_UTILIDAD_PLATAFORMA/GRAFICOS_UTILIDAD_PLATAFORMA_page-0001.jpg" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/infografia/GRAFICOS_UTILIDAD_PLATAFORMA/GRAFICOS_UTILIDAD_PLATAFORMA_page-0002.jpg" alt="Second slide">
                                                </div>
                                                <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/infografia/GRAFICOS_UTILIDAD_PLATAFORMA/GRAFICOS_UTILIDAD_PLATAFORMA_page-0003.jpg" alt="Third slide">
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Anterior</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Siguiente</span>
                                            </a>
                                        </div>
                                        


                                    </div> <!-- end card-body-->
                                </div>
                                
                                <!-- 
                                    
                                Datos graficos
                               

                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="text-uppercase my-1 text-center font-weight-normal">Indicadores Regionales</h5>
                                        <div class="row mt-4">   
                                            <div class="col-12 col-xl-6"> 
                                                <h4 class="header-title">Grafico 1</h4>
                                                <div id="basic-bar" class="apex-charts mb-3" data-colors="#39afd1"></div>
                                            </div><div class="col-12 col-xl-6"> 
                                                <h4 class="header-title mb-3">Grafico 2</h4>
                                                <div id="high-performing-product" class="apex-charts mb-3" data-colors="#727cf5,#e3eaef"></div>
                                            </div>
                                        </div>
                                        <div class="row">   
                                            <div class="col-12 col-xl-6"> 
                                                <h4 class="header-title">Grafico 3</h4>
                                                <div id="full-stacked-bar" class="apex-charts mb-3" data-colors="#ffbc00,#39afd1,#6c757d,#e3eaef,#727cf5"></div>
                                            </div><div class="col-12 col-xl-6">     
                                                <h4 class="header-title">Grafico 4</h4>
                                                <div class="chart-content-bg">
                                                    <div class="row text-center">
                                                        <div class="col-md-6">
                                                            <p class="text-muted mb-0 mt-3">Esta Semana</p>
                                                            <h2 class="font-weight-normal mb-3">
                                                                <small class="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
                                                                <span>$58.254</span>
                                                            </h2>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-muted mb-0 mt-3">Semana Pasada</p>
                                                            <h2 class="font-weight-normal mb-3">
                                                                <small class="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
                                                                <span>$69.524</span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="dash-item-overlay d-none d-md-block">
                                                    <h5>Valores diarios</h5>
                                                    <p class="text-muted font-13 mb-3 mt-2">Esta semana las ganancias...</p>
                                                    <a href="javascript: void(0);" class="btn btn-outline-primary">Ver Resumen
                                                        <i class="mdi mdi-arrow-right ml-2"></i>
                                                    </a>
                                                </div>

                                                <div id="revenue-chart" class="apex-charts mt-3" data-colors="#727cf5,#0acf97"></div>
                                            </div>
                                        </div>
                                       

                                    </div> 
                                </div> 
                            
                                    -->
                            

                               

                            </div> <!-- end col -->

                            
                        </div>
                        <!-- end row -->

                        

                        

                    </div>
                    <!-- container -->

                </div>
                <!-- content -->
                

              
                <?php include "./partials/footer.php" ?>

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

 
        <?php //include "../partials/right-sidebar.php" ?>

        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app2.js"></script>

        <!-- third party js -->
        <script src="assets/js/vendor/apexcharts.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-world-mill-en.js"></script>
        <!-- third party js ends -->

        <!-- demo app -->
        <script src="assets/js/pages/demo.dashboard.js"></script>
        <!-- end demo js-->
        <!-- third party:js -->
        <script src="assets/js/vendor/jquery.dataTables.min.js"></script>
        <script src="assets/js/vendor/dataTables.bootstrap4.js"></script>
        <script src="assets/js/vendor/dataTables.responsive.min.js"></script>
        <script src="assets/js/vendor/responsive.bootstrap4.min.js"></script>
        <script src="assets/js/vendor/dataTables.checkboxes.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
        <!-- third party end -->

        <!-- demo:js -->
        <script src="assets/js/pages/demo.apex-bar.js"></script>
        <script src="assets/js/pages/demo.sellers.js"></script>
        <!-- demo end -->
        <script>

        $( "#enviandodato" ).click(function() {

            let num="56966226497";

            let msg= "prueba";

            let name= "javier";

            var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
            // win.focus();
        });

        $(document).ready(function(){
            $('.customer-logos').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        });

        </script>
    </body>
</html>