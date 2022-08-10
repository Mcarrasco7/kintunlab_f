<?php
$completarurl="../..";
include '../../consultas_bd/conexion.php';



$comunassss=$_POST['comunavalue'];

$sqlcom = "SELECT id FROM comunas where comuna = '$comunassss'";
$resultcom = mysqli_query($mysqli,$sqlcom);
$rowcom = mysqli_fetch_array($resultcom,MYSQLI_ASSOC);
$idcomuna = $comunassss;
$nombreusuario=$_POST['nombreusuario'];
$input_date=$_POST['date'];
$date=date("Y-m-d",strtotime($input_date));
$nombrecompleto=$_POST['nombrecompleto'];
$correo=$_POST['correo'];
$tel=$_POST['tel'];
$sexo=$_POST['sexo'];
$tipousuario=$_POST['tipousuario'];

$creado = "false";

if($idcomuna!=0){

    $sqldata = "INSERT INTO user_data (name, email, birthday, telefono, sexo, id_comuna)
            VALUES ('$nombrecompleto','$correo','$date','$tel','$sexo','$idcomuna')";   
    //var_dump($sqldata);

    if ( $mysqli->query($sqldata) === TRUE ) {
      
      $usercount = mysqli_insert_id($mysqli);
      $mypassword = mysqli_real_escape_string($mysqli,$_POST['contrasenia']); 
      $mypassword = openssl_digest( $mypassword,"sha512");
      
      $sqluser = "INSERT INTO user (user_name, user_password, user_type, user_active, id_user_data)
      VALUES ('$nombreusuario','$mypassword','$tipousuario','1','$usercount')";
      //var_dump($sqluser);
        if($mysqli->query($sqluser) === TRUE){
          //$latest_id = $mysqli->insert_id;
          $creado = "true";
        }
        else{
          echo mysqli_errno($mysqli);
          $creado = "false";
        }
        
    }
  }
  


$data = array(
    'estado' => $creado
);

echo json_encode($data);



?>