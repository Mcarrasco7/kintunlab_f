<?php
  
  $completarurl="../";
  include '../bd_consul/validar.php';
  $error="";
  include '../bd_consul/conexion.php';
  $completarurl="../";
  
  
  
  $userid = $_GET['id']; 
  
  $sqlid = "SELECT UD.*, U.*, C.comuna_id as id_comuna, P.provincia_id as id_provincia, R.region_id as id_region FROM user_data UD, user U, comunas C, provincias P, regiones R
  WHERE UD.id_user_data = U.id_user_data and UD.id_comuna = C.comuna_id and C.provincia_id = P.provincia_id and P.region_id = R.region_id and U.user_id = ".$userid;
 
  

  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);
  if($resultid->num_rows<1){ 
    header('Location: ../index.php');
    exit();
  }
  
  if(($_SESSION['type']==1 && $userid!=$_SESSION['user_id']) && $rowdata['user_type']!=3 ){
    header('Location: ../index.php');
    exit();
  
  }
  //var_dump($rowdata);
  $iddata=$rowdata['id_user_data'];
  $contraseniaori= $rowdata['user_password'];
  $user_type=$rowdata['user_type'];

  $name=$rowdata['name'];
  $email=$rowdata['email'];
  $birthday=$rowdata['birthday'];
  $telefono=$rowdata['telefono'];
  $sexo=$rowdata['sexo'];
  $id_comuna=$rowdata['id_comuna'];
  

  echo "<script>var id_user = '".$userid."';var comuna ='".$rowdata['id_comuna']."'; var provincia='".$rowdata['id_provincia']."'; var region='".$rowdata['id_region']."';</script>";




/*
  $sqlid = "SELECT UD.*, U.*, C.id as id_comuna, P.id as id_provincia, R.id as id_region FROM user_data UD, user U, comunas C, provincias P, regiones R
  WHERE UD.id_user_data = U.id_user_data and UD.id_comuna = C.id and C.provincia_id = P.id and P.region_id = R.id and U.user_id = ".$userid;


  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);

  $iddata=$rowdata['id_user_data'];
  $contraseniaori= $rowdata['user_password'];
  $user_type=$rowdata['user_type'];

  $name=$rowdata['name'];
  $email=$rowdata['email'];
  $birthday=$rowdata['birthday'];
  $telefono=$rowdata['telefono'];
  $sexo=$rowdata['sexo'];
 */  

?>


<!DOCTYPE html>
<html lang="en" class="mm-active">

<head>
        <meta charset="utf-8" />
        <title>Configuración | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- third party css end -->

        <!-- App css -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />

  <style type="text/css">

/*.bar-label{
            fill: #000 !important;
            font-size:0.8rem!important;
        }
  
        */
        .wrapper {
          overflow-y: scroll;
}
    
  </style>
</head>


<body class="loading" data-layout-config='{"leftSideBarTheme":"light","layoutBoxed":false, "leftSidebarCondensed":true, "leftSidebarScrollable":true,"darkMode":false, "showRightSidebarOnStart": true}'  data-leftbar-theme="light" data-leftbar-compact-mode="condensed">
  <!-- Page Wrapper -->

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
                        <form class="user w-100" action="" method="post" role="form" id="form_registro">
                          <div class="col-xl-12 col-md-12 ">

                            <div class=" o-hidden border-0 bottom-0 my-5">
                                <div class="row">
                                  <div class="col-lg-6">
                                    <div class="pb-0">
                                    
                                      <div class="text-center">
                                        <input id="id" name="id" type="hidden" value="<?php echo $userid; ?>">
                                        <h1 class="h3 mb-4" style="color:#3b83bd">Seleccionar Localización</h1>
                                      </div>
                                      <hr style="background-color:#3b83bd;">
                                      <div class="form-group">
                                        <label class="text-dark">Región</label>
                                        <div class="btn-user btn-group text-center form-group w-100 p-0" >
                                          <select id="regiones" name="regiones" class="seleccion-user dropdown-toggle w-100 h-100 form-control" >
                                          <?php  
                                              $sqlregion = "select * from regiones";
                                              $queryregion = $mysqli->query($sqlregion);   
                                              if($queryregion->num_rows>0){ 
                                                while ($r=$queryregion->fetch_array()){
                                                  echo "<option value='".$r["region_id"]."'>".$r["region_nombre"]."</option>";
                                                }
                                              }
                                          ?>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="text-dark">Provincia</label>
                                        <div class="btn-user btn-group text-center w-100 p-0" >
                                          <select id="provincias" name="provincias" class="seleccion-user dropdown-toggle w-100 h-100 form-control" >
                                          </select>
                                          </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="text-dark">Comuna</label>
                                        <div class="btn-user btn-group text-center w-100 p-0" >
                                          <select id="comunas" name="comunavalue" type ="text" class=" seleccion-user dropdown-toggle w-100 h-100 form-control" >
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pb-0">
                                    
                                      <div class="text-center">
                                        <h1 class="h3 mb-4" style="color:#3b83bd">Seleccionar Tipo</h1>
                                      </div>
                                      <hr style="background-color:#3b83bd;">
                                      
                                      
                                      <div class="form-group">
                                      <label class="text-dark">Tipo de usuario</label>
                                        <div class="btn-user btn-group text-center w-100 p-0" >
                                          <select id="tipousuario" name="tipousuario" class="seleccion-user dropdown-toggle w-100 h-100 form-control" <?php if ($_SESSION['type']== 1) {echo "disabled";} ?>>
                                            <option value=1 <?php if ($user_type == 1) {echo "selected='selected'";} ?> > Usuario - Encargado municipal</option>
                                            <option value=2 <?php if ($user_type == 2) {echo "selected='selected'";} ?> > Usuario - ONEMI</option>
                                            <option value=2 <?php if ($user_type == 3) {echo "selected='selected'";} ?> > Usuario - COE</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label class="text-dark">Genero del usuario/a</label>
                                        <div class="btn-user btn-group text-center w-100 p-0" >
                                          <select id="sexo" name="sexo" class="seleccion-user dropdown-toggle w-100 h-100 form-control">
                                            <option value=1 <?php if ($sexo == 1) {echo "selected='selected'";} ?> >Hombre</option>
                                            <option value=2 <?php if ($sexo == 2) {echo "selected='selected'";} ?> >Mujer</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="pb-0">
                                      
                                      <div class="text-center">
                                        <h1 class="h3 mb-4" style="color:#3b83bd">Datos Personales</h1>
                                      </div>
                                      <hr style="background-color:#3b83bd;">
                                      <form class="user" action="" method="post" role="form" id="form_login">
                                        <div class="form-group">
                                          <label class="text-dark">Nombre completo</label>
                                          <input style="text-align: center;" <?php {echo "value= '".$name."'";} ?> type="text" class="form-control form-control-user color-texto-gray" id="nombrecompleto" aria-describedby="Name" name="nombrecompleto" placeholder="Ingresar nombre completo" required>
                                          <span class="font-13 text-muted">ej. "Luis Joaquin Rivas Cuadrado"</span>
                                        </div>
                                        <div class="form-group">
                                          <label class="text-dark">Correo electronico</label>
                                          <input style="text-align: center;" <?php {echo "value= '".$email."'";} ?> type="email" class="form-control form-control-user color-texto-gray" id="correo" name="correo" placeholder="Ingresar correo" required>
                                          <span class="font-13 text-muted">ej. "luisrivasC@gmail.com"</span>
                                        </div>
                                        <?php if ($_SESSION['type']== 1) {?>
                                        <!--
                                        <div class="form-group">
                                          <input style="text-align: center;" type="password" class="form-control form-control-user color-texto-gray" id="contraseniaantigua" name="contraseniaantigua" placeholder="Ingregar contraseña actual" required>
                                        </div>
                                        -->
                                        <?php }?>
                                        <div class="form-group">
                                        <label class="text-dark">Ingresar nueva contraseña</label>
                                          <div class="input-group show_hide_password" >
                                          <input style="text-align: center;" type="password" class="form-control form-control-user color-texto-gray" id="contrasenia" name="contrasenia" placeholder="Ingregar contraseña">
                                            <div class="input-group-prepend">
                                              <a class="input-group-text" id="validationTooltipUsernamePrepend"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                            </div>
                                          </div>
                                          <span class="font-13 text-muted">Recordar usar una contraseña segura</span> 
                                        </div>
                                        <div class="form-group">
                                          <label class="text-dark">Re-Ingresar contraseña</label>
                                          <div class="input-group show_hide_password" >
                                          <input style="text-align: center;" type="password" class="form-control form-control-user color-texto-gray" id="contraseniaconfirmar" name="contraseniaconfirmar" placeholder="Ingresar contraseña nuevamente">
                                            <div class="input-group-prepend">
                                              <a class="input-group-text" id="validationTooltipUsernamePrepend"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                            </div>
                                          </div>
                                          <span class="font-13 text-muted" id="alert-pass">Las contraseñas deben coincidir</span>    
                                        </div>
                                        <div class="form-group">
                                          <label class="text-dark">Fecha de nacimiento</label>
                                          <input style="text-align: center;" <?php {echo "value= '".$birthday."'";} ?> type="date" class="form-control form-control-user color-texto-gray" id="date" name="date" placeholder="Ingregar año de nacimiento" required>
                                          <span class="font-13 text-muted">ej "09-04-1981"</span>
                                        </div>
                                        <div class="form-group">
                                          <label class="text-dark">Telefono de contacto</label>
                                          <input style="text-align: center;" <?php {echo "value= '".$telefono."'";} ?> type="tel" class="form-control form-control-user color-texto-gray" id="tel" name="tel" placeholder="Ingregar telefono" required>
                                          <span class="font-13 text-muted">ej "+56993493211" ó "93493211"</span>
                                        </div>
                                        <hr  style="background-color:#3b83bd;">
                                        <div style = "font-size:11px; color:#cc0000; margin-top:10px" class="text-center"><?php echo $error; ?></div> 
                                        <button type="submit" id="submit" class="btn btn-primary btn-user btn-block mb-2">
                                          Actualizar
                                        </button>
                                        <a href="../index.php"  style="text-decoration:none;">
                                        <button class="btn btn-danger btn-user btn-block" type="button" id="actualizar-ifs" >Salir</button>
                                        </a>
                        </form>
                        

                    </div> <!-- container fluid -->

                </div> <!-- content -->

               
            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        </div>
        <?php include "../partials/footer.php" ?>


  
  <!-- End of Page Wrapper -->

  
  <!-- Bootstrap core JavaScript-->
  
   <!-- bundle -->
  <script src="../assets/js/vendor.min.js"></script>
  <script src="../assets/js/app2.js"></script>

  <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mouse0270-bootstrap-notify/3.1.7/bootstrap-notify.js"></script>

  <script type="text/javascript">
 


//carga de opciones provincia
function cargar_provincia(id){
  
  $.post("./select-comuna/provincia.php",
  {
    id: id
  },
  function(data, status){
    $("#provincias").html(data);
    document.getElementById('provincias').value=provincia;
    cargar_comuna(document.getElementById('provincias').value);
   
  });
}  

$("#regiones").change(function() {
  cargar_provincia(document.getElementById('regiones').value);
});


//carga de opciones comuna
function cargar_comuna(id){
  $.post("./select-comuna/comuna.php",
  {
    id: id
  },
  function(data, status){
    $("#comunas").html(data);
    document.getElementById('comunas').value=comuna;  
  });
}  

$("#provincias").change(function() {
  cargar_comuna(document.getElementById('provincias').value);
});


  
    



  $( document ).ready(function() {
  console.log(region, provincia, comuna);
  document.getElementById('regiones').value=region;
  cargar_provincia(document.getElementById('regiones').value);
  $(".show_hide_password a").on('click', function(event) {
    event.preventDefault();
    console.log(this.closest( ".show_hide_password"));
    var passclass=this.closest( ".show_hide_password");
    
    if($('input', passclass).attr("type") == "text"){
        $('input', passclass).attr('type', 'password');
        $('i', passclass).addClass( "fa-eye-slash" );
        $('i', passclass).removeClass( "fa-eye" );
    }else if($('input', passclass).attr("type") == "password"){
        $('input', passclass).attr('type', 'text');
        $('i', passclass).removeClass( "fa-eye-slash" );
        $('i', passclass).addClass( "fa-eye" );
    }
  });

 
/*
  jQuery.validator.addMethod("selectnic", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9 ]+$/.test(value);
  });
*/



});    



$("#form_registro").submit(function(e) {

e.preventDefault(); // avoid to execute the actual submit of the form.

var form = $(this);
var url = form.attr('action');
console.log(form.serialize(),url);
console.log($("#contrasenia").val(),$("#contraseniaconfirmar").val());
if($("#contrasenia").val() == $("#contraseniaconfirmar").val() ){
  console.log("enviado");
  
  $.ajax({
    type: "POST",
    url: "validaciones/validacion-configuracion.php",
    data: form.serialize(), // serializes the form's elements.
    success: function(data)
    {
        var result = JSON.parse(data);
        console.log(result); // show response from the php script.
        if(result.estado==="true"){
          document.getElementById('regiones').value=region;
          cargar_provincia(document.getElementById('regiones').value);
          var notify = $.notify('<strong>Usuario</strong> actualizado correctamente', {
              type: 'Success',
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

        }
        else{
          var notify = $.notify('<strong>Error</strong> al actualizar los datos del usuario', {
              type: 'Danger',
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

        }
    }
  });
}
});




$('input[name=contraseniaconfirmar]').keyup(function () {
    'use strict';
    console.log($('input[name=contrasenia]').val(),$(this).val());
    if ($('input[name=contrasenia]').val() === $(this).val() || ($('input[name=contrasenia]').val() =="" && $(this).val() =="")) {
        this.setCustomValidity('');
    } else {
        this.setCustomValidity('Las constraseñas no coinciden');
    }
});






  <?php
  if(($_SESSION['type']==2)){
?>
$( "#actualizar-ifs").click(function() {
  var ifs1 = document.getElementById('ifs1').value.replace(",", ".");
  var ifs2 = document.getElementById('ifs2').value.replace(",", ".");
  var ifs3 = document.getElementById('ifs3').value.replace(",", ".");
  var ifs4 = document.getElementById('ifs4').value.replace(",", ".");
  
  if(ifs1<=1 && ifs1>=0 && ifs2<=1 && ifs2>=0 && ifs3<=1 && ifs3>=0 && ifs4<=1 && ifs4>=0){
    $.post("./select-comuna/actualizar-ifs.php",
    {
      id: id_user,
      ifs1:  ifs1,
      ifs2:  ifs2,
      ifs3:  ifs3,
      ifs4:  ifs4
    },
    function(data, status){
      console.log("hecho");  
    });
  }
  else{
    alert("Lo indices ingresados no corresponden al rango maximo");
  }
});



  </script>
<?php
  }
?>

  </script>

</body>

</html>

