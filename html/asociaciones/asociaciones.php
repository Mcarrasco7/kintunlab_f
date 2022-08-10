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
        <title>Asociaciones | KintunLab</title>
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
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Asociaciones</a></li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title"></h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 


                        <div class="row mb-4">
                            <div class="col-12">
                                <div class="card contenedortabla">
                                    <div class="card-body">
                                        <h4 class="header-title">Asociaciones</h4>
                                        <p class="text-muted font-14">
                                            Lista de Socios de la comuna de Melipeuco.
                                        </p>

                                        <ul class="nav nav-tabs nav-bordered ">
                                            <li class="nav-item w-50">
                                                <a href="#org" data-toggle="tab" aria-expanded="false" class="nav-link text-uppercase h-100 active" data-id="org">
                                                    Organizaciones Comunitarias
                                                </a>
                                            </li>
                                            <li class="nav-item w-50">
                                                <a href="#comun" data-toggle="tab" aria-expanded="true" class="nav-link text-uppercase h-100" data-id="equi" id="comuntab">
                                                   Unidades de planificación territorial
                                                </a>
                                            </li>
                                        </ul> <!-- end nav-->




                                        <div class="tab-content p-2">
                                                <div class="tab-pane show active table-responsive" id="org" role="tabpanel">
                                                    <div class="page-title-right">
                                                        <button id="tip1" data-id="0" data-tipo="org" class="btn btn-primary new_user "><i class="mdi mdi-account-multiple-plus mr-1"></i>Nuevo Organización</button>
                                                    </div>
                                                    <table id="tableorg" class="table nowrap w-100">
                                                        <thead>
                                                            <tr class="d-none">
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>

                                                            </tr>
                                                        </thead>

                                                        <tbody id="tablaorg" class="datos ">
                                                            
                                                                
                                                        </tbody>
                                                    </table> 
                                                </div>            
                                                <div class="tab-pane show table-responsive" id="comun" role="tabpanel">
                                                    <!-- 
                                                <div class="page-title-right">
                                                        <button id="tip0" data-id="0"  data-tipo="utp" class="btn btn-primary new_user"><i class="mdi mdi-account-multiple-plus mr-1"></i>Nueva UPT</button>
                                                    </div>
                                                    -->
                                                    <table id="tablecomu" class="table nowrap w-100">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="datos " id="tablacomu">
                                                        
                                                        
                                                       
                                                            
                                                        </tbody>
                                                    </table> 
                                                </div>  
                                                                                   
                                            </div> <!-- end preview-->
                                        
                                    
                                        </div> <!-- end tab-content-->

                                    </div> <!-- end card body-->
                                </div> <!-- end card -->
                            </div><!-- end col-->
                        </div>
                        <!-- end row-->


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
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content ">
                    <div class="modal-header text-light" style="background-color: #727cf5;">
                        <h4 class="modal-title " id="scrollableModalTitle">Información de organizaciones comunitarias</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="text-light">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" >
                        <div id="contenido_actualizar">

                        <div class="col-lg-6">
                            <form id="form-datos">        
                                <div class="form-group">
                                    <label for="name">Nombre Completo</label>
                                    <input type="text" id="name" class="form-control" value="2">
                                </div>
                            </form>
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
        
        

        $( document ).ready(function() {
            
            loaduserdata("datatables-org.php","#tableorg","tablaorg");
            loaduserdata("datatables-comu.php","#tablecomu","tablacomu");
                              
        });

        
       

        
        function loaduserdata(url,tabledata,tablebody){
            
            $.ajax({
                url: "./configuracion/"+url,
                data: {
                    id: "iduser"
                },
                type: "POST",
                dataType : "html",
                success: function (data){
                    $('#'+tablebody).html(data);
                    /* */
                    if($.fn.DataTable.isDataTable(tabledata)){
                        console.log("destruir");
                        $(tabledata).DataTable().clear();
                        $(tabledata).DataTable().destroy();
                    }
                    
                    
                    var table = $(tabledata).DataTable({ 
                        info:     false,
                        language : lenguaje ,
                        lengthChange : false,
                        ordering: false,
                        fixedHeader: true
                    });
                },

            });
            
            
        }

        
      
       

       

        $( ".new_user" ).click(function() {
            insert=true;
            
            if($(this).data('tipo')=="org"){ 
                $( "#scrollableModalTitle" ).html( "Información de organizaciones comunitarias" );
                loaddata(0,"data-org.php");
            }
            if($(this ).data('tipo')=="utp"){
                $( "#scrollableModalTitle" ).html( "Información de equipos tecnicos" );
                loaddata(0,"data-comu.php");
            }
            
        });
       
        
        function loaddata(id_user,urlid){
            var iduser=id_user;
            $.ajax({
                url: "configuracion/"+urlid,
                data: {
                    id: iduser
                },
                type: "POST",
                dataType : "html",
                success: function (data){
                    $('#form-datos')[0].reset();
                    $('#contenido_actualizar').html(data);
                    $('#scrollable-modal').modal('show');
                    
                    
                },

            });
        }    




           

            
                
                                            

        </script>          
    </body>
    <!-- Scrollable modal -->


</html>
