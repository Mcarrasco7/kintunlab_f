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
        <title>Calendario | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- third party css -->
        <link href="../assets/css/vendor/fullcalendar.min.css" rel="stylesheet" type="text/css" />
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
                                            <li class="breadcrumb-item active">Calendario</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title"></h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 

                        <div class="row">
                            <div class="col-12">

                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <a href="#" data-toggle="modal" data-target="#add-category" class="btn btn-lg font-16 btn-primary btn-block  ">
                                                    <i class="mdi mdi-plus-circle-outline"></i> Crear Nuevo Evento
                                                </a>
                                                <div id="external-events" class="m-t-20">
                                                    <br>
                                                    <p class="text-muted">Mueve las actividades al calendario</p>
                                                    <div class="external-event bg-success" data-class="bg-success">
                                                        <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Nuevo fondo
                                                    </div>
                                                    <div class="external-event bg-info" data-class="bg-info">
                                                        <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Planificar algo
                                                    </div>
                                                    <div class="external-event bg-warning" data-class="bg-warning">
                                                        <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Listar
                                                    </div>
                                                    <div class="external-event bg-danger" data-class="bg-danger">
                                                        <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Eliminar 
                                                    </div>
                                                </div>
    
                                                <!-- checkbox -->
                                                <div class="custom-control custom-checkbox mt-3">
                                                    <input type="checkbox" class="custom-control-input" id="drop-remove">
                                                    <label class="custom-control-label" for="drop-remove">Eliminar luego de agregar</label>
                                                </div>
    
                                            </div> <!-- end col-->

                                            <div class="col-lg-9">
                                                <div id="calendar"></div>
                                            </div> <!-- end col -->

                                        </div>  <!-- end row -->
                                    </div> <!-- end card body-->
                                </div> <!-- end card -->

                                <!-- Add New Event MODAL -->
                                <div class="modal fade" id="event-modal" tabindex="-1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header pr-4 pl-4 border-bottom-0 d-block">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title">Evento</h4>
                                            </div>
                                            <div class="modal-body pt-3 pr-4 pl-4">
                                            </div>
                                            <div class="text-right pb-4 pr-4">
                                                <button type="button" class="btn btn-light " data-dismiss="modal">Cerrar</button>
                                                <button type="button" class="btn btn-success save-event  ">Crear Evento</button>
                                                <button type="button" class="btn btn-danger delete-event  " data-dismiss="modal">Eliminar</button>
                                            </div>
                                        </div> <!-- end modal-content-->
                                    </div> <!-- end modal dialog-->
                                </div>
                                <!-- end modal-->

                                <!-- Modal Add Category -->
                                <div class="modal fade" id="add-category" tabindex="-1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header border-bottom-0 d-block">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title">Agregar Categoria</h4>
                                            </div>
                                            <div class="modal-body p-4">
                                                <form>
                                                    <div class="form-group">
                                                        <label class="control-label">Nombre de la categoria</label>
                                                        <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label">Elegir color</label>
                                                        <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                                            <option value="primary">Primario</option>
                                                            <option value="success">Satisfactorio</option>
                                                            <option value="danger">Peligro</option>
                                                            <option value="info">Información</option>
                                                            <option value="warning">Alerta</option>
                                                            <option value="dark">Oscuro</option>
                                                        </select>
                                                    </div>

                                                </form>

                                                <div class="text-right">
                                                    <button type="button" class="btn btn-light " data-dismiss="modal">Cerrar</button>
                                                    <button type="button" class="btn btn-primary ml-1   save-category" data-dismiss="modal">Guardar</button>
                                                </div>

                                            </div> <!-- end modal-body-->
                                        </div> <!-- end modal-content-->
                                    </div> <!-- end modal dialog-->
                                </div>
                                <!-- end modal-->
                            </div>
                            <!-- end col-12 -->
                        </div> <!-- end row -->
                        
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
        <script src="../assets/js/vendor/jquery-ui.min.js"></script>
      
       

        
        <script src="../assets/js/vendor/fullcalendar.min.js"></script>

        <link href='https://cdn.jsdelivr.net/npm/fullcalendar@3.10.2/dist/fullcalendar.min.css' rel='stylesheet' />

 

        <script src='https://cdn.jsdelivr.net/npm/fullcalendar@3.10.2/dist/locale/es.js'></script>

        <!-- third party js ends -->

        <!-- demo app -->
        <script src="../assets/js/pages/demo.calendar.js"></script>
        <!-- end demo js-->

    </body>
</html>
