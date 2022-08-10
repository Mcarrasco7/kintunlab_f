<?php
  $completarurl="..";
   include '../consultas_bd/validar.php';
   include '../consultas_bd/validar_onemi.php';
  $error="";
   include '../consultas_bd/conexion.php';


   

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

  <style type="text/css">
  li.active{
      background-color: #247cE2!important;  
  } 

  .main-text
    {
        position: absolute;
        top: 50px;
        width: 96.66666666666666%;
        color: #FFF;
    }
    .btn-min-block
    {
        min-width: 170px;
        line-height: 26px;
    }
    .btn-clear
    {
        color: #FFF;
        background-color: transparent;
        border-color: #FFF;
        margin-right: 15px;
    }
    .btn-clear:hover
    {
        color: #000;
        background-color: #FFF;
    }
    .carousel-control-prev, .carousel-control-next{
          height: 50%;
          margin-top: auto;
          margin-bottom: auto;
    }
    select::-ms-expand {  display: none; }
    select{
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
    }
    @-moz-document url-prefix(){
      .seleccion-user{box-sizing: border-box; position: relative; overflow: hidden;}
      .seleccion-user select { width: 100%; background-position: right 30px center !important; border: none !important;}
    }
    .seleccion-user{
    background-color:#fff; 
    padding: 0.7rem;
    border-radius: 10rem;
  }
  form.user .form-control-user, .seleccion-user{
    border-radius: 0rem!important;
  }
  label{
    font-weight: 600!important;
  }
  .font-13 {
    font-size: 13px!important;
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
            <div class="row justify-content-center">
            <form class="user w-100" action="" method="post" role="form" id="form_registro">
              <div class="col-xl-12 col-md-12 ">

                <div class=" o-hidden border-0 bottom-0 my-5">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class=" pb-0">
                        
                          <div class="text-center">
                            <h1 class="h3 mb-4" style="color:#3b83bd">Seleccionar Localización</h1>
                          </div>
                          <hr style="background-color:#3b83bd;">
                          <div class="form-group">
                            <label class="text-dark">Región</label>
                            <div class="btn-user btn-group text-center form-group w-100 p-0" >
                              <select id="regiones" name="regiones" class="seleccion-user dropdown-toggle w-100 h-100 form-control">
                              <?php  
                                  $sqlregion = "select * from regiones";
                                  $queryregion = $mysqli->query($sqlregion);   
                                  if($queryregion->num_rows>0){ 
                                    while ($r=$queryregion->fetch_array()){
                                      echo "<option value='".$r["id"]."'>".$r["region"]."</option>";
                                    }
                                  }
                              ?>
                              </select>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="text-dark">Provincia</label>
                            <div class="btn-user btn-group text-center form-group w-100 p-0" >
                              <select id="provincias" name="provincias" class="seleccion-user dropdown-toggle w-100 h-100 form-control">
                              </select>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="text-dark">Comuna</label>
                            <div class="btn-user btn-group text-center form-group w-100 p-0" >
                              <select id="comunas" name="comunavalue" type ="text" class=" seleccion-user dropdown-toggle w-100 h-100 form-control">
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class=" pb-0">
                          <div class="text-center">
                              <h1 class="h3 mb-4" style="color:#3b83bd">Seleccionar Tipo</h1>
                            </div>
                            <hr style="background-color:#3b83bd;">
                            
                            
                            <div class="form-group">
                              <label class="text-dark">Tipo de usuario</label>
                              <div class="btn-user btn-group text-center form-group w-100 p-0">
                                <select id="tipousuario" name="tipousuario" class="seleccion-user dropdown-toggle w-100 h-100 form-control">
                                  <option value=1> Usuario - Encargado municipal</option>
                                  <option value=2> Usuario - ONEMI</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label class="text-dark">Genero del usuario/a</label>
                                <div class="btn-user btn-group text-center w-100 p-0" >
                                  <select id="sexo" name="sexo" class="seleccion-user dropdown-toggle w-100 h-100 form-control">
                                    <option value=1>Hombre</option>
                                    <option value=2>Mujer</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div class="col-lg-6">
                        <div class="">
                          
                          <div class="text-center">
                            <h1 class="h3 mb-4" style="color:#3b83bd">Datos Personales</h1>
                          </div>
                          <hr style="background-color:#3b83bd;">
                          <form class="user" action="" method="post" role="form" id="form_login">
                            <div class="form-group">
                              <label class="text-dark">Nombre completo</label>
                              <input style="text-align: center;" type="text" class="form-control form-control-user color-texto-gray" id="nombrecompleto" aria-describedby="Name" name="nombrecompleto" placeholder="Ingresar nombre completo" required>
                              <span class="font-13 text-muted">ej. "Luis Joaquin Rivas Cuadrado"</span>
                            </div>
                            <div class="form-group">
                              <label class="text-dark">Nombre de usuario</label>
                              <input style="text-align: center;" type="text" class="form-control form-control-user color-texto-gray" id="nombreusuario" aria-describedby="Username" name="nombreusuario" placeholder="Ingresar nombre de usuario" required>
                              <span class="font-13 text-muted">ej. "Padrelascasas, Temuco, Emiliob"</span>
                            </div>
                            <div class="form-group">
                            <label class="text-dark">Correo electronico</label>
                              <input style="text-align: center;" type="email" class="form-control form-control-user color-texto-gray" id="correo" name="correo" placeholder="Ingresar correo" required>
                              <span class="font-13 text-muted">ej. "luisrivasC@gmail.com"</span>
                            </div>
                            <div class="form-group">
                            <label class="text-dark">Ingresar nueva contraseña</label>
                              <div class="input-group show_hide_password" >
                              <input style="text-align: center;" type="password" class="form-control form-control-user color-texto-gray" id="contrasenia" name="contrasenia" placeholder="Ingregar contraseña" required>
                                <div class="input-group-prepend">
                                  <a class="input-group-text" id="validationTooltipUsernamePrepend"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                </div>
                              </div>
                              <span class="font-13 text-muted">Recordar usar una contraseña segura</span> 
                            </div>
                            <div class="form-group">
                              <label class="text-dark">Re-Ingresar contraseña</label>
                              <div class="input-group show_hide_password" >
                              <input style="text-align: center;" type="password" class="form-control form-control-user color-texto-gray" id="contraseniaconfirmar" name="contraseniaconfirmar" placeholder="Ingresar contraseña nuevamente" required>
                                <div class="input-group-prepend">
                                  <a class="input-group-text" id="validationTooltipUsernamePrepend"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                </div>
                              </div>
                              <span class="font-13 text-muted" id="alert-pass">Las contraseñas deben coincidir</span>    
                            </div>
                            <div class="form-group">
                              <label class="text-dark">Fecha de nacimiento</label>
                              <input style="text-align: center;" type="date" class="form-control form-control-user color-texto-gray" id="date" name="date" placeholder="Ingregar año de nacimiento" required>
                              <span class="font-13 text-muted">ej "09-04-1981"</span> 
                            </div>
                            <div class="form-group">
                              <label class="text-dark">Telefono de contacto</label>
                              <input style="text-align: center;" type="tel" class="form-control form-control-user color-texto-gray" id="tel" name="tel" placeholder="Ingregar telefono" required>
                              <span class="font-13 text-muted">ej "+56993493211" ó "93493211"</span>
                            </div>
                             <hr>
                             <div style = "font-size:11px; color:#cc0000; margin-top:10px" class="text-center"><?php echo $error; ?></div> 
                            <button type="submit" id="submit" class="btn btn-primary btn-user btn-block mb-2">
                              Registrar
                            </button>
                            <a href="../inicio-onemi.php"  style="text-decoration:none;">
                            <button class="btn btn-danger btn-user btn-block" type="button" id="actualizar-ifs" >Cancelar</button>
                            </a>
                          </form>
                         

                        </div>
                      </div>
                    </div>
                    
                </div>

              </div>

            </div>


        </div>
      <!-- End of Main Content -->
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
  <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
  <script src="../vendor/bootstrap-notify/bootstrap-notify.min.js"></script>


<script type="text/javascript">

//carga de opciones provincia
function cargar_provincia(id){
  
  $.post("./select-comuna/provincia.php",
  {
    id: id
  },
  function(data, status){
    $("#provincias").html(data);
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
  });
}  

$("#provincias").change(function() {
  cargar_comuna(document.getElementById('provincias').value);
});

/*
document.getElementById('regiones').value=region;
cargar_provincia(document.getElementById('regiones').value);
*/  

$( document ).ready(function() {
  cargar_provincia(1);
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
      url: "validaciones/validacion-registro.php",
      data: form.serialize(), // serializes the form's elements.
      success: function(data)
      {
          var result = JSON.parse(data);
          console.log(result); // show response from the php script.
          if(result.estado==="true"){
            $('#form_registro')[0].reset();
            cargar_provincia(1);
            var notify = $.notify('<strong>Nuevo Usuario</strong> creado correctamente', {
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
            var notify = $.notify('<strong>Error</strong> al registrar al usuario', {
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

  if ($('input[name=contrasenia]').val() === $(this).val()) {
      this.setCustomValidity('');
  } else {
      this.setCustomValidity('Las constraseñas no coinciden');
  }
});

  </script>

</body>

</html>
