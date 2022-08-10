<?php 
$completarurl="../..";
include '../../consultas_bd/conexion.php';
include '../../consultas_bd/validar.php';


$sqlupdate = "UPDATE `user` SET `user_active` =".$_GET['estado']." WHERE `user`.`user_id` =".$_GET['id'];

$queryupadate = $mysqli->query($sqlupdate);

echo $sqlupdate;

?>