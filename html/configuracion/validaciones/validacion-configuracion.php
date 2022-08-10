<?php
$completarurl="../..";
include '../../consultas_bd/conexion.php';
include '../../consultas_bd/validar.php';

$creado = "false";
$userid = $_POST['id']; 

    /*if ($contraseniaori==openssl_digest($_POST['contraseniaantigua'],"sha512") || $_SESSION['type']==2){*/
    
      if($_POST['contrasenia']==$_POST['contraseniaconfirmar']){

        $contrasenia=$_POST['contrasenia'];
        $mypasswordtemp = mysqli_real_escape_string($mysqli,$contrasenia); 
        $mypassword = openssl_digest( $mypasswordtemp,"sha512");
        
        $sqlpass = "select * from user as U, user_data as UD where U.user_id = " . $userid . " AND U.user_active = 1 and U.id_user_data =  UD.id_user_data";
        $querypass = mysqli_query($mysqli,$sqlpass);   
        if($querypass->num_rows>0){ 
          while ($r=$querypass->fetch_array()){
            $pass=$r["user_password"];
            
            if($_POST['contraseniaconfirmar']=="" || $_POST['contraseniaconfirmar']==""){
              $mypassword = $pass;
            } 
          }
        }
      }

      $idcomuna = $_POST['comunavalue'];

      
      $input_date=$_POST['date'];
      $date=date("Y-m-d",strtotime($input_date));
      $nombrecompleto=$_POST['nombrecompleto'];
      $correo=$_POST['correo'];
      $tel=$_POST['tel'];
      $sexo=$_POST['sexo'];
      $tipousuario=$_POST['tipousuario'];
      
      if($idcomuna!=""){
        
          if($_SESSION['type']==1){

            $sqldata ="UPDATE user U INNER JOIN user_data UD ON (U.id_user_data = UD.id_user_data)
            SET 
              U.user_password='$mypassword',
              UD.name='$nombrecompleto', UD.email='$correo', UD.birthday='$date', UD.telefono='$tel', UD.sexo='$sexo' 
            WHERE U.user_id = ".$userid;
            
          }
          if($_SESSION['type']==2){
            if($_POST['contrasenia']==""){
              $sqldata ="UPDATE user U INNER JOIN user_data UD ON (U.id_user_data = UD.id_user_data)
                          SET 
                            U.user_type='$tipousuario',
                            UD.name='$nombrecompleto', UD.email='$correo', UD.birthday='$date', UD.telefono='$tel', UD.sexo='$sexo', UD.f='$idcomuna' 
                          WHERE U.user_id = ".$userid;
            }
            else{
              $sqldata ="UPDATE user U INNER JOIN user_data UD ON (U.id_user_data = UD.id_user_data)
                          SET 
                            U.user_password='$mypassword', U.user_type='$tipousuario',
                            UD.name='$nombrecompleto', UD.email='$correo', UD.birthday='$date', UD.telefono='$tel', UD.sexo='$sexo', UD.id_comuna='$idcomuna' 
                          WHERE U.user_id = ".$userid;
            }
            
          }
      }
      
      if($mysqli->query($sqldata) === TRUE){
        $creado = "true";
      } 
      else{
        echo mysqli_errno($mysqli);
        $creado = "false";
      }

  
    /*}
    else{
      $error = "Error al ingresar su contraseña actual";
    }*/
  


$data = array(
    'estado' => $creado,
    'sql' => $sqldata,
    'sql2' => $querypass
);

echo json_encode($data);



?>