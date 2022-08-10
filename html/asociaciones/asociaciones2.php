<!DOCTYPE html>

<?php
   
   $completarurl="../";
   include $completarurl.'bd_consul/validar.php';
    
    include $completarurl.'bd_consul/conexion.php';
    require_once $completarurl.'bd_consul/DB.class.php';
    $db = new DB();

    //get users from database
    $organizaciones = $db->getRows('organizaciones',array('order_by'=>'id_organizaciones asc'));
    $comunidades = $db->getRows('comunidades',array('order_by'=>'id_comunidades asc'));

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

        .nav-tabs.nav-bordered li a.active {
             color: #727cf5;
             background-color: #4543;
        }
        tbody tr{
            cursor:pointer;
        }
        #display-hide:before, #display-hide:after{
            display: none !important;
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
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title">Asociaciones</h4>
                                        <p class="text-muted font-14">
                                            Lista de Socios de la comuna de Melipeuco.
                                        </p>

                                        <ul class="nav nav-tabs nav-bordered mb-3">
                                            <li class="nav-item w-50">
                                                <a href="#org" data-toggle="tab" aria-expanded="false" class="nav-link active" data-id="org">
                                                    Organizaciones Comunitarias
                                                </a>
                                            </li>
                                            <li class="nav-item w-50">
                                                <a href="#comun" data-toggle="tab" aria-expanded="true" class="nav-link" data-id="equi" id="comuntab">
                                                    Equipos Tecnicos
                                                </a>
                                            </li>
                                        </ul> <!-- end nav-->




                                        <div class="tab-content">
                                                <div class="tab-pane show active" id="org" role="tabpanel">
                                                    <table id="row-callback-datatable7" class="table dt-responsive nowrap w-100">
                                                        <thead>
                                                            <tr>
                                                                <th>Organización</th>
                                                                <th>Clasificación</th>
                                                                <th>Rol</th>
                                                                <th>Antiguedad</th>
                                                                <th>N° personalidad juridica</th>
                                                                <th>Renovación de personalidad juridica</th>
                                                                <th>Vigencia</th>
                                                                <th>Socios</th>
                                                                <th>Presidente</th>
                                                                <th>Secretario/a</th>
                                                                <th>Tesorero/a</th>
                                                                <th>Domicilio</th>
                                                                <th>fono</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tablaorg" class="datos">
                                                            
                                                            
                                                        </tbody>
                                                    </table> 
                                                </div>            
                                                <div class="tab-pane show" id="comun" role="tabpanel">
                                                    <div id="tablacomu">
                                                    </div>
                                                    <table id="row-callback-datatable6" class="table dt-responsive nowrap w-100">
                                                        <thead>
                                                            <tr>
                                                            
                                                                <th>Nombre Comunidad, grupo o Comité</th>
                                                                <th>Programa</th>
                                                                <th>Sector</th>
                                                                <th>Socios</th>
                                                                <th>Principales rubros</th>
                                                                <th>Presidente / Delegado</th>
                                                                <th>Autoridades ancestrales</th>    
                                                                <th>Otros Liderazgos</th>    
                                                                <th>Empresas, Asociaciones, Cooperativas</th>    
                                                            </tr>
                                                        </thead>
                                                        <tbody class="datos">
                                                        <?php if(!empty($comunidades)): foreach($comunidades as $comunidad): ?>
                                                            <tr data-id="<?php echo $comunidad['id_comunidades'];?>">
                                                                <td><?php echo $comunidad['nombre'];?></td>
                                                                <td><?php if($comunidad['programa']==1){ echo "PRODESAL";} elseif ($comunidad['programa']==2) {echo "PDTI, UPT Cordillera";} elseif ($comunidad['programa']==3) {echo "PDTI, UPT El Valle 1";} elseif ($comunidad['programa']==4) {echo "PDTI, UPT Santa María de Llaima";} else{ echo "PDTI, UPT El Valle 2";}?></td>
                                                                <td><?php echo $comunidad['sector'];?></td>
                                                                <td><?php echo $comunidad['socios'];?></td>
                                                                <td><?php echo $comunidad['presidente'];?></td>
                                                                <td><?php echo $comunidad['rubroprincipal'];?></td>
                                                                <td><?php echo $comunidad['autoridadancestral'];?></td>
                                                                <td><?php echo $comunidad['liderazgos'];?></td>
                                                                <td><?php echo $comunidad['comunidadescol'];?></td>
                                                            </tr>
                                                            <?php endforeach; else: ?>
                                                                <option value="0">No existen datos</option>
                                                            <?php endif; ?>
                                                            
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

        <!-- demo app -->
        <script src="../assets/js/pages/demo.datatable-init.js"></script>
        <!-- end demo js-->
        <!-- plugin js -->
        <script src="../assets/js/vendor/summernote-bs4.min.js"></script>
        <!-- Summernote demo -->
        <script src="../assets/js/pages/demo.summernote.js"></script>
        <script >   
       
        
        function loaduserdata(){
            
            
            table= $('#row-callback-datatable7').DataTable({
                        "ajax": {
                            "url": "configuracion/datatables-org.php",
                            "type": 'POST',
                        },
                        "columns":[
                            {"data":"nombre"},
                            {"data":"clasificación"},
                            {"data":"rol"},
                            {"data":"creacion"},
                            {"data":"personalidadjuridica"},
                            {"data":"renovacionpersonalidadjuridica"},
                            {"data":"vigencia"},
                            {"data":"socios"},
                            {"data":"presidente"},
                            {"data":"secretario"},
                            {"data":"tesorero"},
                            {"data":"domicilio"},
                            {"data":"contacto"}
                        ],
                        "language": {
                            "paginate": {
                                "previous": "<i class='mdi mdi-chevron-left'>",
                                "next": "<i class='mdi mdi-chevron-right'>"
                            }
                        },
                        "drawCallback": function() {
                            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
                        },
                        "createdRow": function(row, data, index) {
                            $(row).attr('data-id', data.id_organizaciones);
                            /*if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                                $('td', row).eq(5).addClass('text-danger');
                            }*/
                        }
                        }); 
        }
         

        $( document ).ready(function() {
            loaduserdata()
                              
        });

        
       

        


        
      
        var datatable;
        $( "#comuntab" ).click(function() {
            
            $( "#comun" ).addClass( "active" );
            console.log("comuntab");
            if(!datatable){
                datatable= $('#row-callback-datatable6').DataTable({
                "language": {
                    "paginate": {
                        "previous": "<i class='mdi mdi-chevron-left'>",
                        "next": "<i class='mdi mdi-chevron-right'>"
                    }
                },
                "drawCallback": function() {
                    $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
                },
                "createdRow": function(row, data, index) {
                    if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                        $('td', row).eq(5).addClass('text-danger');
                    }
                }
                });
            }
        });

        $('#row-callback-datatable7').on('dblclick', 'tr', function () {
            console.log($(".nav-link.active" ).data('id'));
            if($(".nav-link.active" ).data('id')=="org"){ 
                $( "#scrollableModalTitle" ).html( "Información de organizaciones comunitarias" );
                loaddata($(this).data('id'),"data-org.php");
                
            }
            if($(".nav-link.active" ).data('id')=="equi"){
                $( "#scrollableModalTitle" ).html( "Información de equipos tecnicos" );
                loaddata($(this).data('id'),"data-comu.php");
            }
         } );

        $(".datos tr").dblclick(function() {
            console.log($(".nav-link.active" ).data('id'));
            if($(".nav-link.active" ).data('id')=="org"){ 
                $( "#scrollableModalTitle" ).html( "Información de organizaciones comunitarias" );
                loaddata($(this).data('id'),"data-org.php");
            }
            if($(".nav-link.active" ).data('id')=="equi"){
                $( "#scrollableModalTitle" ).html( "Información de equipos tecnicos" );
                loaddata($(this).data('id'),"data-comu.php");
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
