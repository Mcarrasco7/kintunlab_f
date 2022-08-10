<!DOCTYPE html>

<?php
   
   $completarurl="../";
   include $completarurl.'bd_consul/validar.php';
    
    include $completarurl.'bd_consul/conexion.php';
    require_once $completarurl.'bd_consul/DB.class.php';
    $db = new DB();


    

    //get status message from session
    if(!empty($sessData['status']['msg'])){
        $statusMsg = $sessData['status']['msg'];
        $statusMsgType = $sessData['status']['type'];
        unset($_SESSION['sessData']['status']);
    }
   
?>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Eventos | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- third party css -->
        <link href="../assets/css/vendor/dataTables.bootstrap4.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/vendor/responsive.bootstrap4.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/vendor/buttons.bootstrap4.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/vendor/select.bootstrap4.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />
        <link href="../assets/css/vendor/summernote-bs4.css" rel="stylesheet" type="text/css" />


    </head>
    <style>

        
        .nav-tabs.nav-bordered li a {
            border-bottom: 2px solid #727cf5;
        }
        .nav-tabs.nav-bordered li a:hover{
            color: #fff;
            background-color: #b4bafe;
            border-bottom: 2px solid #424562;
        }
        .tab-content{
            border: 2px solid #727cf5;
        }
        .nav-tabs.nav-bordered li a.active, .nav-tabs.nav-bordered li a.active:hover{
             color: #fff;
             background-color: #727cf5;
        }
        tbody tr{
            cursor:pointer;
        }
        #display-hide:before, #display-hide:after{
            display: none !important;
        }
        .contenedortabla{
            background-color: rgba(245, 245, 245, 0);
            -webkit-box-shadow: 0 0 35px 0 rgb(154 161 171 / 0%);
            box-shadow: 0 0 35px 0 rgb(154 161 171 / 0%);
        }
        .datos p{
            font-size: 0.9rem!important;
        }
        

    </style>
    

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
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Eventos</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 

                        <div class="row mb-2">
                            <div class="col-sm-4">
                                <a class="btn btn-danger btn-rounded mb-3 text-light" data-toggle="modal" data-target="#scrollable-modal"><i class="mdi mdi-plus"></i> Crear Evento</a>
                            </div>
                            <div class="col-sm-8">
                                <div class="text-sm-right">
                                    <div class="btn-group mb-3">
                                        <button type="button" class="btn btn-primary">Todos</button>
                                    </div>
                                    <div class="btn-group mb-3 ml-1">
                                        <button type="button" class="btn btn-light">En proceso</button>
                                        <button type="button" class="btn btn-light">Finalizado</button>
                                    </div>
                                    <div class="btn-group mb-3 ml-2 d-none d-sm-inline-block">
                                        <button type="button" class="btn btn-secondary"><i class="dripicons-view-apps"></i></button>
                                    </div>
                                    
                                </div>
                            </div><!-- end col-->
                        </div> 
                        <!-- end row-->

                      

                        <div class="row" id="contenido">
                           
                        </div>
                        <!-- end row-->


                        
                    </div> <!-- container -->

                </div> <!-- content -->
                <?php include "../partials/footer.php" ?>
               

            </div>

            <!-- ============================================================== -->
            <!-- End Page content  <div class="modal-dialog modal-full-width modal-dialog-scrollable">-->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-full-width modal-dialog-scrollable">
                <div class="modal-content ">
                    <div class="modal-header text-light" style="background-color: #727cf5;">
                        <h4 class="modal-title " id="scrollableModalTitle">Crear Nuevo Evento</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="text-light">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" >
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="projectname">Nombre del Evento</label>
                                        <input type="text" id="projectname" class="form-control" placeholder="Ingresar el nombre del evento">
                                    </div>

                                    <div class="form-group">
                                        <label for="project-overview">Descripción del Evento</label>
                                        <textarea class="form-control" id="project-overview" rows="5" placeholder="Ingresar alguna descripción sobre el evento"></textarea>
                                    </div>

                                    <!-- Date View -->
                                    <div class="form-group">
                                        <label>Inicio del Evento</label>
                                        <input type="text" class="form-control" data-provide="datepicker" data-date-format="d-M-yyyy" data-date-autoclose="true">
                                    </div>

                                    <!-- Date View -->
                                    <div class="form-group">
                                        <label>Fin del Evento</label>
                                        <input type="text" class="form-control" data-provide="datepicker" data-date-format="d-M-yyyy" data-date-autoclose="true">
                                    </div>

                                    <div class="form-group">
                                        <label for="project-budget">Etiquetas</label>
                                        <p class="text-muted font-14">Separado por comas</p>
                                        <input type="text" id="project-budget" class="form-control" placeholder="Enter project budget">
                                    </div>

                                    

                                </div> <!-- end col-->

                                <div class="col-xl-6">
                                    <div class="form-group mt-3 mt-xl-0">
                                        <label for="projectname" class="mb-0">Evento</label>
                                        <p class="text-muted font-14">Recomendado usar una imagen referencia de 800x400 (px).</p>

                                        <form action="/" method="post" class="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews"
                                            data-upload-preview-template="#uploadPreviewTemplate">
                                            <div class="fallback">
                                                <input name="file" type="file" />
                                            </div>

                                            <div class="dz-message needsclick">
                                                <i class="h3 text-muted dripicons-cloud-upload"></i>
                                                <h4>Soltar archivo o clicar para subir archivo</h4>
                                            </div>
                                        </form>

                                        <!-- Preview -->
                                        <div class="dropzone-previews mt-3" id="file-previews"></div>

                                        <!-- file preview template -->
                                        <div class="d-none" id="uploadPreviewTemplate">
                                            <div class="card mt-1 mb-0 shadow-none border">
                                                <div class="p-2">
                                                    <div class="row align-items-center">
                                                        <div class="col-auto">
                                                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                                                        </div>
                                                        <div class="col pl-0">
                                                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                                                            <p class="mb-0" data-dz-size></p>
                                                        </div>
                                                        <div class="col-auto">
                                                            <!-- Button -->
                                                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                <i class="dripicons-cross"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end file preview template -->
                                    </div>
                                    <div class="form-group mb-0">
                                        <label for="project-overview">Participantes</label>
                                        
                                        <select class="form-control select2" data-toggle="select2">
                                            <option>Seleccionar</option>
                                            <option value="AZ">Mary Scott</option>
                                            <option value="CO">Holly Campbell</option>
                                            <option value="ID">Beatrice Mills</option>
                                            <option value="MT">Melinda Gills</option>
                                            <option value="NE">Linda Garza</option>
                                            <option value="NM">Randy Ortez</option>
                                            <option value="ND">Lorene Block</option>
                                            <option value="UT">Mike Baker</option>
                                        </select>

                                        <div class="mt-2">
                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" class="d-inline-block">
                                                <img src="img/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
    
                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" class="d-inline-block">
                                                <img src="img/users/avatar-7.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
    
                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" class="d-inline-block">
                                                <img src="img/users/avatar-8.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>

                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lorene Block" class="d-inline-block">
                                                <img src="img/users/avatar-4.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
    
                                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mike Baker" class="d-inline-block">
                                                <img src="img/users/avatar-5.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
                                        </div>

                                    </div>
                                    
                                </div> <!-- end col-->
                            </div>
                            <!-- end row -->

                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary savedata" >Guardar</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->




        <?php include "../partials/right-sidebar.php" ?>
        

        <script>var table;</script>                                                                   
        <!-- bundle -->
        <script src="../assets/js/vendor.min.js"></script>
        <script src="../assets/js/app2.js"></script>

        <!-- third party js -->
        <script src="../assets/js/vendor/jquery.dataTables.min.js"></script>
        <script src="../assets/js/vendor/dataTables.bootstrap4.js"></script>
        <script src="../assets/js/vendor/dataTables.responsive.min.js"></script>
        <script src="../assets/js/vendor/responsive.bootstrap4.min.js"></script>
        <script src="../assets/js/vendor/dataTables.buttons.min.js"></script>
        <script src="../assets/js/vendor/buttons.bootstrap4.min.js"></script>
        <script src="../assets/js/vendor/buttons.html5.min.js"></script>
        <script src="../assets/js/vendor/buttons.flash.min.js"></script>
        <script src="../assets/js/vendor/buttons.print.min.js"></script>
        <script src="../assets/js/vendor/dataTables.keyTable.min.js"></script>
        <script src="../assets/js/vendor/dataTables.select.min.js"></script>
        <!-- third party js ends -->

        <!-- demo app 
        <script src="../assets/js/pages/demo.datatable-init.js"></script>-->
        <!-- end demo js-->
        <!-- plugin js -->
        <script src="../assets/js/vendor/summernote-bs4.min.js"></script>
        <!-- Summernote demo -->
        <script src="../assets/js/pages/demo.summernote.js"></script>
        <script >   
       var insert=false;
       
       
       function loaddata(id_user){
            var iduser=id_user;
            $.ajax({
                url: "./configuracion/data.php",
                data: {
                    id: iduser
                },
                type: "POST",
                dataType : "html",
                success: function (data){

                    $('#contenido').html(data);

                    
                },

            });
        } 

       $( document ).ready(function() {
        loaddata(0);
       });   
                                            

        </script>          
    </body>
    <!-- Scrollable modal -->


</html>
