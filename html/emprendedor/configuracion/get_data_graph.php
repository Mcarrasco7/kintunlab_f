<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';
  include '../../bd_consul/conexion.php';
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  //get users from database

  $userid = $_POST['id']; 


  $sqlid = "SELECT graficos FROM grafico where id_emprendedor= ".$_POST['id']." and estado = 1";

  
  #$sqlid = "select count(*) from emprendedor where indigena = 1";
  
  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);

  
  $datos = array('grafico' => $rowdata);

  echo json_encode($datos);

  //var_dump($rowdata);




?>