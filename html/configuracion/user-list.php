<?php
   

    $completarurl="../";
    include $completarurl.'bd_consul/validar.php';
    
    include $completarurl.'bd_consul/conexion.php';
    
    require_once $completarurl.'bd_consul/DB.class.php';

    $sql= "SELECT UD.*, U.*, C.comuna_nombre, UP.* FROM user_data UD, user U, comunas C, user_permission UP
   WHERE UD.id_user_data = U.id_user_data and UD.id_comuna = C.comuna_id and UP.user_id = U.user_id and user_type = 2 order by U.user_id;";

  $result = $mysqli->query($sql);

  $customers = $result->fetch_all(MYSQLI_ASSOC);


   mysqli_close($mysqli);


?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <title>Dashboard | KintunLab</title>
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
    
    <style>
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
      /*-webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      */
      padding: 30px 0;
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
  .bg-white{
    background-color:#ffffffa6!important;
  }
  .custom-control-input {
      opacity: 1!important;
      z-index: 1;
  }
  </style>

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
            </style>
            
            <div class="content-page">
                <div class="content">
                    <?php include "../partials/topbar.php" ?>
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

                <!-- Start Content-->
                <div class="container-fluid ">
                  <!-- start page title -->
                  <div class="row">
                      <div class="col-12 mb-3">
                          <div class="page-title-box">
                              <div class="page-title-right">
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
                                  </form>
                              </div>
                              <h4 class="page-title"> </h4>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12 col-lg-12">
                      <div class="user-dashboard-info-box mb-4 card p-4 dt-responsive nowrap w-100">
                        <table class="table dt-responsive nowrap w-100" id="dataTable">
                          <thead>
                            <tr>
                              <th>Usuario</th>
                              <th class="text-center">Lista emprendedores</th>
                              <th class="text-center">Visor</th>
                              <th class="text-center">Dashboard</th>
                              <th class="text-center">Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                          <?php foreach($customers as $customer) {  ?>
                            <tr class="candidates-list" ondblclick="window.location.href = 'configura.php?id=<?php echo $customer['user_id'];?>';" class="ver-alfa <?php if($customer['user_type']==2){echo "btn-primary";}else{echo "btn-success";} ?>" data-id="<?php echo $customer['user_id'];?>">
                              <td class="title ">
                                <div class="thumb ml-2">
                                  <img class="img-fluid" src="<?php if($customer['sexo']==1){echo "https://cdn3.iconfinder.com/data/icons/3d-characters/213/man-3d-avatar-8svg-512.png";}else{echo "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png";} ?>" alt="">
                                </div>
                                <div class="candidate-list-details">
                                  <div class="candidate-list-info">
                                    <div class="candidate-list-title">
                                      <h5 class="mb-0"><a href="configura.php?id=<?php echo $customer['user_id'];?>"><?= $customer['user_name']; ?> / <?= $customer['name']; ?></a></h5>
                                    </div>
                                    <div class="candidate-list-option">
                                      <ul class="list-unstyled">
                                        <li><i class="fas fa-filter pr-1"></i><?php if($customer['user_type']==2){echo "ONEMI";}elseif($customer['user_type']==1){echo "Encargado Municipal";}else{echo "COE";} ?></li>
                                        <li><i class="fas fa-map-marker-alt pr-1"></i><?= $customer['comuna']; ?></li>
                                        <li><i class="fas fa-phone pr-1"></i><?= $customer['telefono']; ?></li>
                                        <li><i class="fas fa-envelope pr-1"></i><?= $customer['email']; ?></li>

                                        
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              
                              <td>
                                <div class="custom-control custom-checkbox custom-checkbox-success mb-2">
                                  <input type="checkbox" class="custom-control-input" data-user="<?php echo $customer['user_id'];?>" data-tipo="lista_emprendedor" id="lista_emprendedor<?php echo $customer['user_id'];?>" <?php if($customer['lista_emprendedor']==1){ echo "checked"; }?>>
                                </div>
                              </td>
                              <td>
                                <div class="custom-control custom-checkbox custom-checkbox-success mb-2">
                                    <input type="checkbox" class="custom-control-input" data-user="<?php echo $customer['user_id'];?>" data-tipo="visor" id="visor<?php echo $customer['user_id'];?>" <?php if($customer['visor']==1){ echo "checked"; }?>>
                                </div>
                              </td>
                              <td>
                                <div class="custom-control custom-checkbox custom-checkbox-success mb-2">
                                    <input type="checkbox" class="custom-control-input " data-user="<?php echo $customer['user_id'];?>" data-tipo="dashboard" id="dashboard<?php echo $customer['user_id'];?>" <?php if($customer['dashboard']==1){ echo "checked"; }?>>
                                </div>
                              </td>
                              <td class="candidate-list-favourite-time text-center">
                                <?php if($customer['user_active']==1){
                                  echo '
                                  <button type="button" class="btn btn-info config-accion-estado w-100" data-id="'.$customer['user_id'].'" value="0">Desactivar</button>';
                                }else{
                                  echo '  
                                  <button type="button" class="btn btn-secondary config-accion-estado w-100" data-id="'.$customer['user_id'].'" value="1">Activar</button>';

                                }?>
                                
                              </td>
                              
                            </tr>
                            <?php }?>  
                          </tbody>
                        </table>
                      </div>

                      </div>
                  </div>

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
        
        <!-- third party js ends -->
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
        
        
        <!-- demo app -->
        


        <script type="text/javascript">

          $(document).ready(function(){
            $('#dataTable').DataTable({
              "order": [], 
                  "aaSorting": [],
              "language": {
              "sProcessing":     "Procesando...",
              "sLengthMenu":     "Mostrar _MENU_ registros",
              "sZeroRecords":    "No se encontraron resultados",
              "sEmptyTable":     "Ningún dato disponible en esta tabla",
              "sInfo":           "Mostrando registros de _START_ a _END_ de un total de _TOTAL_ registros",
              "sInfoEmpty":      "Mostrando registros de 0 a 0 de un total de 0 registros",
              "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
              "sInfoPostFix":    "",
              "sSearch":         "Buscar:",
              "sUrl":            "",
              "sInfoThousands":  ",",
              "sLoadingRecords": "Cargando...",
              "oPaginate": {
                  "sFirst":    "Primero",
                  "sLast":     "Último",
                  "sNext":     "Siguiente",
                  "sPrevious": "Anterior"
              },
              "oAria": {
                  "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente"
              },
              "buttons": {
                  "copy": "Copiar",
                  "colvis": "Visibilidad"
              }
          }});  
          });


          $('.custom-control-input').change(function() {
                

                

                //if(this.checked) {
                    var returnVal = confirm("¿Estas seguro en actualizar el el acceso del usuario?");
                    console.log(returnVal, $(this).data("tipo"));
                    var variable = $(this).data("tipo");
                    var user_id = $(this).data("user");
                    var dataPost = {
                        "var": this.checked,
                        "variable": variable,
                        "user_id": user_id
                    };
                    var dataString = JSON.stringify(dataPost);

                    $.ajax({
                    url: 'conf/update-perm.php',
                    data: {myData: dataString},
                    type: 'POST',
                    success: function(response) {
                        console.log(response);
                    }
                    });

                //}
           });



          $(".ver-alfa").attr('Doble clic para editar los datos');


          $(".config-accion-estado").click(function() {

            var temp2=parseInt($(this).val());
            var id = $(this).data("id");

            
            $.get("./visualizacion/update-activos.php","id="+id+"&estado="+temp2,function(data){
                  $("#vista").html(data);
              });
            if(temp2==1){
                $(this).addClass("btn-info");
                $(this).removeClass("btn-secondary");
                $(this).html("Desactivar");
                $(this).val("0");
              }
              else{
                $(this).addClass("btn-secondary");
                $(this).removeClass("btn-info");
                $(this).html("Activar");
                $(this).val("1");
              }
          });


          $(".activo-inactivo").click(function(){
              id = $(this).data("id");
              if ($(this).is(":checked")==false){
                  estado=0;
              }
              else{
                  estado=1;
              }
              //var estado = $(this).is(":checked");
              
          });
                  
          </script>

    </body>

</html>









