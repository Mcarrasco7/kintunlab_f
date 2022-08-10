<?php
   $completarurl =".";
   $error="";
   include 'bd_consul/conexion.php';
   session_start();

   if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      $myusername = mysqli_real_escape_string($mysqli,$_POST['nombre']);
      $mypassword = mysqli_real_escape_string($mysqli,$_POST['contrasenia']); 
      $mypassword2 = openssl_digest( $mypassword,"sha512");

      header('Location: '.$completarurl.'/pages-login.php');
      
      $sql = "SELECT user_id, user_name, user_type, id_user_data FROM user WHERE user_name = '$myusername' and user_password = '$mypassword2' and user_active = 1" ;
      $result = mysqli_query($mysqli,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      
      $count = mysqli_num_rows($result);
      
    
      echo $count;
      if($count != 0) {

        $type = $row['user_type'];
        $userdata = $row['id_user_data'];
        $_SESSION['user_id'] = $row['user_id'];
      
        $sqldata = "SELECT id_comuna, name FROM user_data WHERE id_user_data = '$userdata'";
        $resultdata = mysqli_query($mysqli,$sqldata);
        $rowdata = mysqli_fetch_array($resultdata,MYSQLI_ASSOC);
        $idcomuna= $rowdata['id_comuna'];
        $_SESSION['name'] = $rowdata['name'];
        $_SESSION['idcomuna']  = $idcomuna;
  
        $sqlcomuna = "SELECT C.comuna, R.region, R.id as id_reg FROM comunas AS C, provincias AS P, regiones AS R WHERE C.id = '$idcomuna' and C.provincia_id=P.id And P.region_id=R.id";
        $resultcomuna= mysqli_query($mysqli,$sqlcomuna);
        $rowcomuna = mysqli_fetch_array($resultcomuna,MYSQLI_ASSOC);
        $comuna = $rowcomuna['comuna'];
        $region = $rowcomuna['region'];
        $idregion = $rowcomuna['id_reg'];
        
        
        $_SESSION['comuna'] = $comuna;
        $_SESSION['region'] = $region;
        $_SESSION['idregion'] = $idregion;
        $_SESSION['user'] = $row['user_name'];
        $_SESSION['type'] = $type;
        $_SESSION['start'] = time();
        $_SESSION['expire'] = $_SESSION['start'] + (360 * 60);
        $_SESSION['loggedin_time']=time();
        if(!empty($_POST["recordar"])) {
            setcookie ("member_login",$_POST['nombre'],time()+ (10 * 365 * 24 * 60 * 60));
        } else {
          if(isset($_COOKIE["member_login"])) {
            setcookie ("member_login","");
          }
        }

        if($type==2){
          header("location:  ./index.php");
        }
        elseif($type==1){
          header("location: ./index.php");
        }
      }else {
         $error = "Usuario o contraseña incorrectas";

      }
   }





   mysqli_close($mysqli);




?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Ingreso | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />

    </head>

    <body class="loading authentication-bg" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <div class="account-pages mt-5 mb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="card">

                            <!-- Logo -->
                            <div class="card-header pt-4 pb-4 text-center bg-white">
                                <a href="index.html">
                                    <span><img src="assets/images/logo.png" alt="" height="70"></span>
                                </a>
                            </div>

                            <div class="card-body p-4">
                                
                                <div class="text-center w-75 m-auto">
                                    <!--<h4 class="text-dark-50 text-center mt-0 font-weight-bold">Ingreso</h4>-->
                                    <p class="text-muted mb-4">Ingresa tu nombre de usuario y tu contraseña para ingresar al panel de administración</p>
                                </div>

                                <form class="user" action="" method="post" role="form" id="form_login">

                                    <div class="form-group">
                                        <label for="nombre">Usuario</label>
                                        <input class="form-control" type="text" id="nombre" name="nombre" required="" placeholder="Ingresa tu nombre de usuario">
                                    </div>

                                    <div class="form-group">
                                        <!--<a href="pages-recoverpw.html" class="text-muted float-right"><small>Olvidaste tu contraseña?</small></a>-->
                                        <label for="password">Contraseña</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="contrasenia" name = "contrasenia" class="form-control" placeholder="Ingresa tu contraseña">
                                            <div class="input-group-append" data-password="false">
                                                <div class="input-group-text">
                                                    <span class="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked>
                                            <label class="custom-control-label" for="checkbox-signin">Recordarme</label>
                                        </div>
                                    </div>

                                    <div class="form-group mb-0 text-center">
                                        <button class="btn btn-primary" type="submit">Ingreso</button>
                                    </div>

                                </form>
                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card 

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted">Don't have an account? <a href="pages-register.html" class="text-muted ml-1"><b>Sign Up</b></a></p>
                            </div> 
                        </div>
                        end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page -->

        <footer class="footer footer-alt">
            2020 - 2021 © KintunLab
        </footer>

        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        
    </body>
</html>
