<?php



$completarurl="../../";

  $obj = json_decode($_POST["myData"]);

  if($obj->var!=1){
    $obj->var=0;
  }
  
  echo $obj->var;
  echo $obj->variable;
  echo $obj->user_id;
  
  require_once '../../bd_consul/conexion.php';

  $sql = "UPDATE user_permission SET ".$obj->variable."=".$obj->var." WHERE user_id=".$obj->user_id;

  echo $sql;
  
    if ($mysqli->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $mysqli->error;
    }

    $mysqli->close();



  
  
?>