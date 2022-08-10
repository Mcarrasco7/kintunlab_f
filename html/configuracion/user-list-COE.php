<?php
  $completarurl="..";
   include '../consultas_bd/validar.php';

  $error="";
   include '../consultas_bd/conexion.php';


   $sql= "SELECT UD.*, U.*, C.comuna FROM user_data UD, user U, comunas C
   WHERE U.user_type = 3 and UD.id_user_data = U.id_user_data and UD.id_comuna = C.id order by user_id;";

  $result = $mysqli->query($sql);

  $customers = $result->fetch_all(MYSQLI_ASSOC);


   mysqli_close($mysqli);

?>


<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>KIMGENDATA - Inicio</title>

  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <link href="../css/sb-admin-2.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../js/chartist/dist/chartist.min.css">
  <link href="../css/estilogeneral.css" rel="stylesheet">
  <link rel="icon" href="../files/kimgen_favicon.png">
  <?php
  $completarurl="..";
  if($_SESSION['type']==2){
      echo '<link rel="stylesheet" href="'.$completarurl.'/css/estilo-onemi.css">';
  }
  ?>
  
  <link href="../../vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
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
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
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
    background-color:#ffffffb8!important;
  }
  </style>
  
</head>


<body id="page-top">

  <!-- Page Wrapper -->

  <div id="wrapper">
    
    <?php
    
    $nourl="1";
    $valor=0;
    include '../sidebar.php';
    $completarurl="";
    ?>

        <!-- inicio contenido de pagina -->
        <div class="container-fluid">
          <div class="col-xl-12 col-lg-12">
            <div class="user-dashboard-info-box mb-4 bg-white p-4 table-responsive p-4">
              <table class="table table-responsive  table-hover" id="dataTable">
                <thead>
                  <tr>
                    <th>Usuario</th>
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
  
        </div>
    </div>
      <!-- Footer -->
      <footer class="sticky-footer bg-gradient-primary">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; KIMGENDATA</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    
    <!-- End of Content Wrapper -->

  
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  
  <!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="../js/sb-admin-2.min.js"></script>
  <script src="../js/constantes/predeteminado.js"></script>
  <script src="../vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="../vendor/datatables/dataTables.bootstrap4.min.js"></script>
    
</body>
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

$(".ver-alfa").attr('Doble clic para editar los datos');


$(".config-accion-estado").click(function() {

  var temp2=parseInt($(this).val());
  var id = $(this).data("id");
  console.log(temp2,id);

  
  $.get("./visualizacion/update-activos.php","id="+id+"&estado="+temp2,function(data){
        
        console.log(data);
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



</html>
