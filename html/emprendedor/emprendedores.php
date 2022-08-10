<!DOCTYPE html>

<?php
   
    $completarurl="../";
    include $completarurl.'bd_consul/validar.php';
    
    include $completarurl.'bd_consul/conexion.php';
    
    require_once $completarurl.'bd_consul/DB.class.php';
    
    $db = new DB();
    //get users from database
    $comunas = $db->getRows('comunas',array('order_by'=>'comuna_nombre asc'));

    //get status message from session
    if(!empty($sessData['status']['msg'])){
        $statusMsg = $sessData['status']['msg'];
        $statusMsgType = $sessData['status']['type'];
        unset($_SESSION['sessData']['status']);
    }

    $sql= "SELECT E.*, C.comuna_nombre FROM emprendedor E, comunas C
     WHERE E.id_comuna = C.comuna_id  order by rut;";

    $result = $mysqli->query($sql);

    $customers = $result->fetch_all(MYSQLI_ASSOC);

?>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Emprendedores | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
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
        <link rel="stylesheet" href="https://js.arcgis.com/3.38/esri/css/esri.css">

        
       

        
        
         

    </head>
    <style>

        .nav-tabs.nav-bordered li a.active {
            color: #727cf5;
        }
        td{
            cursor: pointer;
        }
        #dataTable{
            font-size: 0.8rem;
        }

        .p-4 {
            padding: 1.5rem!important;
        }
        .mb-0, .my-0 {
            margin-bottom: 0!important;
        }
        .shadow-sm {
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
        }    
        
        /* user-dashboard-info-box */
        .user-dashboard-info-box .candidates-list .thumb {
            margin-right: 20px;
        }
        .user-dashboard-info-box .candidates-list .thumb img {
            width: 80px;
            height: 80px;
            -o-object-fit: cover;
            object-fit: cover;
            overflow: hidden;
            border-radius: 50%;
        }

        .user-dashboard-info-box .title {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 5px 0;
        }

        .user-dashboard-info-box .candidates-list td {
            vertical-align: middle;
        }

        .user-dashboard-info-box td li {
            margin: 0 4px;
        }

        .user-dashboard-info-box .table thead th {
            border-bottom: none;
        }

        .table th {
            border: 0;
        }

        .user-dashboard-info-box .candidate-list-favourite-time .candidate-list-favourite {
            margin-bottom: 10px;
        }

        .table{
            min-width: 100%;
        }

        .user-dashboard-info-box .candidate-list-details ul {
            color: #969696;
        }

        /* Candidate List */
        .candidate-list {
            background: #ffffff;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            border-bottom: 1px solid #eeeeee;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 20px;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
        .candidate-list:hover {
            -webkit-box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);
            box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);
            position: relative;
            z-index: 99;
        }
        .candidate-list:hover a.candidate-list-favourite {
            color: #e74c3c;
            -webkit-box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);
            box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);
        }

        .candidate-list .candidate-list-image {
            margin-right: 25px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 80px;
            flex: 0 0 80px;
            border: none;
        }
        .candidate-list .candidate-list-image img {
            width: 80px;
            height: 80px;
            -o-object-fit: cover;
            object-fit: cover;
        }

        .candidate-list-title {
            margin-bottom: 5px;
        }

        .candidate-list-details ul {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-bottom: 0px;
        }
        .candidate-list-details ul li {
            margin: 5px 10px 5px 0px;
            font-size: 13px;
        }

        .candidate-list .candidate-list-favourite-time {
            margin-left: auto;
            text-align: center;
            font-size: 13px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 90px;
            flex: 0 0 90px;
        }
        .candidate-list .candidate-list-favourite-time span {
            display: block;
            margin: 0 auto;
        }
        .candidate-list .candidate-list-favourite-time .candidate-list-favourite {
            display: inline-block;
            position: relative;
            height: 40px;
            width: 40px;
            line-height: 40px;
            border: 1px solid #eeeeee;
            border-radius: 100%;
            text-align: center;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            margin-bottom: 20px;
            font-size: 16px;
            color: #646f79;
        }
        .candidate-list .candidate-list-favourite-time .candidate-list-favourite:hover {
            background: #ffffff;
            color: #e74c3c;
        }

        .candidate-banner .candidate-list:hover {
            position: inherit;
            -webkit-box-shadow: inherit;
            box-shadow: inherit;
            z-index: inherit;
        }

        
        .p-4 {
            padding: 1.5rem!important;
        }
        .mb-0, .my-0 {
            margin-bottom: 0!important;
        }
        .shadow-sm {
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
        }

        .user-dashboard-info-box .candidates-list .thumb {
            margin-right: 20px;
        }
        .table-responsive {
            display: table;
        }
        a:hover{
            text-decoration: none!important;
            }
        
        .btn{
white-space:normal !important;
    max-width:200px;
}

.symbol {
        width:20px;
        height:20px;
        margin-right:20px;
        float:left;
        -webkit-border-radius: 10px;
        border-radius: 10px;
}
.serieName {
    cursor:pointer;
}

.item {
    height:40px;
    clear:both;
}
.card{
    background-color: #fff0!important;
    box-shadow: 0 0 35px 0 rgb(154 161 171 / 0%)!important;
    -webkit-box-shadow: 0 0 35px 0 rgb(154 161 171 / 0%)!important;
}
.apexcharts-xaxis .apexcharts-datalabel{
    fill: #000!important;
}
.leyenda{
    min-height:150px!important;
}
.apex-charts.v2{
    min-height: 350px !important;
}



.apex-charts.cuadra{
    height: 200px !important;
}
@media screen and (min-width: 1200px) {
  .apex-charts.cuadra{
    height: 300px !important;
  }
}
.serieName p{
    font-size:11px !important;
}
.serieName{
    border-radius: 0.8rem !important;
}
.serieName p{
    color: #fff,!important;
}
.mapid { height: 400px;  width: 100%;}
.apexcharts-yaxis{
        display:none;
    }
    .bg-white.rounded.col-12.p-4:hover{
        background-color:#727cf59c!important;
        color:#fff!important;
    }
    .bg-white.rounded.col-12.p-4.datoabierto:hover{
        background-color:#fff!important;
        color:#969696!important;
    }
    .clicdetalle.show{
        background-color:#fff!important;
        color:#969696!important;
    }
    .bg-white.rounded.col-12.p-4.datoabierto:hover .list-unstyled li{
        color:#969696!important;
    }
    
    .bg-white.rounded.col-12.p-4:hover .list-unstyled li{
        color:#fff!important;
    }
    
    
    
    
    .fondos{
        height:80%;overflow:auto;
    }
    .fondos .table td:first-child { width: 50% ;}
    #row-callback-preview .dataTables_wrapper > .row:first-child{
        display:none;
    }
    .search-icon{
        z-index: 4!important;
    }
    .btn.ver-data-grafica, .btn.ver-data-users{
        max-width:100%!important;
    }
    /*mapa*/
    #map{
        height: 300px;
        width: 100%;
	 	padding: 0;
	 	margin: 0;
    }

    #search {
         display: block;
         position: absolute;
         z-index: 2;
         top: 20px;
         left: 74px;
      }

      .contenido {
            border: 2px solid #727cf5;
        }
        .app-search .form-control{
            background-color: #fff;
        }

    /*fin mapa*/

    .candidate-list-details .fa-arrow-down,.candidate-list-details .fa-arrow-up{
        pointer-events: none
    }

    /* subir archivos */


.file-upload {
  background-color: #ffffff;
  margin: 0 auto;

}

.file-upload-btn {
  width: 100%;
  margin: 0;
  color: #fff;
  background: #727cf5;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #727cf5;
  transition: all .2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.file-upload-btn:hover {
  background: #4e5bf2;
  color: #ffffff;
  transition: all .2s ease;
  cursor: pointer;
}

.file-upload-btn:active {
  border: 0;
  transition: all .2s ease;
}

.file-upload-content {
  display: none;
  text-align: center;
}

.file-upload-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.image-upload-wrap {
  margin-top: 20px;
  border: 4px dashed #727cf5;
  position: relative;
}

.image-dropping,
.image-upload-wrap:hover {
  background-color: #727cf5;
  color:#fff!important;
  border: 4px dashed #ffffff;
}

.image-title-wrap {
  padding: 0 15px 15px 15px;
  color: #222;
}

.drag-text {
  text-align: center;
}

.drag-text h3 {
  font-weight: 100;
  padding: 60px 0;
}

.file-upload-image {
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  padding: 20px;
}

.remove-image {
  width: 200px;
  margin: 0;
  color: #fff;
  background: #cd4535;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #b02818;
  transition: all .2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.remove-image:hover {
  background: #c13b2a;
  color: #ffffff;
  transition: all .2s ease;
  cursor: pointer;
}

.remove-image:active {
  border: 0;
  transition: all .2s ease;
}
.serieName p {
    font-size:15px !important;
}
/* fin subir archivos */
    
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
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Emprendedores</a></li>
                                        </ol>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>     
                        <!-- end page title --> 

                        
                        <div class="row mb-4">
                            <div class="col-12">
                                <div class="card ">
                                    <div class="card-body">
                                        <div class="row px-2 m-0">
                                            <div class="col-12">
                                                <div class="page-title-right float-right">
                                                    <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#right-modal">Ayuda</button>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                
                                                    
                                                
                                                <div class="page-title-box">
                                                    <div class="page-title-right">
                                                        <button id="new_user" data-id="0" class="btn btn-primary "><i class="mdi mdi-account-multiple-plus mr-1"></i>Nuevo Emprendedor</button>
                                                    </div>
                                                    
                                                    <h4 class="header-title">Emprendedores</h4>
                                                    <p class="text-muted font-18 col-10">
                                                        Lista de emprendedores que de la comuna de Melipeuco. Un emprendedor es una persona que identifica una necesidad y conociendo los riesgos emprende la acción de organizar los recursos necesarios para convertirse en creador o fundador de una empresa o negocio, ​​con la finalidad de solventar la necesidad obteniendo una respectiva ganancia
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row bg-primary card p-4 m-0">
                                            <div class="app-search dropdown d-none d-lg-block">
                                                <form>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control dropdown-toggle" placeholder="Buscar..." id="top-search2">
                                                        <span class="mdi mdi-magnify search-icon"></span>
                                                        <div class="input-group-append">
                                                            <button class="btn btn-primary" type="submit">Buscar</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                       

                                        
                                        <div class="user-dashboard-info-box mb-4 p-4 table-responsive p-4" id="row-callback-preview">
                                            <table class="table table-responsive table dt-responsive nowrap w-100 " id="example">
                                                <thead>
                                                <tr class="d-none">
                                                    <th></th>
                                                    
                                                </tr>
                                                </thead>
                                                <tbody id="user-list">
                                                
                                                </tbody>
                                            </table>
                                        </div>     


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
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        

        <?php include "../partials/right-sidebar.php" ?>
        

        
        <!-- bundle -->
        <script src="../assets/js/vendor.min.js"></script>
        <script src="../assets/js/app2.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
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
        
        
        <!-- third party:js -->

        <!-- third party:js -->
        <script src="../assets/js/vendor/apexcharts.min.js"></script>
        <script src="../assets/js/pages/demo.apex-radar2.js"></script>
        <!-- third party end -->
        
        <!-- mapa
        
        -->

        <script src="http://js.arcgis.com/3.38/"></script>
        <script src="configuracion/map.js"></script>
        
        <!-- end demo js-->
        <!-- plugin js -->
        
        <!-- Summernote demo -->
        

        <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog"  aria-hidden="true">
            <div class="modal-dialog modal-full-width modal-dialog-scrollable">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="scrollableModalTitle">Información de emprendedor</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
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
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary savedatauser" >Guardar</button>
                    </div>
                    
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        <div id="right-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-right modal-dialog-scrollable mh-100">
                <div class="modal-content mh-100">
                    
                    <div class="modal-body text-justify">
                        <div class="text-center text-justify">
                       
                        <img src="../assets/images/ayudas/temp.png" class="img-fluid" alt="Responsive image">
                                               
                    
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        



        <script>                                                          
        var insert =false;
        var table;
        var chart;
        
        
        $('#new_user').on('click',function(){
            insert=true;
            console.log(insert);
        });
                                                    
        function loaddata(id_user){
            var iduser=id_user;
            $.ajax({
                url: "./configuracion/data-emprendedor.php",
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

        
        $( "#new_user" ).click(function() {
            loaddata(0);
        });

        
        
         function loaduserdata(){

            if(table){
                table.destroy();
                
                
            }
            
            $.ajax({
                url: "./configuracion/updateuser.php",
                data: {
                    id: "iduser"
                },
                type: "POST",
                dataType : "html",
                success: function (data){
                    $('#user-list').html(data);
                    /* */
                    
                    table = $('#example').DataTable( { 
                        language : lenguaje ,
                        info:     false,
                        lengthChange : false,
                        ordering: false,pageLength: 25,
                       
                    });
                    $('#top-search2').keyup(function(){
                        console.log("hola");
                        table.search($(this).val()).draw() ;
                    });

                    load_graph();
                },

            });
            
        }
        
        $('#example').on( 'page.dt', function () {
            load_graph();

        } );
       
        

        
        $( document ).ready(function() {
            /*
            var table = $('#example').DataTable( {
                drawCallback: loaduserdata
            });
            */
            $( "#cerrarmodal" ).click(function() {
                $('#scrollable-modal').modal('hide');
            });

            var table;
            loaduserdata()

            
        
            
        });
        
        
        
        </script>    
        
        

    </body>
    <!-- Scrollable modal -->


</html>
